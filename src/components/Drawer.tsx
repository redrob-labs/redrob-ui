// Standard packages
import React, { FC, ReactElement } from 'react';
// Third-party packages
import clsx from 'clsx';
// Custom packages
import IconButton from '../components/IconButton';
import { DoubleCaretRightIcon, NewTabIcon } from '../icons';

// PropTypes
export type DrawerProps = {
  /** If 'true' panel opened */
  panelOpen?: boolean;
  /** If 'true' banner opened */
  bannerOpen?: boolean;
  /** Trigger close drawer */
  onClose: () => void;
  /** drawer content */
  children: ReactElement;
};

export const Drawer: FC<DrawerProps> = (props: DrawerProps) => {
  /** props - state */
  const { panelOpen, bannerOpen, children } = props;
  /** props - action */
  const { onClose } = props;

  /** custom handler */
  const handleClose = () => onClose && onClose();
  const handleNewTab = () =>
    window.open('https://chat.redrob.io/app', '_blank');
  return (
    <div
      className={clsx([
        'fixed top-0 right-0 bg-white shadow-md border-l border-grayscale-200 transition-transform duration-500 z-40',
        ,
        'overflow-y-auto',
        {
          'translate-x-0': panelOpen,
          'translate-x-full': !panelOpen,
        },
        {
          'top-[64px] h-[calc(100vh-64px)]': bannerOpen,
          'top-0 h-full': !bannerOpen,
        },
      ])}
      style={{ width: '500px' }}
    >
      <div className='sticky top-0 left-0 w-full p-4 bg-white'>
        <div className='flex gap-x-2'>
          <IconButton
            adornment={<DoubleCaretRightIcon />}
            name='caret-right'
            onClick={handleClose}
          />
          <IconButton
            adornment={<NewTabIcon />}
            name='new-tab'
            onClick={handleNewTab}
          />
        </div>
      </div>
      <div className='p-6 pt-0'>{children}</div>
    </div>
  );
};

export default Drawer;
