#!/usr/bin/env node
/*
 * Checks the scroll filter the overlay placement uses (src/internal/useFloating.ts), against the
 * built dist. The hook listens for scrolls in capture phase on the window, which means it also hears
 * the overlay scrolling its OWN content when the overlay is its own scroll container (a status
 * panel, a long menu). Repositioning on such a scroll rewrites the overlay's inline geometry and
 * max-height mid-scroll, snapping its scrollTop back to the top - the overlay appears to clip to its
 * first line and cannot be scrolled (the Cross-check panel bug). `scrollIsInside` is the decision
 * that filters those out, and it is pure containment arithmetic, so it is checked with stand-in
 * nodes rather than a browser.
 */
const path = require('path');
const { scrollIsInside } = require(path.join(__dirname, '..', '..', 'dist', 'internal', 'useFloating.js'));

/** A stand-in element that knows only whether a given node is itself or inside it. */
function node(children = []) {
  const self = {
    children,
    contains(other) {
      if (other === self) return true;
      return children.some((c) => c === other || (c.contains && c.contains(other)));
    },
  };
  return self;
}

let failed = 0;
function check(name, cond, detail) {
  console.log(`${cond ? 'ok  ' : 'FAIL'} ${name}${cond ? '' : ` - ${detail}`}`);
  if (!cond) failed++;
}

// The overlay (e.g. the status panel) with a scrollable inner region.
const inner = node();
const panel = node([inner]);
// A trigger and the window, both outside the overlay - scrolling these DID move the trigger.
const trigger = node();
const outer = node([trigger, panel]);

// 1. The overlay scrolling its own content: ignored, so it is not repositioned and keeps its scroll.
check('ignores a scroll on the overlay itself', scrollIsInside(panel, panel) === true, 'should ignore');

// 2. A descendant of the overlay (an inner scroll region) scrolling: also ignored.
check('ignores a scroll inside the overlay', scrollIsInside(panel, inner) === true, 'should ignore');

// 3. The trigger / an outside container scrolling: NOT ignored, so the overlay follows the trigger.
check('repositions on a scroll from the trigger', scrollIsInside(panel, trigger) === false, 'should reposition');
check('repositions on a scroll from an outside container', scrollIsInside(panel, outer) === false, 'should reposition');

// 4. Defensive: a null overlay (not yet mounted) or a null target never counts as inside.
check('a missing overlay is never inside', scrollIsInside(null, panel) === false, 'should be false');
check('a missing target is never inside', scrollIsInside(panel, null) === false, 'should be false');

if (failed) {
  console.error(`${failed} scroll-filter check(s) failed`);
  process.exit(1);
}
console.log('floating-scroll ok');
