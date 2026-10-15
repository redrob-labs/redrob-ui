import * as React from 'react';
import { cx } from '../../internal/cx';
import { PRIVACY_LEVELS, PrivacyLevel, PrivacyLevels } from '../../internal/safeguards';
import { icons } from '../../icons';
import { ProtectionStatus } from '../ProtectionStatus/ProtectionStatus';

export interface PrivacyProtectionProps {
  /** `off` when the check is not running for what this person sends, for whatever reason the product has. */
  state?: 'on' | 'off';
  level?: string;
  levels?: PrivacyLevel[];
  /**
   * What is running, beside the live dot. Default "Running". Name the place when the product knows it ("Running
   * on this laptop"); the default does not, because the same panel ships where the check runs on a server.
   */
  running?: string;
  summary?: React.ReactNode;
  /** `false` hides the explanation. */
  lede?: React.ReactNode | false;
  /** `false` hides the status card. */
  card?: boolean;
  /** `false` hides the level list. */
  showLevels?: boolean;
  /** What it caught last, and when. */
  last?: React.ReactNode;
  onLabel?: string;
  /** Default "Privacy protection is off". */
  offTitle?: React.ReactNode;
  /**
   * Default "What you send goes to the AI as written." Say why it is off and where it would work, when the product
   * knows ("It runs on your laptop, so it only works in the desktop app."); the default cannot know, so it says
   * only the consequence.
   */
  offText?: React.ReactNode;
  foot?: React.ReactNode;
  /**
   * Tightens the panel for a small surface - a composer popover rather than a settings page: a smaller status
   * card, less space between parts, the levels in one column. The words are unchanged; only the room they take
   * is. A page that heads a whole section leaves it off.
   */
  compact?: boolean;
  /**
   * Lets the person choose the level in this panel, instead of only reading the admin's. When set, the level
   * list becomes selectable and calls this with the chosen id. The panel is controlled: pass the chosen id
   * back as `level`, or the radio announces a change and nothing moves. Omit it where the level is policy and
   * the panel only reports it - the default, and what a product without a per-person setting should keep.
   */
  onLevelChange?: (level: string) => void;
  /**
   * With `onLevelChange`, true means a team policy fixes the level: it still shows and stays reachable by
   * keyboard and screen reader, but choosing another does nothing.
   */
  locked?: boolean;
  /** The reason the level is fixed, shown under the levels when `locked`. Default "Set by your team's policy." */
  lockedText?: React.ReactNode;
  /**
   * Class names for the panel's own parts, so a consumer can restyle one without overriding the whole panel or
   * reaching through `rr-` internals that may move. Each is added to its element; nothing is replaced.
   */
  slotClassName?: { card?: string; lede?: string; levels?: string; last?: string; foot?: string };
  className?: string;
}

/**
 * Whether the privacy check is running, at what level, and what it does.
 *
 * The `off` state is the important one. Where the check is not running, this says so in plain words: what you
 * send goes to the AI as written. A privacy panel that renders the same everywhere would be telling people they
 * are protected where they are not, which is worse than having no panel.
 *
 * The defaults for `running`, `offTitle` and `offText` do not say where the check runs. Whether that is the
 * person's laptop or the product's server differs per product, and a default that names the wrong one is a
 * false privacy claim; a product that knows passes its own words.
 *
 * The explanation names where the work happens - a small model on the person's own laptop, swapping details for
 * placeholders before Send and putting the real ones back in the answer. "Your data is protected" is not a
 * claim anybody can check.
 */
export function PrivacyProtection(props: PrivacyProtectionProps): React.ReactElement {
  const levels = props.levels || PRIVACY_LEVELS;
  const lvl = levels.filter((l) => l.id === (props.level || 'high'))[0] || levels[1] || levels[0];
  const slot = props.slotClassName || {};
  const root = cx('rr-privacy', props.compact && 'rr-privacy--compact', props.className);

  if (props.state === 'off') {
    return React.createElement('div', { className: root }, [
      React.createElement(
        ProtectionStatus,
        {
          key: 'c',
          tone: 'warn',
          size: props.compact ? 'sm' : undefined,
          className: slot.card,
          icon: icons.shield({ width: 28, height: 28 }),
          title: props.offTitle || 'Privacy protection is off',
        },
        props.offText || 'What you send goes to the AI as written.',
      ),
      props.foot ? React.createElement('div', { key: 'f', className: cx('rr-panelfoot', slot.foot) }, props.foot) : null,
    ]);
  }

  return React.createElement('div', { className: root }, [
    props.card !== false
      ? React.createElement(
          ProtectionStatus,
          {
            key: 'c',
            tone: 'safe',
            size: props.compact ? 'sm' : undefined,
            className: slot.card,
            icon: icons.shieldCheck({ width: 28, height: 28 }),
            title: `${props.onLabel || 'Privacy protection is on'}: ${lvl.label}`,
            live: props.running || 'Running',
          },
          props.summary,
        )
      : null,
    props.lede !== false
      ? React.createElement(
          'p',
          { key: 'l', className: cx('rr-panellede', slot.lede) },
          props.lede ||
            'A small privacy AI runs on your own laptop, not in the cloud. When you press Send, it reads the message first and swaps private details for placeholders, so the AI that answers never sees them. When the answer comes back, your laptop puts the real names back.',
        )
      : null,
    props.showLevels !== false
      ? React.createElement(PrivacyLevels, {
          key: 'v',
          levels,
          level: lvl.id,
          className: slot.levels,
          onSelect: props.onLevelChange,
          locked: props.locked,
          lockedText: props.lockedText,
        })
      : null,
    props.last
      ? React.createElement('p', { key: 'x', className: cx('rr-privacy__last', slot.last) }, [
          React.createElement(
            'span',
            { key: 'i', 'aria-hidden': 'true' },
            icons.shieldCheck({ width: 14, height: 14 }),
          ),
          React.createElement('span', { key: 't' }, props.last),
        ])
      : null,
    props.foot ? React.createElement('div', { key: 'f', className: cx('rr-panelfoot', slot.foot) }, props.foot) : null,
  ]);
}

export default PrivacyProtection;
