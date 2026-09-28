#!/usr/bin/env node
'use strict';
/**
 * Compares our build against the design system's reference bundle.
 *
 *   node tools/parity/run.js                 every exported component
 *   node tools/parity/run.js Button Badge    only those
 *   node tools/parity/run.js --self          reference against itself (harness sanity check)
 *
 * Exits non-zero when anything is not `pass`, so it can gate CI. `no-case` counts as a failure:
 * a component with no preview has nothing holding it to the spec, and silence there is how an
 * unverified component reaches a release.
 */

const { loadReference, loadOurs, compare, exportedNames } = require('./harness');

const args = process.argv.slice(2);
const selfCheck = args.includes('--self');
const quiet = args.includes('--quiet');
const names = args.filter((a) => !a.startsWith('--'));

const reference = loadReference();
const ours = selfCheck ? loadReference() : loadOurs();

const targets = names.length > 0 ? names : exportedNames();
const results = targets.map((name) => compare(name, reference, ours));

const tally = {};
for (const r of results) tally[r.status] = (tally[r.status] || 0) + 1;

for (const r of results) {
  if (r.status === 'pass') {
    if (!quiet) console.log(`  pass      ${r.name} (${r.bytes} bytes)`);
    continue;
  }
  console.log(`  ${r.status.padEnd(9)} ${r.name}`);
  if (r.error) console.log(`            ${r.error}`);
  if (r.diff) {
    console.log(`            first difference at byte ${r.diff.at}`);
    console.log(`            reference: ${r.diff.reference}`);
    console.log(`            ours:      ${r.diff.ours}`);
  }
}

const order = ['pass', 'differs', 'threw', 'reference-threw', 'no-case'];
const summary = order.filter((k) => tally[k]).map((k) => `${tally[k]} ${k}`).join(', ');
console.log(`\n${results.length} compared: ${summary}`);

const failures = results.filter((r) => r.status !== 'pass').length;
if (failures > 0) {
  console.log(`${failures} not at parity with the reference bundle`);
  process.exit(1);
}
