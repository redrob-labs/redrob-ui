#!/usr/bin/env node
'use strict';
/**
 * Generates the app-icon table from the master SVGs vendored under `src/brand/app-icons/`.
 *
 * The SVGs are the 2026 app-icon delivery's `master/` files, copied byte for byte. This script never
 * touches them. It reads them, refuses anything that is not what the delivery ships, and writes two
 * descriptions of the same set:
 *
 *   - `src/brand/appIcons.ts`              the typed table the package exports (keys, names, files)
 *   - `src/brand/app-icons/manifest.json`  the same table for a consumer that cannot run JS - Redrob
 *                                          Canvas is Qt/QML - with a sha256 per file so a vendoring
 *                                          repository can pin the exact bytes, as it does for tokens
 *
 *   node tools/generate/app-icons.js          writes both files
 *   node tools/generate/app-icons.js --check  fails if either is out of date, or a file is missing,
 *                                             extra, or not a self-contained 1024 SVG
 *
 * The product list below is the only hand-written part. A folder on disk that is not in it, or an
 * entry here with no folder, is an error: a new icon must be named here on purpose.
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.join(__dirname, '..', '..');
const DIR = path.join(ROOT, 'src', 'brand', 'app-icons');
const OUT_TS = path.join(ROOT, 'src', 'brand', 'appIcons.ts');
const OUT_JSON = path.join(DIR, 'manifest.json');
const CHECK = process.argv.includes('--check');

/**
 * Every icon in the delivery, in its README's order: the group icon, the launch seven, then the four
 * creative apps. `approved: false` is the delivery's own wording - the creative four are "not yet
 * approved in the design system" - so a consumer can keep them off a public surface until they are.
 */
const PRODUCTS = [
  { key: 'redrob', name: 'Redrob', approved: true },
  { key: 'chat', name: 'Redrob Chat', approved: true },
  { key: 'cowork', name: 'Redrob Cowork', approved: true },
  { key: 'browser', name: 'Redrob Browser', approved: true },
  { key: 'console', name: 'Redrob Console', approved: true },
  { key: 'office', name: 'Redrob Office', approved: true },
  { key: 'design', name: 'Redrob Design', approved: true },
  { key: 'code', name: 'Redrob Code', approved: true },
  { key: 'film', name: 'Redrob Film', approved: false },
  { key: 'shape', name: 'Redrob Shape', approved: false },
  { key: 'cad', name: 'Redrob CAD', approved: false },
  { key: 'canvas', name: 'Redrob Canvas', approved: false },
];

/**
 * The five master files, by the delivery's naming `redrob-<product>-<variant>`:
 *   icon           1024 square tile, unmasked - a platform applies its own mask
 *   icon-dark      the same for a dark appearance
 *   icon-web       masked to the superellipse, transparent corners - for web and product UI
 *   icon-web-dark  the same, dark
 *   symbol         the white symbol alone on transparent - a mono layer
 */
const VARIANTS = ['icon', 'icon-dark', 'icon-web', 'icon-web-dark', 'symbol'];

/** Files in the folder that are ours, not the delivery's. */
const OWN_FILES = new Set(['manifest.json', 'README.md']);

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">';

const failures = [];
const fail = (m) => failures.push(m);

/** The group icon's folder is `redrob/`, every product's is `redrob-<key>/`. */
const dirOf = (key) => (key === 'redrob' ? 'redrob' : `redrob-${key}`);

/**
 * Refuses an SVG that is not a self-contained 1024 drawing. These files are served as-is by every
 * consumer, so a script, an event handler or an external reference must never ride along with an
 * icon update, and a changed canvas size would silently resize every icon on every surface.
 */
