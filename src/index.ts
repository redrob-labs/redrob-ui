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

/* ---- Foundations --------------------------------------------------------- */
export { Mark } from './components/Mark/Mark';
export type { MarkProps } from './components/Mark/Mark';
export { MarkReveal } from './components/MarkReveal/MarkReveal';
export type { MarkRevealProps } from './components/MarkReveal/MarkReveal';
export { Layer, LayerContext, LAYER_MEANS } from './components/Layer/Layer';
export type { LayerProps } from './components/Layer/Layer';
export { Illustration } from './components/Illustration/Illustration';
export type { IllustrationProps } from './components/Illustration/Illustration';
export { Diagram } from './components/Diagram/Diagram';
export type { DiagramProps, DiagramStep, DiagramActor } from './components/Diagram/Diagram';
export { illustrations, illustrationNames, CONSTRUCTIONS, RAKE } from './internal/illustrations';

/* ---- Voice --------------------------------------------------------------- */
export { Display } from './components/Display/Display';
export type { DisplayProps } from './components/Display/Display';
export { Statement } from './components/Statement/Statement';
export type { StatementProps } from './components/Statement/Statement';
export { Quote } from './components/Quote/Quote';
export type { QuoteProps } from './components/Quote/Quote';
export { SectionMark } from './components/SectionMark/SectionMark';
export type { SectionMarkProps } from './components/SectionMark/SectionMark';

/* ---- Actions ------------------------------------------------------------- */
export { Button } from './components/Button/Button';
export type { ButtonProps } from './components/Button/Button';
export { IconButton } from './components/IconButton/IconButton';
export type { IconButtonProps } from './components/IconButton/IconButton';
export { Menu } from './components/Menu/Menu';
export type { MenuProps, MenuItem } from './components/Menu/Menu';
