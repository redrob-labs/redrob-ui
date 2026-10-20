#!/usr/bin/env node
'use strict';

/**
 * Checks the BUILT app icons, the way a consumer meets them.
 *
 *   node tools/check/app-icons.js      (after yarn build)
 *
 * `yarn app-icons:check` holds the source folder to its table. This holds `dist/` to the same table,
 * because the build copies the folder with a shell `cp` that nothing else verifies: a file it dropped,
 * or one rewritten on the way (a line-ending filter, an editor's save), would ship with a manifest
 * whose sha256 no longer matches, and the consumer pinning that hash is the first to find out.
 *
 * It also resolves every file through the package's own name, so the `./app-icons/*` export is proven
 * to reach each one, not only to name a directory that exists.
 *
 * `AppIcon` has no case in the reference delivery, so the parity gate cannot see it. The last part
 * renders it from the built package and asserts what it exists for: the right file per variant and
 * theme, one accessible name, and an `<img>` rather than inlined SVG.
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.join(__dirname, '..', '..');
const DIST = path.join(ROOT, 'dist', 'brand', 'app-icons');
const pkg = require(path.join(ROOT, 'package.json'));

const ok = (c, m) => {
  if (!c) {
    console.error('FAIL', m);
    process.exitCode = 1;
  } else console.log('ok  ', m);
};

if (!fs.existsSync(DIST)) {
  console.error('dist/brand/app-icons is missing. Run `yarn build` first.');
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(path.join(DIST, 'manifest.json'), 'utf8'));
const sha256 = (file) => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');

let files = 0;
const wrongBytes = [];
const unresolved = [];
for (const icon of manifest.icons) {
  for (const variant of manifest.variants) {
    const entry = icon.files[variant];
    files++;
    const built = path.join(DIST, entry.path);
    if (!fs.existsSync(built) || sha256(built) !== entry.sha256) wrongBytes.push(entry.path);
    // Self-reference: Node resolves the package's own name through its `exports` map.
    try {
      const resolved = require.resolve(`${pkg.name}/app-icons/${entry.path}`);
      if (path.resolve(resolved) !== path.resolve(built)) unresolved.push(`${entry.path} -> ${resolved}`);
    } catch (error) {
      unresolved.push(`${entry.path}: ${error.code || error.message}`);
    }
  }
}
ok(files === manifest.icons.length * manifest.variants.length && files > 0, `manifest lists ${files} files`);
ok(wrongBytes.length === 0, `every built file matches its sha256${wrongBytes.length ? `: ${wrongBytes.join(', ')}` : ''}`);
ok(unresolved.length === 0, `every file resolves as ${pkg.name}/app-icons/<path>${unresolved.length ? `: ${unresolved.join(', ')}` : ''}`);


/* ---- the component and the helpers, from the built package ------------------------------------- */

const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const ui = require(path.join(ROOT, 'dist', 'index.js'));
const html = (p) => renderToStaticMarkup(React.createElement(ui.AppIcon, p));

ok(
  ui.appIconKeys.length === manifest.icons.length &&
    ui.appIconKeys.every((k, i) => k === manifest.icons[i].key && ui.appIcons[k].files['icon-web'].sha256 === manifest.icons[i].files['icon-web'].sha256),
  'the exported table and manifest.json list the same icons, in the same order, with the same hashes'
);
ok(
  ['film', 'shape', 'cad', 'canvas'].every((k) => ui.appIcons[k].approved === false) &&
    ui.appIconKeys.filter((k) => !ui.appIcons[k].approved).length === 4,
  'only Film, Shape, CAD and Canvas are marked not yet approved'
);
ok(ui.appIconPath('chat', 'icon-web') === 'redrob-chat/redrob-chat-icon-web.svg', 'appIconPath gives the path inside the folder');
ok(
  ui.appIconUrl('cad', 'symbol', '/app-icons/') === '/app-icons/redrob-cad/redrob-cad-symbol.svg' &&
    ui.appIconUrl('cad', 'symbol', (p) => `x:${p}`) === 'x:redrob-cad/redrob-cad-symbol.svg',
  'appIconUrl joins a prefix without a double slash, and hands a function the path'
);

const web = html({ icon: 'film', base: '/i' });
ok(
  web.includes('src="/i/redrob-film/redrob-film-icon-web.svg"') && web.includes('src="/i/redrob-film/redrob-film-icon-web-dark.svg"'),
  'AppIcon defaults to the web variant, light and dark'
);
ok(web.includes('alt="Redrob Film"') && /class="rr-mark__dark" src="[^"]+" alt="" aria-hidden="true"/.test(web), 'AppIcon names the product once; the dark copy is hidden');
ok(web.includes('height:24px') && web.startsWith('<span class="rr-mark rr-app-icon"'), 'AppIcon is a Mark at 24px by default, with its own class hook');
ok(!/<svg/.test(web), 'AppIcon never inlines the SVG, so the shared ids cannot collide');

const tile = html({ icon: 'redrob', base: '/i', variant: 'tile', size: 48, alt: '', tone: 'dark' });
ok(tile.includes('redrob/redrob-icon.svg') && tile.includes('redrob/redrob-icon-dark.svg') && tile.includes('height:48px'), 'tile variant uses the unmasked files at the given size');
ok(tile.includes('alt=""') && tile.includes('data-tone="dark"'), 'alt and tone pass through');

const sym = html({ icon: 'canvas', base: '/i', variant: 'symbol' });
ok(sym.includes('redrob-canvas/redrob-canvas-symbol.svg') && !sym.includes('rr-mark__dark'), 'symbol has one file and no dark copy');