function validateSvg(rel, text) {
  if (!text.startsWith(SVG_OPEN)) fail(`${rel}: does not open as a 1024x1024 SVG`);
  if (!text.trimEnd().endsWith('</svg>')) fail(`${rel}: does not end with </svg>`);
  if (/<script|<foreignObject|\son[a-z]+\s*=/i.test(text)) fail(`${rel}: contains script or an event handler`);
  if (/(?:xlink:)?href\s*=\s*["'](?!#)/i.test(text)) fail(`${rel}: references something outside itself`);
  if (/url\(\s*['"]?(?!#)/i.test(text)) fail(`${rel}: has a url() that is not a local fragment`);
}

const sha256 = (buf) => crypto.createHash('sha256').update(buf).digest('hex');

/* ---- read and verify ------------------------------------------------------------------------- */

const expectedDirs = new Set(PRODUCTS.map((p) => dirOf(p.key)));
for (const entry of fs.readdirSync(DIR)) {
  const full = path.join(DIR, entry);
  if (fs.statSync(full).isDirectory()) {
    if (!expectedDirs.has(entry)) fail(`${entry}/: not in the product list - add it to PRODUCTS on purpose`);
  } else if (!OWN_FILES.has(entry)) {
    fail(`${entry}: unexpected file at the top of app-icons/`);
  }
}

const table = [];
for (const product of PRODUCTS) {
  const dir = dirOf(product.key);
  const full = path.join(DIR, dir);
  if (!fs.existsSync(full)) {
    fail(`${dir}/: missing`);
    continue;
  }
  const expectedFiles = new Set(VARIANTS.map((v) => `${dir}-${v}.svg`));
  for (const f of fs.readdirSync(full)) {
    if (!expectedFiles.has(f)) fail(`${dir}/${f}: not one of the five master files`);
  }
  const files = {};
  for (const variant of VARIANTS) {
    const file = `${dir}-${variant}.svg`;
    const rel = `${dir}/${file}`;
    const p = path.join(full, file);
    if (!fs.existsSync(p)) {
      fail(`${rel}: missing`);
      continue;
    }
    const buf = fs.readFileSync(p);
    validateSvg(rel, buf.toString('utf8'));
    files[variant] = { path: rel, bytes: buf.length, sha256: sha256(buf) };
  }
  table.push({ key: product.key, name: product.name, approved: product.approved, files });
}

if (failures.length > 0) {
  for (const f of failures) console.error(`  ${f}`);
  console.error(`\napp-icons: ${failures.length} problem(s), nothing written`);
  process.exit(1);
}

/* ---- render ---------------------------------------------------------------------------------- */

const json = `${JSON.stringify({ variants: VARIANTS, icons: table }, null, 2)}\n`;

const q = (s) => `'${s}'`;
const ts = `// Redrob app icons - ${table.length} icons, ${VARIANTS.length} master SVGs each.
//
// Generated by tools/generate/app-icons.js from the SVGs in src/brand/app-icons/, which are the 2026
// app-icon delivery's master files copied byte for byte. Change the files or the product list in the
// generator and regenerate; a hand edit here is overwritten, and \`yarn app-icons:check\` fails on it.

/** One icon in the set: the group icon, or a product. */
export type AppIconKey =
${table.map((t) => `  | ${q(t.key)}`).join('\n')};

/**
 * The five master files every icon ships.
 *
 * - \`icon\` / \`icon-dark\`: the 1024 square tile, unmasked, for a platform that applies its own mask.
 * - \`icon-web\` / \`icon-web-dark\`: masked to the superellipse with transparent corners, for web and
 *   product UI. This is the one to put on a page.
 * - \`symbol\`: the white symbol alone on transparent, for a mono layer. It has no dark version.
 */
export type AppIconVariant = ${VARIANTS.map(q).join(' | ')};

/** One master file: where it sits under \`brand/app-icons/\`, and its exact bytes for pinning. */
export interface AppIconFile {
  /** Path relative to \`brand/app-icons/\`, e.g. \`redrob-chat/redrob-chat-icon-web.svg\`. */
  path: string;
  /** Size in bytes. */
  bytes: number;
  /** sha256 of the file, so a vendoring repository can tell a stale copy from the current one. */
  sha256: string;
}

/** An icon and its files. */
export interface AppIcon {
  key: AppIconKey;
  /** The product's full name, used as the image's accessible name. */
  name: string;
  /**
   * \`false\` while the design system has not approved the product. Film, Shape, CAD and Canvas ship
   * this way so their apps can use them, but they are not yet for a public, cross-product surface.
   */
  approved: boolean;
  files: Readonly<Record<AppIconVariant, AppIconFile>>;
}

/** Every icon, keyed by \`AppIconKey\`. */
export const appIcons: Readonly<Record<AppIconKey, AppIcon>> = {
${table
  .map(
    (t) => `  ${t.key}: {
    key: ${q(t.key)},
    name: ${q(t.name)},
    approved: ${t.approved},
    files: {
${VARIANTS.map(
  (v) => `      ${/^[a-z]+$/.test(v) ? v : q(v)}: { path: ${q(t.files[v].path)}, bytes: ${t.files[v].bytes}, sha256: ${q(t.files[v].sha256)} },`
).join('\n')}
    },
  },`
  )
  .join('\n')}
};

/** The keys in the delivery's order: the group icon, the launch seven, then the creative four. */
export const appIconKeys: readonly AppIconKey[] = [${table.map((t) => q(t.key)).join(', ')}];
`;

/* ---- write or check -------------------------------------------------------------------------- */

const outputs = [
  [OUT_TS, ts],
  [OUT_JSON, json],
];
if (CHECK) {
  const stale = outputs.filter(([file, text]) => !fs.existsSync(file) || fs.readFileSync(file, 'utf8') !== text);
  if (stale.length > 0) {
    for (const [file] of stale) console.error(`  stale  ${path.relative(ROOT, file)}`);
    console.error('\nRun `yarn app-icons` and commit the result.');
    process.exit(1);
  }
  console.log(`app-icons ok - ${table.length} icons, ${table.length * VARIANTS.length} files verified, table up to date`);
} else {
  for (const [file, text] of outputs) {
    fs.writeFileSync(file, text);
    console.log(`wrote ${path.relative(ROOT, file)}`);
  }
}
