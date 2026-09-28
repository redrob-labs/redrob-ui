// Standard packages
import React, { FC, ReactNode, useEffect } from 'react';

// Third-party packages
import clsx from 'clsx';

// PropTypes
type BackdropProps = {
  /** Content of the Backdrop */
  children?: ReactNode;
  /** If true, set the background opacity to zero */
  popper?: boolean;
  /** custom z-index */
  zIndex?: number;
  /** if want to disable scroll */
  disableScroll?: boolean;
};

const Backdrop: FC<BackdropProps> = (props: BackdropProps) => {
  /** props */
  const { children, popper, zIndex = 50, disableScroll } = props;

  /** consts - clsx */
  const rootClasses = clsx(
    'fixed',
    'top-0',
    'left-0',
    'w-full',
    'h-full',
    'inset-0',

    popper ? 'bg-opacity-[0%]' : 'bg-opacity-[24%]',
    'bg-grayscale-900'
  );

  /** useEffect hooks */

  useEffect(() => {
    if (disableScroll) {
      document.body.style.overflow = 'hidden';
      return enableScroll;
    }
  }, []);

  /** custom handler */
  const enableScroll = () => {
    document.body.style.overflow = 'auto';
  };

  return (
    <div
      className={rootClasses}
      style={{
        zIndex: `${zIndex}`,
      }}
    >
      {children}
    </div>
  );
};

export default Backdrop;
