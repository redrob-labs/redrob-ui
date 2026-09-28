// Standard packages
import React, { CSSProperties, FC, ReactElement, cloneElement } from 'react';

// Third-party packages
import clsx from 'clsx';

// Custom packages
import { SuitCaseIcon } from '../icons';

// PropTypes
export type AvatarProps = {
  /** class name */
  className?: string;
  /** Text displayed when the src image is missing */
  alt?: string;
  /** Image displayed if present */
  src?: string;
  /** Avatar size: small (16px) | medium (32px) | large (48px) | x-large (64px) */
  size?: 'small' | 'medium' | 'large' | 'x-large';
  /** Avatar variant: circle | rounded | square  */
  shape?: 'circle' | 'rounded' | 'square';
  /** If 'true' info avatar  */
  variant?:
    | 'gray-icon'
    | 'primary-icon'
    | 'secondary-icon'
    | 'accent-icon'
    | 'gray-icon-reverse'
    | 'primary-icon-reverse'
    | 'secondary-icon-reverse'
    | 'accent-icon-reverse'
    | 'decorative-1-gradient'
    | 'decorative-2-gradient'
    | 'decorative-3-gradient'
    | 'decorative-disabled';
  icon?: ReactElement;
  /** css properties */
  style?: CSSProperties | undefined;
};

const GroupAvatar: FC<AvatarProps> = (props: AvatarProps) => {
  /** props - state */
  const {
    alt,
    src,
    size = 'medium',
    shape = 'rounded',
    className,
    style,
    variant,
    icon,
  } = props;

  /** consts */
  const variantClasses = clsx([
    {
      'h-4 w-4 text-[4px]': size === 'small' && src,
      'h-8 w-8 text-[10px]': size === 'medium' && src,
      'h-10 w-10 text-[14px]': size === 'large' && src,
      'h-16 w-16 text-[20px]': size === 'x-large' && src,
    },
    {
      'p-[2px]': size === 'small' && !src,
      'p-[6px]': size === 'medium' && !src,
      'w-4 h-4 flex justify-center items-center': size === 'small' && !src,
      'w-8 h-8 flex justify-center items-center': size === 'medium' && !src,
      'w-10 h-10 flex justify-center items-center': size === 'large' && !src,
      'w-16 h-16 flex justify-center items-center': size === 'x-large' && !src,
    },
    {
      'rounded ': shape === 'rounded',
      'rounded-none': shape === 'square',
      'rounded-full': shape === 'circle',
    },
  ]);

  const iconClasses = clsx([
    'border border-grayscale-200',
    {
      'bg-grayscale-100': !variant,
    },
    {
      'bg-primary-50 text-primary-300': variant && variant === 'primary-icon',
      'bg-secondary-50 text-secondary-300':
        variant && variant === 'secondary-icon',
      'bg-accent-50 text-accent-300': variant && variant === 'accent-icon',
      'bg-grayscale-100 text-grayscale-400': variant && variant === 'gray-icon',
      'bg-grayscale-600 text-white': variant && variant === 'gray-icon-reverse',
      'bg-primary-300 text-white':
        variant && variant === 'primary-icon-reverse',
      'bg-secondary-300 text-white':
        variant && variant === 'secondary-icon-reverse',
      'bg-accent-300 text-white': variant && variant === 'accent-icon-reverse',
      'bg-decorative-1-gradient text-white':
        variant && variant === 'decorative-1-gradient',
      'bg-decorative-2-gradient text-white':
        variant && variant === 'decorative-2-gradient',
      'bg-decorative-3-gradient text-white':
        variant && variant === 'decorative-3-gradient',
      'bg-grayscale-400 text-white':
        variant && variant === 'decorative-disabled',
    },
  ]);

  if (!src) {
    return (
      <div
        className={clsx([
          'items-center',
          'justify-center',
          'flex',
          'shrink-0',

          variantClasses,
          className,
          iconClasses,
        ])}
        style={style}
      >
        {icon ? (
          cloneElement(icon, {
            className: clsx([
              {
                'w-9 h-9': size === 'x-large',
                'w-6 h-6': size === 'large',
                'w-5 h-5': size === 'medium',
                'w-3 h-3': size === 'small',
              },
            ]),
          })
        ) : (
          <SuitCaseIcon className={variantClasses} />
        )}
      </div>
    );
  }

  return (
    <div
      className={clsx([
        className,
        'ovlerflow-hidden',
        'border border-grayscale-200 rounded-full w-fit',
      ])}
      style={style}
    >
      <img
        className={clsx(variantClasses, 'object-cover select-none shrink-0')}
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default GroupAvatar;
