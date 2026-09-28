import * as React from 'react';
import { cx } from '../../internal/cx';
import { useDismiss } from '../../internal/useDismiss';
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
  const cur = items.filter((x) => x.id === open)[0];

  return React.createElement(
    'div',
    {
      className: cx('rr-cstatus', props.className),
      ref,
      role: 'group',
      'aria-label': props.label || 'How this chat is handled',
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
              React.createElement('span', { key: 'v', className: 'rr-cstatus__value' }, x.value),
              x.level
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
