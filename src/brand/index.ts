/**
 * The Redrob app icons: the typed table generated from `src/brand/app-icons/`, and the one helper a
 * consumer needs to turn an entry into a URL.
 *
 * The files themselves are not bundled into JavaScript. They ship as SVGs under the package's
 * `./app-icons/*` export, so an app serves or imports them like any other static asset and pays
 * nothing in its bundle for the icons it does not show.
 */

import { appIcons, type AppIconKey, type AppIconVariant } from './appIcons';

export { appIcons, appIconKeys } from './appIcons';
export type { AppIconEntry, AppIconFile, AppIconKey, AppIconVariant } from './appIcons';

/**
 * Where an app serves the `brand/app-icons/` folder: a URL prefix such as `/app-icons` or a CDN
 * origin, or a function from a file's path inside the folder to its URL - for a bundler that hands
 * back a hashed URL per imported file.
 */
export type AppIconBase = string | ((path: string) => string);

/**
 * The path of one icon file inside `brand/app-icons/`, e.g. `redrob-chat/redrob-chat-icon-web.svg`.
 * Import it as `@redrob-labs/ui/app-icons/<path>`, or join it to wherever the folder is served.
 */
export function appIconPath(key: AppIconKey, variant: AppIconVariant): string {
  return appIcons[key].files[variant].path;
}

/** The URL of one icon file, resolved against the app's `base`. A trailing slash on it is ignored. */
export function appIconUrl(key: AppIconKey, variant: AppIconVariant, base: AppIconBase): string {
  const file = appIconPath(key, variant);
  return typeof base === 'function' ? base(file) : `${base.replace(/\/+$/, '')}/${file}`;
}
