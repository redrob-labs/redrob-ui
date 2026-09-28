/**
 * Redrob design system - React components.
 *
 * Built on the Redrob Group Design System 2026. Every component here is held to the system's own
 * reference bundle by `tools/parity/run.js`, which renders both against the delivery's preview cases
 * and compares the markup, so "looks right" is never the standard.
 *
 * Components are exported in the system's own order: the base, then the controls a person touches,
 * then what shows data, then the frames, then the product's surfaces, then the public site.
 */

export { icons, iconNames, svg } from './icons';
export type { IconName, IconProps, IconComponent } from './icons';

/* ---- Actions ------------------------------------------------------------- */
export { Button } from './components/Button/Button';
export type { ButtonProps } from './components/Button/Button';
export { IconButton } from './components/IconButton/IconButton';
export type { IconButtonProps } from './components/IconButton/IconButton';
export { Menu } from './components/Menu/Menu';
export type { MenuProps, MenuItem } from './components/Menu/Menu';
