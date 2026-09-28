// Standard packages
import React, { FC, ReactElement, useState } from 'react';

// Third party packages
import clsx from 'clsx';

// PropTypes
export interface PopoverProps {
  /** Popper button - hover되는 주체 */
  button: ReactElement;
  /** Popper panel */
  pannel: ReactElement;
  /** popper panel size */
  size?: 'fit' | 'x-small' | 'small' | 'medium' | 'large';
  /** popper location */
  position?: 'left' | 'right' | 'center';
}

const Popover: FC<PopoverProps> = (props: PopoverProps) => {
  /** props - state */
  const { pannel, size, position = 'center', button } = props;

  /** const - clsx */
  const sizeClasses = {
    'w-[80px]': size === 'x-small',
    'w-[140px]': size === 'small',
    'w-[200px]': size === 'medium',
    'w-[260px]': size === 'large',
  };
  const positionClasses = {
    'left-0': position === 'left',
    'right-0': position === 'right',
    'left-1/2 -translate-x-1/2': position === 'center',
  };

  const popperClasses = clsx([
    'absolute top-10 pt-2 text-body-regular',
    sizeClasses,
    positionClasses,
  ]);

  /** useState hook */
  const [open, setOpen] = useState(false);

  /** custom handlers */
  const handleMouseEnter = () => setOpen(true);
  const handleMouseLeave = () => setOpen(false);

  return (
    <div
      className='relative'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-hover={open}
      aria-haspopup='menu'
      aria-expanded={open}
    >
      {/* Popper Button */}
      {button}
      {/* Popper Panel */}
      <div
        className={clsx([
          popperClasses,
          {
            'opacity-100 scale-100': open,
            'opacity-0 scale-95 pointer-events-none': !open,
          },
        ])}
        style={{ transition: 'opacity 0.3s ease-out, transform 0.3s ease-out' }}
        role='menu'
        aria-hidden={!open}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={clsx([
            'bg-white',
            'text-grayscale-400 text-body-regular',
            'rounded',
            'border',
            'border-grayscale-200',
            'drop-shadow-[0_0_8px_rgba(12,21,29,0.08)]',
            'flex flex-col',
            'transition-opacity duration-300 ease-out transform',
          ])}
        >
          {pannel}
        </div>
      </div>
    </div>
  );
};

export default Popover;
