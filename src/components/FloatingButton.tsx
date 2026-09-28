// Standard packages
import React, {
  CSSProperties,
  FC,
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement,
} from 'react';
// Third-party packages
import { Button as HeadlessButton } from '@headlessui/react';
import clsx from 'clsx';
// PropTypes
export type FloatingButtonProps = {
  /** label */
  label?: string;
  /** icon */
  adornment: ReactNode;
  /** 추가 style 태그 */
  style?: CSSProperties;
  /** 추가 className */
  className?: string;
  /** Button disabled */
  disabled?: boolean;
  /** Button size */
  size?: 'small' | 'medium' | 'large';
  /** Button action */
  onClick?: () => void;
  /** Native button dom type attribute */
  type?: 'button' | 'submit' | 'reset' | undefined;
};

const FloatingButton: FC<FloatingButtonProps> = (
  props: FloatingButtonProps
) => {
  /** props - state */
  const {
    label,
    adornment,
    style,
    disabled = false,
    size = 'medium',
    type = 'button',
  } = props;

  /** props - action */
  const { onClick } = props;

  const textClasses = {
    'text-buttonS-semibold': size === 'small',
    'text-buttonM-semibold': size === 'medium',
    'text-buttonL-semibold': size === 'large',
  };

  const disabledClasses = {
    'rounded-full bg-white text-grayscale-600': !disabled,
    'cursor-not-allowed text-grayscale-400 rounded-full bg-grayscale-200 text-grayscale-400':
      disabled,
  };

  const commonClasses = {
    'relative flex gap-x-2 items-center': label,
  };

  const variantClasses = clsx([
    // label x
    {
      'p-[9px]': size === 'small' && !label,
      'p-[10px]': (size === 'medium' || size === 'large') && !label,
    },
    // label o
    {
      'py-[9px] px-4': size === 'small' && label,
      'p-[10px] px-4': (size === 'medium' || size === 'large') && label,
    },
  ]);

  const rootClasses = clsx([
    commonClasses,
    disabledClasses,
    variantClasses,
    'shadow-lg relative',
  ]);
  // Size classes
  const sizeClasses: Record<'small' | 'medium' | 'large', string> = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6',
  };
  const overlayClasses = clsx([
    'absolute rounded-full inset-0 transition-all duration-200 ease-in-out',
    {
      'cursor-pointer': !disabled,
      'cursor-not-allowed': disabled,
    },
    {
      'bg-[#2E3642] bg-opacity-0': !disabled,
      'hover:bg-opacity-[8%] active:bg-opacity-[16%]': !disabled,
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
      aria-label={label ? label : 'icon'}
      disabled={disabled}
      data-disabled={disabled}
    >
      {/* Overlay Layer */}
      <span className={overlayClasses} />
      {adornment &&
        (isValidElement(adornment) ? (
          cloneElement(adornment as ReactElement, {
            className: clsx(sizeClasses[size], adornment.props?.className),
          })
        ) : (
          <div className={clsx(sizeClasses[size])}>{adornment}</div>
        ))}
      <span className={clsx([textClasses])}>{label}</span>
    </HeadlessButton>
  );
};
export default FloatingButton;
