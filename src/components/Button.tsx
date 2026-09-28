// Standard packages
import React, {
  CSSProperties,
  FC,
  MouseEvent,
  ReactElement,
  ReactNode,
} from 'react';
// Third-party packages
import { Button as HeadlessButton } from '@headlessui/react';
import clsx from 'clsx';
import { ArrowLeftIcon, ArrowRightIcon } from '../icons';

// PropTypes
export interface ButtonProps {
  /** Button label */
  label: ReactNode;
  /** Button variant */
  variant?:
    | 'primary-fill'
    | 'primary-outline'
    | 'white-outline'
    | 'primary-text'
    | 'white-text'
    | 'grayscale-text'
    | 'destructive-fill'
    | 'ai-fill';
  /** Button size */
  size?: 'small' | 'medium' | 'large';
  /** Button adornment position */
  adornmentPosition?: 'start' | 'end' | 'none';
  /** Button adornment */
  adornment?: ReactElement;
  /** Button disabled */
  disabled?: boolean;
  /** Add button css style */
  className?: string;
  /** Button action */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** Additional style tag */
  style?: CSSProperties | undefined;
  /** Native button dom type attribute */
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  /** props - state */
  const {
    label,
    variant = 'primary-fill',
    size = 'medium',
    disabled = false,
    className,
    style,
    type = 'button',
    adornmentPosition = 'none',
    adornment,
  } = props;

  /** props - action */
  const { onClick } = props;

  // Check if current variant is a text button
  const isTextVariant = [
    'primary-text',
    'white-text',
    'grayscale-text',
  ].includes(variant);

  // Check if current variant is a fill button
  const isFillVariant = [
    'primary-fill',
    'destructive-fill',
    'ai-fill',
  ].includes(variant);

  // Check if current variant is an outline button
  const isOutlineVariant = ['primary-outline', 'white-outline'].includes(
    variant
  );

  // Size-related classes
  const sizeClasses = clsx({
    'text-buttonS-semibold': size === 'small',
    'text-buttonM-semibold': size === 'medium',
    'text-buttonL-semibold': size === 'large',
    'h-[34px]': !isTextVariant && size === 'small',
    'h-[40px]': !isTextVariant && size === 'medium',
    'h-[44px]': !isTextVariant && size === 'large',
  });

  // Button padding based on adornment position
  const positionClasses = clsx({
    'pl-2 pr-4': adornmentPosition === 'start',
    'pl-4 pr-2': adornmentPosition === 'end',
    'px-4': adornmentPosition === 'none' && !isTextVariant,
    'px-0': adornmentPosition === 'none' && isTextVariant,
  });

  // Root button classes
  const rootClasses = clsx(
    className,
    'relative inline-flex gap-x-2 items-center justify-center rounded-lg select-none',
    'transition-all duration-200 ease-in-out',
    sizeClasses,
    positionClasses,
    {
      // Disabled state styles
      'cursor-not-allowed text-grayscale-400': disabled,
      'bg-grayscale-200': disabled && !isTextVariant,
      'border border-grayscale-300': disabled && isOutlineVariant,

      // Enabled state styles - background colors
      'bg-primary-400': !disabled && variant === 'primary-fill',
      'bg-semantic-error': !disabled && variant === 'destructive-fill',
      'bg-decorative-1': !disabled && variant === 'ai-fill',

      // Text colors
      'text-white':
        !disabled &&
        [
          'primary-fill',
          'destructive-fill',
          'ai-fill',
          'white-text',
          'white-outline',
        ].includes(variant),
      'text-primary-400':
        !disabled &&
        (variant === 'primary-outline' || variant === 'primary-text'),
      'text-grayscale-600': !disabled && variant === 'grayscale-text',

      // Hover/active states for text variants
      'hover:text-[#246a9e] active:text-[#265f8b]':
        !disabled && variant === 'primary-text',
      'hover:text-[#eeeff0] active:text-[#dedfe1]':
        !disabled && variant === 'white-text',
      'hover:text-[#5e6e84] active:text-[#505e71]':
        !disabled && variant === 'grayscale-text',
    }
  );

  // Overlay classes for button effects
  const overlayClasses = clsx(
    'absolute z-0 rounded-lg inset-0 transition-all duration-200 ease-in-out',
    {
      // Base visibility
      'cursor-pointer': !disabled,
      hidden: disabled,

      // Border styles
      'border border-primary-300': !disabled && variant === 'primary-outline',
      'border border-white': !disabled && variant === 'white-outline',

      // Background colors for overlays
      'bg-[#2E3642]': isOutlineVariant || isFillVariant,
      'bg-white': variant === 'white-outline',

      // Opacity settings for states
      'bg-opacity-0': !disabled, // Using 0 as it's not in your custom opacities
      '[data-hover]:bg-opacity-24 [data-active]:bg-opacity-40 hover:bg-opacity-24 active:bg-opacity-40':
        !disabled && ['primary-fill', 'destructive-fill'].includes(variant),
      '[data-hover]:bg-opacity-8 [data-active]:bg-opacity-16 hover:bg-opacity-8 active:bg-opacity-16':
        !disabled &&
        ['primary-outline', 'white-outline', 'ai-fill'].includes(variant),
    }
  );

  // Icon size classes
  const iconSizeClasses = clsx({
    'w-4 h-4': size === 'small',
    'w-5 h-5': size === 'medium',
    'w-6 h-6': size === 'large',
  });

  return (
    <HeadlessButton
      as='button'
      type={type}
      style={style}
      className={rootClasses}
      onClick={(event: MouseEvent<HTMLButtonElement>) => {
        if (!disabled && onClick) {
          onClick(event);
        }
      }}
      aria-disabled={disabled}
      disabled={disabled}
      data-disabled={disabled}
    >
      {/* Overlay Layer */}
      <span className={overlayClasses} />

      {/* Left Arrow or Custom Adornment */}
      {adornmentPosition === 'start' &&
        (adornment ? (
          <div className='relative pointer-events-none z-1'>{adornment}</div>
        ) : (
          <ArrowLeftIcon
            className={clsx(
              'relative pointer-events-none z-1',
              iconSizeClasses
            )}
          />
        ))}

      {/* Button Label */}
      <span className='relative pointer-events-none z-1'>{label}</span>

      {/* Right Arrow or Custom Adornment */}
      {adornmentPosition === 'end' &&
        (adornment ? (
          <div className='relative pointer-events-none z-1'>{adornment}</div>
        ) : (
          <ArrowRightIcon
            className={clsx(
              'relative pointer-events-none z-1',
              iconSizeClasses
            )}
          />
        ))}
    </HeadlessButton>
  );
};

export default Button;
