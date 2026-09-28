// Standard packages
import React, { CSSProperties, FC, ReactElement } from 'react';
// Third-party packages
import { Button as HeadlessButton } from '@headlessui/react';
import clsx from 'clsx';

// PropTypes
export interface CustomButtonProps {
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
  /** Button disabled */
  disabled?: boolean;
  /** Add button css style */
  className?: string;
  /** Button action */
  onClick?: () => void;
  /** Additional style tag */
  style?: CSSProperties | undefined;
  /** Native button dom type attribute */
  type?: 'button' | 'submit' | 'reset' | undefined;
  children?: ReactElement;
}

const CustomButton: FC<CustomButtonProps> = (props: CustomButtonProps) => {
  /** props - state */
  const {
    variant = 'primary-fill',
    size = 'medium',
    disabled = false,
    className,
    style,
    type = 'button',
    children,
  } = props;

  /** props - action */
  const { onClick } = props;
  // text button일 경우
  const textVariant =
    variant === 'primary-text' ||
    variant === 'white-text' ||
    variant === 'grayscale-text';
  // fill button일 경우
  const fillVariant =
    variant === 'primary-fill' ||
    variant === 'destructive-fill' ||
    variant === 'ai-fill';

  const outLineVariant =
    variant === 'primary-outline' || variant === 'white-outline';

  const sizeClasses = {
    'text-buttonS_semibold': size === 'small',
    'text-buttonM_semibold': size === 'medium',
    'text-buttonL_semibold': size === 'large',
    'h-[34px]': !textVariant && size === 'small',
    'h-[40px]': !textVariant && size === 'medium',
    'h-[44px]': !textVariant && size === 'large',
  };

  const rootClasses = clsx([
    className,
    'relative inline-flex gap-x-2 items-center justify-center rounded',
    'transition-all duration-200 ease-in-out',
    sizeClasses,
    'px-4',
    disabled
      ? {
          // Disabled
          'cursor-not-allowed text-grayscale_400': true,
          'bg-grayscale_200': !textVariant,
          'border border-grayscale_300': outLineVariant,
        }
      : {
          // !Disabled
          'bg-primary_300': variant === 'primary-fill',
          'bg-semantic_error': variant === 'destructive-fill',
          'bg-ai-gradient': variant === 'ai-fill',
          'text-white': [
            'primary-fill',
            'destructive-fill',
            'ai-fill',
            'white-text',
            'white-outline',
          ].includes(variant!),
          'text-primary_300':
            variant === 'primary-outline' || variant === 'primary-text',
          'text-grayscale_600': variant === 'grayscale-text',
          'hover:text-[#246a9e] active:text-[#265f8b]':
            variant === 'primary-text',
          'hover:text-[#eeeff0] active:text-[#dedfe1]':
            variant === 'white-text',
          'hover:text-[#5e6e84] active:text-[#505e71]':
            variant === 'grayscale-text',
        },
  ]);

  const overlayClasses = clsx([
    className,
    'absolute z-0 rounded inset-0 transition-all duration-200 ease-in-out',
    // !Disabled
    {
      'cursor-pointer': !disabled,
      'border border-primary_300': variant === 'primary-outline' && !disabled,
      'border border-white': variant === 'white-outline' && !disabled,
      // Disabled
      hidden: disabled,
    },
    // Overlay color
    {
      'bg-[#2E3642]': variant === 'primary-outline' || fillVariant,
      'bg-white': variant === 'white-outline',
    },
    // Overlay opacity
    {
      'bg-opacity-0': !disabled, // Default state
      '[data-hover]:bg-opacity-[24%] [data-active]:bg-opacity-[40%] hover:bg-opacity-[24%] active:bg-opacity-[40%]':
        !disabled &&
        (variant === 'primary-fill' || variant === 'destructive-fill'),
      '[data-hover]:bg-opacity-[8%] [data-active]:bg-opacity-[16%] hover:bg-opacity-[8%] active:bg-opacity-[16%]':
        !disabled &&
        (variant === 'primary-outline' ||
          variant === 'white-outline' ||
          variant === 'ai-fill'),
    },
  ]);

  return (
    <HeadlessButton
      as='button'
      type={type}
      style={style}
      className={rootClasses}
      onClick={onClick}
      aria-disabled={disabled}
      aria-label={'custom-button'}
      disabled={disabled}
      data-disabled={disabled}
    >
      {/* Overlay Layer */}
      <span className={clsx([overlayClasses])} />
      <div className='relative pointer-events-none z-1'>{children}</div>
    </HeadlessButton>
  );
};

export default CustomButton;
