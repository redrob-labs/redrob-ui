import * as React from 'react';

let counter = 0;

/** `rr-input-1`, `rr-input-2`, ... The prefix names the field kind so a DOM dump stays readable. */
export function nextId(prefix: string): string {
  counter += 1;
  return `${prefix}-${counter}`;
}

/**
 * An id that survives re-renders, so a label, a hint and a Form error keep pointing at the same
 * field.
 *
 * Call it unconditionally and before any early return, like every other hook. A field that
 * generates a fresh id on re-render silently breaks its own `htmlFor`, and nothing fails loudly
 * when it does - the label simply stops focusing the input.
 *
 * Not `React.useId`: the ids appear in the design system's reference markup in this shape, and the
 * parity harness compares against it.
 */
export function useStableId(prefix: string): string {
  const ref = React.useRef<string | null>(null);
  if (ref.current === null) ref.current = nextId(prefix);
  return ref.current;
}

/** Test-only: restarts the sequence so two renders of the same tree can be compared. */
export function resetIds(): void {
  counter = 0;
}
