import { Button } from '@headlessui/react';
import clsx from 'clsx';
import React from 'react';

/**
 * Available sizes for the IconButton component
 */
type Size = 'small' | 'medium' | 'large';

/**
 * IconButton props interface
 * Provides a configurable button with an icon that can be styled in different ways
 */
type IconButtonProps = {
  /** Icon or content to display inside the button */
  adornment: React.ReactNode;
  /** Accessible name for the button (required for a11y) */
  name: string;
  /** Whether to use an outlined visual style with border */
  outline?: boolean;
  /** Optional inline CSS styles */
  style?: React.CSSProperties;
  /** Optional additional CSS classes */
  className?: string;
  /** Whether the button should be in a disabled state */
  disabled?: boolean;
  /** Controls the size of both the button and its icon */
  size?: Size;
  /** Handler function for click events */
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};

const IconButton = (props: IconButtonProps) => {
  const {
    adornment,
    name,
    outline = false,
    style,
    className,
    disabled = false,
    size = 'medium',
    onClick,
  } = props;
  // Define mappings for icon dimensions based on size prop
  const iconSizes: Record<Size, string> = {
    small: 'w-4 h-4', // 16x16 pixels
    medium: 'w-5 h-5', // 20x20 pixels
    large: 'w-6 h-6', // 24x24 pixels
  };

  // Define button container dimensions when outline mode is active
  const buttonSizes: Record<Size, string> = {
    small: 'w-8 h-8', // 32x32 pixels
    medium: 'w-10 h-10', // 40x40 pixels
    large: 'w-11 h-11', // 44x44 pixels
  };

  // Construct complete className based on component state and variant
  const classes = clsx(
    // Common shape for all button states
    'rounded',

    // Conditional styling based on disabled state
    disabled
      ? `cursor-not-allowed text-grayscale-400 ${
          outline ? 'bg-grayscale-200' : ''
        }`
      : 'cursor-pointer text-grayscale-600 hover:bg-grayscale-800 hover:bg-opacity-8 active:bg-opacity-16',

    // Button sizing and appearance based on outline variant
    outline
      ? `border border-grayscale-300 flex justify-center items-center ${buttonSizes[size]}`
      : 'p-2',

    // User-provided custom classes take precedence
    className
  );

  // Process the adornment to ensure proper sizing and class inheritance
  const renderIcon = () => {
    const iconClass = iconSizes[size];

    // If adornment is a React element, clone it and merge our sizing classes with its existing classes
    if (React.isValidElement(adornment)) {
      // Type assertion to allow className property
      return React.cloneElement(
        adornment as React.ReactElement<{ className?: string }>,
        {
          className: clsx(
            iconClass,
            (adornment.props as { className?: string }).className
          ),
        }
      );
    }

    // If adornment is not a React element (string, number, etc.), wrap it in a div with proper sizing
    return <div className={iconClass}>{adornment}</div>;
  };

  return (
    <Button
      type='button'
      style={style}
      className={classes}
      onClick={onClick}
      aria-label={name}
      aria-disabled={disabled}
      disabled={disabled}
    >
      {/* HeadlessUI Button provides render props for hover and active states */}
      {({ hover, active }) => (
        <div data-disabled={disabled} data-hover={hover} data-active={active}>
          {renderIcon()}
        </div>
      )}
    </Button>
  );
};

export default IconButton;
