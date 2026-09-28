import * as React from 'react';
import { cx } from '../../internal/cx';
import { icons } from '../../icons';
import { Mark } from '../Mark/Mark';

export interface AppShellNavItem {
  id?: string | number;
  label?: React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
  /** A count or status on the right. */
  meta?: React.ReactNode;
  current?: boolean;
  /** Renders a group heading instead of a link. The links after it belong to it. */
  heading?: React.ReactNode;
}

export interface AppShellProps {
  /** Product name, e.g. `Desk`. Sets the product wash at the top of the sidebar. */
  product?: string;
  mark?: string;
  markDark?: string;
  /** The symbol alone, shown when the sidebar is folded. */
  symbol?: string;
  nav?: AppShellNavItem[];
  navLabel?: string;
  /** Extra content at the bottom of the sidebar. */
  aside?: React.ReactNode;
  theme?: React.ReactNode;
  title?: React.ReactNode;
  /** A line under the title: what this screen is showing. */
  meta?: React.ReactNode;
  actions?: React.ReactNode;
  foot?: React.ReactNode;
  /** A right-hand panel about the current run. */
  rail?: React.ReactNode;
  railLabel?: string;
  /** `false` lets the work area run full width instead of holding a reading measure. */
  measure?: boolean;
  collapsible?: boolean;
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  collapseLabel?: string;
  expandLabel?: string;
  skipLabel?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
  onCollapsedChange?: (collapsed: boolean) => void;
}

/**
 * The product frame: sidebar, the work, an optional rail.
 *
 * The lockup goes through `Mark` rather than a bare `img`, so it follows the theme. A bare img here is how the
 * first screen lost its wordmark in dark.
 *
 * `product` is validated against the seven real products and dropped otherwise. The component knows only the
 * attribute; the colours are the `product-<p>-wash` tokens. An unrecognised name would set an attribute that
 * matches no token and silently render no wash, so it is rejected instead.
 *
 * `main` holds the page heading, not just the body, so the skip link lands on the one `h1` rather than above
 * it. `tabIndex={-1}` is what lets focus actually arrive.
 *
 * The folded state is remembered per browser when uncontrolled, and every `localStorage` call is wrapped
 * because a private window throws.
 */
