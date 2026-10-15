import * as React from 'react';
import { cx } from '../../internal/cx';
import { useDismiss } from '../../internal/useDismiss';
import { useFloating } from '../../internal/useFloating';
import { StatusBars } from '../../internal/StatusBars';

export interface ComposerStatusItem {
  id: string;
  name?: React.ReactNode;
  /** The current setting, in a word. */
  value?: React.ReactNode;
  icon?: React.ReactNode;
  tone?: string;
  /** A level beside the value, as `n` of `of`. */
  level?: { n: number; of: number };
  /** Text for a live indicator, announced to a screen reader. */
  live?: string;
  /** Opens as a dialog under the row. Without it the item is a plain control. */
  panel?: React.ReactNode;
  panelLabel?: string;
  onClick?: () => void;
}

export interface ComposerStatusProps {
  items?: Array<ComposerStatusItem | false | null | undefined>;
  label?: string;
  open?: string | null;
  defaultOpen?: string | null;
  className?: string;
  onOpenChange?: (id: string | null) => void;
  /**
   * Lines the open panel up with its active status button. Defaults to `start`. Also reflected as a
   * `data-align` attribute (only for a non-default value) so a consumer can style the fallback;
   * the live positioning is done in JS.
   */
  align?: 'start' | 'center' | 'end';
  /**
   * `compact` shows each chip as icon + name only: the value is kept for assistive tech (visually
   * hidden) and the level bars are dropped; the live indicator stays. Defaults to `full` (value +
   * level visible). Sets `data-density="compact"` and reads `--rr-cstatus-gap` for the chip spacing.
   */
  density?: 'full' | 'compact';
}

/**
 * What will happen to this message, shown above the composer, before Send.
 *
 * Privacy, memory, second opinion: the settings in force, each opening its own panel. This is the one place
 * these appear BEFORE the message is sent - `AnswerReceipt` is the same subjects reported after. Stating them
 * up front is what makes the checks a choice rather than a surprise.
 *
 * `aria-haspopup` is claimed only for items that actually have a panel.
 */
export function ComposerStatus(props: ComposerStatusProps): React.ReactElement {
  const items = (props.items || []).filter(Boolean) as ComposerStatusItem[];
  const [held, setHeld] = React.useState<string | null>(props.defaultOpen || null);
  const open = props.open !== undefined ? props.open : held;

  function set(v: string | null): void {
    if (props.open === undefined) setHeld(v);
    if (props.onOpenChange) props.onOpenChange(v);
  }

  const close = React.useCallback(() => set(null), [props.open]);
  const ref = useDismiss<HTMLDivElement>(!!open, close);
  const buttons = React.useRef<Map<string, HTMLButtonElement>>(new Map());
  const cur = items.filter((x) => x.id === open)[0];
  // The panel opens ABOVE the row by default (flips below when there is more room there: a composer
  // in the middle of an empty chat has little space above it). It is anchored to the OPEN item's
  // button so it lines up under the chip it belongs to, not the row. Width is NOT matched to the
  // anchor -- a chip is ~90px, far too narrow for the panel -- it is set in CSS once placed
  // (`.rr-cstatus__panel[data-side]`, tunable via `--rr-cstatus-panel-w`). `key` is the open item's
  // id so switching from one open chip to another re-runs placement onto the new button.
  useFloating(
    !!(cur && cur.panel),
    () => [
      cur ? buttons.current.get(cur.id) ?? null : null,
      ref.current && ref.current.querySelector<HTMLElement>(':scope > .rr-cstatus__panel'),
    ],
    { side: 'top', align: props.align || 'start', fitHeight: true, key: cur ? cur.id : null },
  );

  return React.createElement(
    'div',
    {
      className: cx('rr-cstatus', props.className),
      ref,
      role: 'group',
      'aria-label': props.label || 'How this chat is handled',
      'data-align': props.align && props.align !== 'start' ? props.align : undefined,
      'data-density': props.density === 'compact' ? 'compact' : undefined,
    },
    [
      React.createElement(
        'div',
        { key: 'r', className: 'rr-cstatus__row' },
        items.map((x) =>
          React.createElement(
            'button',
            {
              key: x.id,
              type: 'button',
              ref: (button: HTMLButtonElement | null): void => {
                if (button) buttons.current.set(x.id, button);
                else buttons.current.delete(x.id);
              },
              className: cx('rr-cstatus__item', `rr-cstatus__item--${x.tone || 'plain'}`),
              'aria-expanded': String(open === x.id),
              'aria-haspopup': x.panel ? 'dialog' : undefined,
              onClick: () => {
                if (x.panel) set(open === x.id ? null : x.id);
                else if (x.onClick) x.onClick();
              },
            },
            [
              x.icon
                ? React.createElement(
                    'span',
                    { key: 'i', className: 'rr-cstatus__icon', 'aria-hidden': 'true' },
                    x.icon,
                  )
                : null,
              React.createElement('span', { key: 'n', className: 'rr-cstatus__name' }, x.name),
              props.density === 'compact'
                ? // Compact hides the value VISUALLY but keeps it for assistive tech, so a screen
                  // reader still hears "Privacy High", not just "Privacy". Dropping it entirely took
                  // the current setting out of the button's accessible name.
                  x.value
                  ? React.createElement(
                      'span',
                      { key: 'v', className: 'rr-cstatus__value rr-visually-hidden' },
                      x.value,
                    )
                  : null
                : React.createElement('span', { key: 'v', className: 'rr-cstatus__value' }, x.value),
              props.density !== 'compact' && x.level
                ? React.createElement(StatusBars, { key: 'b', n: x.level.n, of: x.level.of, tone: x.tone })
                : null,
              x.live
                ? React.createElement(
                    'span',
                    { key: 'l', className: 'rr-live', title: x.live },
                    React.createElement('span', { className: 'rr-visually-hidden' }, x.live),
                  )
                : null,
            ],
          ),
        ),
      ),
      cur && cur.panel
        ? React.createElement(
            'div',
            {
              key: 'p',
              className: 'rr-cstatus__panel',
              role: 'dialog',
              'aria-label': cur.panelLabel || (cur.name as string),
            },
            cur.panel,
          )
        : null,
    ],
  );
}

export default ComposerStatus;
