import * as React from 'react';
import { StatusBars } from './StatusBars';
import { cx } from './cx';
import { useStableId } from './ids';

/**
 * The three protection levels, each saying exactly what is left out.
 *
 * Named contents rather than a slider from "low" to "high". A person choosing a privacy level is deciding what
 * reaches the AI, and "high" tells them nothing about that.
 *
 * Each detail says only what the level leaves out, not where the check runs. The same levels apply wherever a
 * product runs the check - on the person's own computer, or on its servers before anything reaches an outside
 * AI - so a sentence about the surface belongs to the product (`levels`, or the panel's `offText`), not here. A
 * default that says "nothing can be sent from the web" is false in a product whose web app does run the check.
 */
export const PRIVACY_LEVELS = [
  { id: 'standard', label: 'Standard', n: 1, detail: 'ID, bank and card numbers are left out.' },
  {
    id: 'high',
    label: 'High',
    n: 2,
    detail:
      'Standard, plus names, phone numbers, emails, clients and projects are swapped for placeholders.',
  },
  {
    id: 'strict',
    label: 'Strict',
    n: 3,
    detail:
      'High, plus addresses, amounts and dates.',
  },
];

export interface PrivacyLevel {
  id: string;
  label?: string;
  n?: number;
  detail?: React.ReactNode;
}

export function PrivacyLevels(props: {
  levels?: PrivacyLevel[];
  level?: string;
  label?: string;
  yoursLabel?: React.ReactNode;
  /**
   * Lets the person pick the level here, rather than only reading the admin's choice. When set, each level
   * becomes a native radio: the list is a `radiogroup`, every level an `<input type="radio">` the pointer and
   * the keyboard choose - one Tab stop into the group, arrow keys to move and select. Omit it and the list
   * stays read-only exactly as before - the default, because most products set the level by policy and the
   * panel only reports it.
   */
  onSelect?: (id: string) => void;
  /**
   * With `onSelect`, true means a team policy fixes the level: the radios still show and stay focusable so a
   * person can read which one is set, but choosing another does nothing. They are marked `aria-disabled`, not
   * `disabled`, so a keyboard or screen-reader user can still reach and read them.
   */
  locked?: boolean;
  /** The reason the level is fixed, shown under the levels when `locked`. Default "Set by your team's policy." */
  lockedText?: React.ReactNode;
  /** Added to the levels container, so a consumer can target it without reaching through internals. */
  className?: string;
}): React.ReactElement {
  const levels = props.levels || PRIVACY_LEVELS;
  const pick = props.onSelect;
  const name = useStableId('rr-privacy-level');
  return React.createElement(
    'div',
    {
      className: cx('rr-privacy__levels', props.className),
      // A list when it only reports the level, a radiogroup when the person can choose one.
      role: pick ? 'radiogroup' : 'list',
      'aria-label': props.label || 'Protection levels',
      // A locked group still reads, but nothing in it can be changed.
      'aria-readonly': pick && props.locked ? 'true' : undefined,
    },
    [
      ...levels.map((l) => {
        const on = l.id === props.level;
        const labelId = `${name}-${l.id}-label`;
        const detailId = `${name}-${l.id}-detail`;
        const head = React.createElement(
          pick ? 'span' : 'div',
          { key: 'h', className: 'rr-privacy__levelhead' },
          [
            React.createElement(StatusBars, { key: 'b', n: l.n, of: levels.length, tone: 'safe' }),
            React.createElement('b', { key: 'l', id: pick ? labelId : undefined }, l.label),
            on
              ? React.createElement(
                  'span',
                  {
                    key: 'c',
                    className: 'rr-privacy__yours',
                    // aria-checked already carries this when the level is a radio.
                    'aria-hidden': pick ? 'true' : undefined,
                  },
                  props.yoursLabel || 'Your level',
                )
              : null,
          ],
        );
        const body = React.createElement(
          pick ? 'span' : 'p',
          { key: 'p', id: pick ? detailId : undefined, className: pick ? 'rr-privacy__leveldetail' : undefined },
          l.detail,
        );
        if (!pick) {
          return React.createElement(
            'div',
            { key: l.id, role: 'listitem', className: 'rr-privacy__level', 'data-on': String(on) },
            [head, body],
          );
        }
        // A native radio, label-wrapped, so arrow-key movement, a single Tab stop, grouping and `checked`
        // come from the platform. `locked` keeps it focusable but inert (aria-disabled + a guarded onChange).
        return React.createElement(
          'label',
          {
            key: l.id,
            className: 'rr-privacy__level',
            'data-on': String(on),
            'aria-labelledby': labelId,
            'aria-describedby': l.detail ? detailId : undefined,
          },
          [
            React.createElement('input', {
              key: 'r',
              className: 'rr-privacy__levelinput',
              type: 'radio',
              name,
              checked: on,
              'aria-disabled': props.locked ? 'true' : undefined,
              onChange: () => {
                if (props.locked) return;
                pick(l.id);
              },
            }),
            head,
            body,
          ],
        );
      }),
      pick && props.locked
        ? React.createElement(
            'p',
            { key: 'locked', className: 'rr-privacy__levellocked' },
            props.lockedText || "Set by your team's policy.",
          )
        : null,
    ],
  );
}

/**
 * When a second opinion runs, and what it costs.
 *
 * `auto` is the default and says where it applies rather than "when needed" - and `always` states the real
 * cost in seconds and cents. A safeguard whose price is hidden gets switched off the first time somebody
 * notices the bill.
 */
