#!/usr/bin/env node
'use strict';

/**
 * The three safeguard panels (PrivacyProtection, MemoryScope, CrossCheckSetting) ship a roomy
 * settings-page layout and an opt-in `compact` one, selectable privacy levels, a `slotClassName`
 * map and `false` opt-outs for the explanatory prose. Parity only exercises the DEFAULT props - it
 * renders each component's one `preview.html` case, which passes none of these - so none of the new
 * behaviour is covered there. This renders the panels with the new props from the built dist and
 * asserts the markup, the way ssr-ids checks ids and floating-scroll checks the scroll filter.
 *
 *   node tools/check/safeguards.js      (after yarn build)
 */

const path = require('path');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { ComposerStatus, PrivacyProtection, MemoryScope, CrossCheckSetting } = require(
  path.join(__dirname, '..', '..', 'dist', 'index.js'),
);

let failed = 0;
const ok = (name, cond, detail) => {
  console.log(`${cond ? 'ok  ' : 'FAIL'} ${name}${cond ? '' : ` - ${detail}`}`);
  if (!cond) failed++;
};
const render = (el) => renderToStaticMarkup(el);
const el = React.createElement;


// ---- ComposerStatus: active-trigger anchoring and opt-in alignment -----------------------------
const statusItems = [{ id: 'memory', name: 'Memory', value: 'On', panel: el('p', null, 'Panel') }];
const statusDefault = render(el(ComposerStatus, { items: statusItems }));
const statusEnd = render(el(ComposerStatus, { items: statusItems, align: 'end' }));
ok('ComposerStatus default emits no data-align', !/data-align=/.test(statusDefault), 'default markup must stay unchanged');
ok('ComposerStatus align emits data-align', /data-align="end"/.test(statusEnd), 'non-default alignment should be targetable');
const composerStatusJs = require('fs').readFileSync(path.join(__dirname, '..', '..', 'dist', 'components', 'ComposerStatus', 'ComposerStatus.js'), 'utf8');
ok('ComposerStatus anchors to the active button', /buttons\.current\[cur\.id\]/.test(composerStatusJs), 'the row root must not be the floating anchor');
const systemCss = require('fs').readFileSync(path.join(__dirname, '..', '..', 'dist', 'styles', 'system.css'), 'utf8');
ok('ComposerStatus exposes panel padding', /--rr-cstatus-panel-pad/.test(systemCss), 'panel padding should have a custom-property hook');

// ---- PrivacyProtection: read-only (default) vs selectable levels ------------------------------
const roLevels = render(el(PrivacyProtection, { state: 'on', level: 'high' }));
ok('read-only levels are a role="list"', /role="list"/.test(roLevels) && !/role="radiogroup"/.test(roLevels), 'default must stay a list');
ok('read-only levels use no radio inputs', !/type="radio"/.test(roLevels), 'default must not render inputs');

