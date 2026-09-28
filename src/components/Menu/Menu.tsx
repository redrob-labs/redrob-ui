import * as React from 'react';
import { cx } from '../../internal/cx';
import { useDismiss } from '../../internal/useDismiss';
import { icons } from '../../icons';

export interface MenuItem {
  id?: string;
  label?: React.ReactNode;
  icon?: React.ReactNode;
  /** Shown right-aligned, e.g. `⌘K`. Display only: the menu does not bind it. */
  shortcut?: React.ReactNode;
  disabled?: boolean;
  /** `danger` for anything destructive. */
  tone?: 'default' | 'danger';
  /** A rule between groups. Carries no label and is not focusable. */
  type?: 'item' | 'separator';
  onSelect?: (item: MenuItem) => void;
}

export interface MenuProps {
  /** The trigger's label. Also names the list for assistive technology. */
  label?: React.ReactNode;
  items?: MenuItem[];
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  /** Which edge the list hangs from. `right` when the trigger sits at the end of a row. */
  align?: 'left' | 'right';
  defaultOpen?: boolean;
  onSelect?: (item: MenuItem) => void;
  className?: string;
}

/**
 * A button that opens a short list of actions.
 *
 * Actions, not values - a menu that sets a field is a `Select`. Keep it under about seven items and
 * put anything destructive last, with `tone: 'danger'`.
 *
 * Arrow keys move between items and wrap at both ends; Escape and a click outside close it. The
 * arrow handling reads the live DOM rather than an index in state, so a disabled item is skipped
 * without the component tracking which ones those are.
 */
export function Menu(props: MenuProps): React.ReactElement {
  const items = props.items || [];
  const [open, setOpen] = React.useState(!!props.defaultOpen);
  const close = React.useCallback(() => setOpen(false), []);
  const ref = useDismiss<HTMLDivElement>(open, close);
  const actionable = items.filter((item) => item.type !== 'separator' && !item.disabled);

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>): void {
    if (!open) return;
    const nodes = ref.current
      ? ref.current.querySelectorAll<HTMLButtonElement>('[role="menuitem"]:not([disabled])')
      : ([] as unknown as NodeListOf<HTMLButtonElement>);
    if (!nodes.length) return;
    const index = Array.prototype.indexOf.call(nodes, document.activeElement);
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      nodes[(index + 1) % nodes.length].focus();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      nodes[(index - 1 + nodes.length) % nodes.length].focus();
    }
  }

  const trigger = React.createElement(
    'button',
    {
      type: 'button',
      key: 'trigger',
      className: cx('rr-btn', `rr-btn--${props.variant || 'secondary'}`, `rr-btn--${props.size || 'md'}`),
      'aria-haspopup': 'menu',
      'aria-expanded': String(open),
      onClick: () => setOpen(!open),
    },
    [
      React.createElement('span', { key: 'l' }, props.label),
      React.createElement(
        'span',
        { key: 'c', className: 'rr-btn__icon' },
        icons.chevronDown({ width: 16, height: 16 }),
      ),
    ],
  );

  const list = open
    ? React.createElement(
        'div',
        {
          key: 'list',
          className: cx('rr-menu__list', props.align === 'right' && 'rr-menu__list--right'),
          role: 'menu',
          'aria-label': props.label,
        },
        items.map((item, i) => {
          if (item.type === 'separator') {
            return React.createElement('div', {
              key: `s${i}`,
              className: 'rr-menu__sep',
              role: 'separator',
            });
          }
          return React.createElement(
            'button',
            {
              type: 'button',
              key: item.id || i,
              role: 'menuitem',
              className: cx('rr-menu__item', item.tone === 'danger' && 'rr-menu__item--danger'),
              disabled: item.disabled,
              onClick: () => {
                if (item.onSelect) item.onSelect(item);
                if (props.onSelect) props.onSelect(item);
                setOpen(false);
              },
            },
            [
              item.icon ? React.createElement('span', { key: 'i', className: 'rr-menu__icon' }, item.icon) : null,
              React.createElement('span', { key: 'l', className: 'rr-menu__label' }, item.label),
              item.shortcut
                ? React.createElement('span', { key: 'k', className: 'rr-menu__shortcut' }, item.shortcut)
                : null,
            ],
          );
        }),
      )
    : null;

  return React.createElement('div', { className: cx('rr-menu', props.className), ref, onKeyDown }, [
    trigger,
    list,
    actionable.length === 0 && open ? React.createElement('span', { key: 'empty' }) : null,
  ]);
}

export default Menu;