export const OPINION_MODES = [
  { value: 'off', label: 'Off', detail: 'Only one AI answers.' },
  {
    value: 'auto',
    label: 'When it matters',
    detail:
      'On for work where a missed point is costly, such as reviewing contracts or research. The answer says when it ran.',
  },
  {
    value: 'always',
    label: 'Always',
    detail: 'Every answer is checked. Adds about 20 seconds and a few cents each time.',
  },
];

/** What each reviewing model can say about a point. "Didn't comment" is a real verdict, not a blank. */
export const OPINION_VERDICTS: Record<string, { label: string; icon?: string }> = {
  wrote: { label: 'Wrote this' },
  agree: { label: 'Agrees', icon: 'check' },
  differ: { label: 'Sees it differently', icon: 'warning' },
  added: { label: 'Added this', icon: 'plus' },
  quiet: { label: 'Didn’t comment' },
};

/* ---- How Cowork works on a message ------------------------------------------------------------------- */

/** Plan or Run, in the composer bar beside the ModelPicker. */
export interface ComposerModeOption {
  value: 'plan' | 'run' | string;
  label: string;
  /** An icon name from `icons`. */
  icon?: string;
  hint?: string;
}
/**
 * Plan asks what it needs and writes a plan that runs only when you say so; Run starts at once.
 *
 * Each hint says what happens and what does not. "Nothing runs until you say so" is the promise that makes Plan
 * worth choosing, so it is in the words rather than implied by the name.
 */
export const COMPOSER_MODES: ComposerModeOption[] = [
  {
    value: 'plan',
    label: 'Plan',
    icon: 'route',
    hint: 'Cowork asks what it needs and writes a plan. Nothing runs until you say so.',
  },
  { value: 'run', label: 'Run', icon: 'play', hint: 'Cowork starts at once.' },
];

export type CrossCheckLevel = 'off' | 'auto' | 'always';
/** One level per check, keyed by check id. The default checks are `factCheck` and `challenge`. */
export type CrossCheckValue = Record<string, CrossCheckLevel | string>;
export interface CrossCheckDefinition {
  id: string;
  name: React.ReactNode;
  text: React.ReactNode;
}
/** Each check is Off, When it matters or Always. */
export const CROSS_CHECK_LEVELS: Array<{ value: string; label: string }> = [
  { value: 'off', label: 'Off' },
  { value: 'auto', label: 'When it matters' },
  { value: 'always', label: 'Always' },
];
/**
 * The two checks Cross-check is made of, each with what it does and what it costs in time.
 *
 * The checkers are named in every result, so the setting never has to promise more than it does.
 */
export const CROSS_CHECKS: CrossCheckDefinition[] = [
  {
    id: 'factCheck',
    name: 'Fact check',
    text: 'An AI from another company opens every source the answer cites, checks that each step of the reasoning follows, and adds anything the answer missed. About 40 seconds.',
  },
  {
    id: 'challenge',
    name: 'Challenge',
    text: 'Puts the answer\'s conclusion under pressure: one AI argues for it, another against, for three rounds, and a third says what held up. About 2 minutes.',
  },
];
export const CROSS_CHECK_DEFAULT: CrossCheckValue = { factCheck: 'auto', challenge: 'auto' };
/**
 * What the status line says for a value: the level when every check shares it, On when all run at different
 * levels, otherwise a count ("1 of 2 on").
 */
export function crossCheckValue(
  value?: CrossCheckValue,
  checks?: CrossCheckDefinition[],
  levels?: Array<{ value: string; label: string }>,
): string {
  const v = value || CROSS_CHECK_DEFAULT;
  const cs = checks || CROSS_CHECKS;
  const ls = levels || CROSS_CHECK_LEVELS;
  const on = cs.filter((c) => (v[c.id] || 'off') !== 'off');
  if (!on.length) return ls[0].label;
  const same = on.every((c) => v[c.id] === v[on[0].id]);
  if (on.length === cs.length && same) return (ls.filter((l) => l.value === v[on[0].id])[0] || ls[1]).label;
  if (on.length === cs.length) return 'On';
  return `${on.length} of ${cs.length} on`;
}

export type PlanStatus = 'draft' | 'edited' | 'running' | 'done' | 'kept';
/** Where a plan stands, said with who approved it: a plan that runs is one a person said yes to. */
export const PLAN_STATUS: Record<PlanStatus, string> = {
  draft: 'Draft · not run yet',
  edited: 'Edited by you · not run yet',
  running: 'Approved by you · running',
  done: 'Approved by you · done',
  kept: 'Kept for later',
};

export type FactVerdict = 'holds' | 'partly' | 'wrong' | 'closed' | 'fixed';
/**
 * What Fact check can say about a cited source, as a badge tone and a label.
 *
 * "Not in that source" rather than "false": the check opened the source and did not find the claim there, which
 * is what it can actually know. "Couldn't open" is a verdict of its own, not a pass.
 */
export const FACT_VERDICTS: Record<FactVerdict, [string, React.ReactNode]> = {
  holds: ['success', 'Holds up'],
  partly: ['warning', 'Partly'],
  wrong: ['danger', 'Not in that source'],
  closed: ['neutral', 'Couldn\'t open'],
  fixed: ['success', 'Fixed'],
};

/** What a Challenge round did to the conclusion. */
export const CHALLENGE_KINDS: Record<string, string> = { broke: 'Broke', held: 'Held', changed: 'Changed' };
