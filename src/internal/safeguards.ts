import * as React from 'react';
import { StatusBars } from './StatusBars';

/**
 * The three protection levels, each saying exactly what is left out.
 *
 * Named contents rather than a slider from "low" to "high". A person choosing a privacy level is deciding what
 * leaves their laptop, and "high" tells them nothing about that.
 *
 * Strict says out loud that it cannot run on the web or a phone. A level that silently does less on some
 * surfaces would be the worst kind of reassurance.
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
      'High, plus addresses, amounts and dates. Nothing can be sent from the web or a phone, where the check cannot run.',
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
}): React.ReactElement {
  const levels = props.levels || PRIVACY_LEVELS;
  return React.createElement(
    'div',
    { className: 'rr-privacy__levels', role: 'list', 'aria-label': props.label || 'Protection levels' },
    levels.map((l) => {
      const on = l.id === props.level;
      return React.createElement(
        'div',
        { key: l.id, role: 'listitem', className: 'rr-privacy__level', 'data-on': String(on) },
        [
          React.createElement('div', { key: 'h', className: 'rr-privacy__levelhead' }, [
            React.createElement(StatusBars, { key: 'b', n: l.n, of: levels.length, tone: 'safe' }),
            React.createElement('b', { key: 'l' }, l.label),
            on
              ? React.createElement(
                  'span',
                  { key: 'c', className: 'rr-privacy__yours' },
                  props.yoursLabel || 'Your level',
                )
              : null,
          ]),
          React.createElement('p', { key: 'p' }, l.detail),
        ],
      );
    }),
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