export function AppShell(props: AppShellProps): React.ReactElement {
  const nav = props.nav || [];
  const railId = 'rr-shell-rail';

  let pkey = props.product ? String(props.product).toLowerCase().replace(/^redrob\s+/, '') : null;
  if (pkey && !/^(router|chat|code|desk|office|browser|design)$/.test(pkey)) pkey = null;

  const foldControlled = props.collapsed !== undefined;
  const [heldFold, setHeldFold] = React.useState<boolean>(() => {
    if (props.defaultCollapsed !== undefined) return !!props.defaultCollapsed;
    try {
      return window.localStorage.getItem('rr-shell-folded') === '1';
    } catch {
      return false;
    }
  });
  const folded = !!props.collapsible && (foldControlled ? !!props.collapsed : heldFold);

  function toggleFold(): void {
    const next = !folded;
    if (!foldControlled) {
      setHeldFold(next);
      try {
        window.localStorage.setItem('rr-shell-folded', next ? '1' : '0');
      } catch {
        // A private window refuses to store. The fold still applies for this page.
      }
    }
    if (props.onCollapsedChange) props.onCollapsedChange(next);
  }

  return React.createElement(
    'div',
    {
      className: cx(
        'rr-shell',
        !props.rail && 'rr-shell--norail',
        folded && 'rr-shell--folded',
        props.className,
      ),
      'data-product': pkey || undefined,
    },
    [
      React.createElement(
        'a',
        { key: 'skip', className: 'rr-shell__skip', href: '#rr-shell-main' },
        props.skipLabel || 'Skip to the work',
      ),

      React.createElement('div', { className: 'rr-shell__side', key: 'side', id: 'rr-shell-side' }, [
        React.createElement('div', { className: 'rr-shell__brand', key: 'b' }, [
          React.createElement(Mark, {
            key: 'm',
            height: 20,
            src: props.mark,
            darkSrc: props.markDark,
            alt: props.product ? `Redrob ${props.product}` : 'Redrob',
          }),
          props.product
            ? React.createElement('span', { className: 'rr-shell__product', key: 'p' }, props.product)
            : null,
          props.symbol
            ? React.createElement('img', {
                className: 'rr-shell__symbol',
                key: 's',
                src: props.symbol,
                alt: props.product ? `Redrob ${props.product}` : 'Redrob',
                width: 24,
                height: 24,
              })
            : null,
          props.collapsible
            ? React.createElement(
                'button',
                {
                  key: 'f',
                  type: 'button',
                  className: 'rr-shell__fold',
                  onClick: toggleFold,
                  'aria-expanded': folded ? 'false' : 'true',
                  'aria-controls': 'rr-shell-side',
                  'aria-label': folded
                    ? props.expandLabel || 'Open the menu'
                    : props.collapseLabel || 'Fold the menu',
                  title: folded
                    ? props.expandLabel || 'Open the menu'
                    : props.collapseLabel || 'Fold the menu',
                },
                icons.sidebar({ width: 16, height: 16, 'aria-hidden': 'true' }),
              )
            : null,
        ]),
        nav.length
          ? React.createElement(
              'nav',
              { className: 'rr-shell__nav', key: 'n', 'aria-label': props.navLabel || 'Sections' },
              nav.map((it, i) => {
                if (it.heading) {
                  return React.createElement(
                    'span',
                    { key: `h${i}`, className: 'rr-shell__navhead', role: 'presentation' },
                    it.heading,
                  );
                }
                return React.createElement(
                  'a',
                  {
                    key: it.id != null ? it.id : i,
                    href: it.href || '#',
                    className: it.icon ? undefined : 'rr-shell__navitem--text',
                    title:
                      folded && typeof it.label === 'string'
                        ? it.label + (it.meta != null && it.meta !== '' ? ` (${it.meta})` : '')
                        : undefined,
                    'aria-current': it.current ? 'page' : undefined,
                  },
                  [
                    it.icon
                      ? React.createElement('span', { className: 'rr-shell__navicon', key: 'i' }, it.icon)
                      : null,
                    React.createElement('span', { className: 'rr-shell__navlabel', key: 'l' }, it.label),
                    it.meta
                      ? React.createElement('span', { className: 'rr-shell__navmeta', key: 'm' }, it.meta)
                      : null,
                  ],
                );
              }),
            )
          : null,
        props.aside ? React.createElement('div', { className: 'rr-shell__aside', key: 'a' }, props.aside) : null,
        props.theme ? React.createElement('div', { className: 'rr-shell__theme', key: 'th' }, props.theme) : null,
      ]),

      React.createElement(
        'main',
        { className: 'rr-shell__main', key: 'main', id: 'rr-shell-main', tabIndex: -1 },
        [
          props.title || props.actions || props.meta
            ? React.createElement('header', { className: 'rr-shell__top', key: 't' }, [
                React.createElement('div', { className: 'rr-shell__heading', key: 'h' }, [
                  props.title
                    ? React.createElement('h1', { className: 'rr-shell__title', key: 'a' }, props.title)
                    : null,
                  props.meta
                    ? React.createElement('p', { className: 'rr-shell__meta', key: 'b' }, props.meta)
                    : null,
                ]),
                props.actions
                  ? React.createElement('div', { className: 'rr-shell__actions', key: 'a' }, props.actions)
                  : null,
              ])
            : null,
          React.createElement(
            'div',
            {
              className: cx('rr-shell__work', props.measure === false && 'rr-shell__work--full'),
              key: 'w',
            },
            props.children,
          ),
          props.foot ? React.createElement('div', { className: 'rr-shell__foot', key: 'f' }, props.foot) : null,
        ],
      ),

      props.rail
        ? React.createElement(
            'aside',
            {
              className: 'rr-shell__rail',
              key: 'rail',
              id: railId,
              'aria-label': props.railLabel || 'About this run',
            },
            props.rail,
          )
        : null,
    ],
  );
}

export default AppShell;
