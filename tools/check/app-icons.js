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