const pickLevels = render(el(PrivacyProtection, { state: 'on', level: 'high', onLevelChange: () => {} }));
ok('onLevelChange makes it a radiogroup', /role="radiogroup"/.test(pickLevels), 'should be a radiogroup when selectable');
ok('selectable levels are NATIVE radios', (pickLevels.match(/type="radio"/g) || []).length === 3, 'should render one <input type=radio> per level');
ok('selectable levels are label-wrapped', /<label[^>]*class="[^"]*rr-privacy__level/.test(pickLevels), 'each level should be a <label>');
ok('the checked level is checked', /checked=""|checked/.test(pickLevels), 'the current level input should be checked');
ok('no invalid <button><div> level', !/<button[^>]*rr-privacy__level/.test(pickLevels), 'must not use button+role=radio with block children');
ok('each radio is named for AT', /aria-labelledby="/.test(pickLevels), 'each radio should be named by its label, not the whole card');

// ---- PrivacyProtection: locked stays reachable, not disabled ----------------------------------
const locked = render(el(PrivacyProtection, { state: 'on', level: 'high', onLevelChange: () => {}, locked: true }));
ok('locked uses aria-disabled, not disabled', /aria-disabled="true"/.test(locked) && !/ disabled(=|")/.test(locked), 'locked radios must stay focusable (aria-disabled, never disabled)');
ok('locked group is aria-readonly', /aria-readonly="true"/.test(locked), 'the radiogroup should be aria-readonly when locked');
ok('locked states a reason', /Set by your team/.test(locked), 'locked should show why the level is fixed');
const lockedText = render(el(PrivacyProtection, { state: 'on', level: 'high', onLevelChange: () => {}, locked: true, lockedText: 'Fixed by Acme IT.' }));
ok('lockedText overrides the reason', /Fixed by Acme IT\./.test(lockedText), 'lockedText should replace the default reason');

// ---- compact density: an opt-in modifier class, words unchanged -------------------------------
const roomy = render(el(PrivacyProtection, { state: 'on', level: 'high' }));
const compact = render(el(PrivacyProtection, { state: 'on', level: 'high', compact: true }));
ok('compact adds the rr-privacy--compact modifier', /rr-privacy--compact/.test(compact) && !/rr-privacy--compact/.test(roomy), 'compact should add a modifier class');
ok('compact adds a smaller status card', /rr-scard--sm/.test(compact) && !/rr-scard--sm/.test(roomy), 'compact should request size=sm on the card');
ok('MemoryScope compact modifier', /rr-memscope--compact/.test(render(el(MemoryScope, { compact: true, options: [{ value: 'a', label: 'A' }] }))), 'MemoryScope should accept compact');
ok('CrossCheckSetting compact modifier', /rr-xcheck--compact/.test(render(el(CrossCheckSetting, { compact: true }))), 'CrossCheckSetting should accept compact');

// ---- slotClassName: classes ADDED, never replacing the rr- class ------------------------------
const slotted = render(el(PrivacyProtection, { state: 'on', level: 'high', slotClassName: { lede: 'app-lede', card: 'app-card' } }));
ok('slotClassName adds the lede class alongside rr-panellede', /class="rr-panellede app-lede"/.test(slotted), 'should add, not replace');
ok('slotClassName adds the card class alongside rr-scard', /app-card/.test(slotted) && /rr-scard/.test(slotted), 'should add, not replace');
const memSlot = render(el(MemoryScope, { options: [{ value: 'a', label: 'A' }], slotClassName: { options: 'app-opts' } }));
ok('MemoryScope slotClassName options', /class="rr-memscope__options app-opts"/.test(memSlot), 'should add the options slot class');
const xSlot = render(el(CrossCheckSetting, { slotClassName: { note: 'app-note' } }));
ok('CrossCheckSetting slotClassName note', /class="rr-xcheck__note app-note"/.test(xSlot), 'should add the note slot class');

// ---- lede / whenItMatters false hides, undefined keeps the default sentence --------------------
const xDefault = render(el(CrossCheckSetting, {}));
ok('CrossCheck default keeps its lede', /rr-panellede/.test(xDefault), 'omitting lede keeps the default sentence');
ok('CrossCheck default keeps its note', /rr-xcheck__note/.test(xDefault), 'omitting whenItMatters keeps the default note');
const xHidden = render(el(CrossCheckSetting, { lede: false, whenItMatters: false }));
ok('CrossCheck lede=false hides the lede', !/rr-panellede/.test(xHidden), 'lede=false must render nothing');
ok('CrossCheck whenItMatters=false hides the note', !/rr-xcheck__note/.test(xHidden), 'whenItMatters=false must render nothing');
const xEmpty = render(el(CrossCheckSetting, { lede: '' }));
ok('CrossCheck lede="" falls back to the default (only false hides)', /rr-panellede/.test(xEmpty), 'empty string is not false; it keeps the default');

if (failed) {
  console.error(`${failed} safeguards check(s) failed`);
  process.exit(1);
}
console.log('safeguards ok');
