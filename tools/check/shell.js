#!/usr/bin/env node
'use strict';

/**
 * Behaviour of AppShell's folded state that the parity gate cannot see, because the reference preview
 * renders the shell open: `asideFolded` stays reachable when folded, folded nav links get the DS
 * tooltip instead of a native `title`, and an open shell (or one without `asideFolded`) renders the
 * same markup as before.
 *
 *   node tools/check/shell.js      (after yarn build)
 */

const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { AppShell } = require(require('path').join(__dirname, '..', '..', 'dist', 'index.js'));

const ok = (c, m) => {
  if (!c) {
    console.error('FAIL', m);
    process.exitCode = 1;
  } else console.log('ok  ', m);
};
const icon = React.createElement('svg', { width: 16, height: 16 });
const nav = [
  { id: 'chat', label: 'Chat', href: '/chat', icon, current: true },
  { id: 'runs', label: 'Runs', href: '/runs', icon, meta: 3 },
];
const base = { product: 'Desk', collapsible: true, nav, aside: React.createElement('b', null, 'FULL-ACCOUNT') };
const render = (p) => renderToStaticMarkup(React.createElement(AppShell, Object.assign({}, base, p)));

const folded = render({ collapsed: true, asideFolded: React.createElement('i', null, 'AVATAR-ONLY') });
ok(folded.includes('rr-shell--folded') && folded.includes('rr-shell__aside--folded') && folded.includes('AVATAR-ONLY'),
  'folded shell renders asideFolded');
ok(folded.includes('rr-shell__navtip') && folded.includes('role="tooltip"') && folded.includes('Runs (3)'),
  'folded nav links carry the DS tooltip with label and meta');
ok(!/<a [^>]*title=/.test(folded), 'folded nav links no longer use a native title');
ok(/aria-current="page"/.test(folded), 'current link still marked');

const open = render({ collapsed: false, asideFolded: React.createElement('i', null, 'AVATAR-ONLY') });
ok(!open.includes('rr-shell__navtip') && !open.includes('role="tooltip"'), 'open shell: no tooltip wrappers');
ok(open.includes('FULL-ACCOUNT'), 'open shell keeps aside');

const plain = render({ collapsed: false });
ok(!plain.includes('rr-shell__aside--folded'), 'no asideFolded prop: no folded aside markup');
const plainFolded = render({ collapsed: true });
ok(!plainFolded.includes('rr-shell__aside--folded'), 'folded without asideFolded: as before, nothing extra');
