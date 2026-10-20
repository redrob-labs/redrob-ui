import * as React from 'react';
import { cx } from '../../internal/cx';
import { Mark } from '../Mark/Mark';
import { appIcons, appIconUrl, type AppIconBase, type AppIconKey } from '../../brand';

export interface AppIconProps {
  /** Which icon: `redrob` for the group icon, otherwise the product, e.g. `chat` or `film`. */
  icon: AppIconKey;
  /**
   * Where the app serves the package's `app-icons/` folder: a URL prefix (`/app-icons`, a CDN
   * origin) or a function from a file's path in the folder to its URL. Required, because only the
   * app knows where its static files live, and a guessed default would fail as a silent 404.
   */
  base: AppIconBase;
  /**
   * `web` (default): masked to the superellipse, for a page or product UI. `tile`: the unmasked
   * square, for a surface that applies its own mask. `symbol`: the white symbol alone, for a coloured
   * or photographic ground; it has no dark version.
   */
  variant?: 'web' | 'tile' | 'symbol';
  /** Edge length in pixels. The icons are square, so this is both width and height. */
  size?: number;
  /** Accessible name. Defaults to the product's name; pass `''` when text beside it already says it. */
  alt?: string;
  /** Forces a ground rather than following `data-theme`, as on `Mark`. */
  tone?: 'light' | 'dark';
  className?: string;
}

/** The light and dark file for each variant. `symbol` is white on both grounds. */
const FILES = {
  web: ['icon-web', 'icon-web-dark'],
  tile: ['icon', 'icon-dark'],
  symbol: ['symbol', null],
} as const;

/**
 * A Redrob app icon, swapped by theme.
 *
 * Built on `Mark`, so the light and dark files are both in the DOM and the stylesheet shows one -
 * the same theme switch, `data-theme` and `tone` as the lockup, with no new CSS.
 *
 * Rendered as `<img>`, never inlined: every icon file defines the same internal ids, so two inlined
 * SVGs in one document would draw the second with the first one's mask. As images they cannot see
 * each other, and an app downloads only the icons it shows.
 *
 * Film, Shape, CAD and Canvas are not yet approved in the design system (`appIcons[key].approved`).
 * They render the same way; keep them off a shared, cross-product surface until they are approved.
 */
export function AppIcon(props: AppIconProps): React.ReactElement {
  const entry = appIcons[props.icon];
  const [light, dark] = FILES[props.variant || 'web'];

  return React.createElement(Mark, {
    src: appIconUrl(props.icon, light, props.base),
    darkSrc: dark ? appIconUrl(props.icon, dark, props.base) : undefined,
    height: props.size || 24,
    alt: props.alt == null ? entry.name : props.alt,
    tone: props.tone,
    className: cx('rr-app-icon', props.className),
  });
}

export default AppIcon;
