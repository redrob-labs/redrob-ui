// Standard packages
import React, { FC, ReactElement } from 'react';
// Third-party packages
import clsx from 'clsx';

// PropTypes
type TooltipProps = {
  /** tooltip - label */
  label: string;
  /** tooltip - position */
  position?: 'right' | 'left' | 'top' | 'bottom';
  /** tooltip label width size */
  labelSize?: 'sm' | 'md' | 'lg';
  /** tooltip layout */
  children: ReactElement;
  /** tooltip class name */
  className?: string;
};

const Tooltip: FC<TooltipProps> = (props: TooltipProps) => {
  /** props - state */
  const {
    label,
    position = 'bottom',
    labelSize = 'sm',
    children,
    className,
  } = props;

  /** const - clsx */
  const positionClsx = clsx({
    'bottom-full left-1/2 transform -translate-x-1/2 mb-2': position === 'top',
    'top-full left-1/2 transform -translate-x-1/2 mt-2': position === 'bottom',
    'left-full top-1/2 transform -translate-y-1/2 ml-2': position === 'right',
    'right-full top-1/2 transform -translate-y-1/2 mr-2': position === 'left',
  });

  const sizeClsx = clsx([
    'min-w-fit',
    { 'whitespace-normal w-[400px]': labelSize === 'lg' },
    { 'whitespace-normal w-[200px]': labelSize === 'md' },
    { 'whitespace-nowrap': labelSize === 'sm' },
  ]);

  const rootClasses = clsx([
    'relative h-full w-fit inline-block group cursor-pointer',
    className,
  ]);
  return (
    <div className={rootClasses}>
      {/* children */}
      {children}

      {/* tooltip */}
      <span
        className={clsx(
          'absolute px-2 py-1 bg-[#2E3642] text-white text-left rounded transition-opacity duration-300 z-10',
          'opacity-0 group-hover:opacity-100',
          'text-caption-semibold',
          positionClsx,
          sizeClsx
        )}
      >
        {label}
      </span>
    </div>
  );
};

export default Tooltip;
