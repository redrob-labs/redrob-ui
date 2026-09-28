// Standard packages
import React, { FC, ReactElement } from 'react';

// Third-party packages
import clsx from 'clsx';

// Custom packages
import Avatar from '../components/Avatar';
import IconButton from '../components/IconButton';
import { DoubleCaretRightIcon } from '../icons';

export type LinkItems = { label: string; href: string; icon: ReactElement };
export type SubItems = { label: string; href: string };
export type MenuItems = {
  key: string;
  title: string;
  icon: ReactElement;
  subItems: SubItems[];
};

export type SideNavigationProps = {
  /** profile image url */
  logoURL?: string;
  /** profile name */
  logoName?: string;
  /** If 'true' left navigation open */
  leftNavOpen?: boolean;
  /** Trigger when close navigation */
  handleCloseNav?: () => void;
  /** menu layout */
  menusLayout?: ReactElement;
  /** If 'true' banner open */
  isBannerOpen?: boolean;
  /** link layout */
  linkLayout?: ReactElement;
  /** profile layout */
  profileLayout?: ReactElement;
};

const SideNavigation: FC<SideNavigationProps> = (
  props: SideNavigationProps
) => {
  /** props - state */
  const {
    leftNavOpen = false,
    logoURL,
    logoName,
    menusLayout,
    isBannerOpen = false,
    linkLayout,
    profileLayout,
  } = props;
  /** props - action */
  const { handleCloseNav } = props;
  /** const - clsx */
  const rootClasses = clsx([
    'fixed h-full bg-white shadow-sm border-r border-grayscale-200 transition-transform duration-500 z-40',
    {
      'translate-x-0 left-0': leftNavOpen,
      '-translate-x-full left-[68px]': !leftNavOpen,
      'top-[64px]': isBannerOpen,
      'top-0': !isBannerOpen,
    },
  ]);

  return (
    <div className={rootClasses} style={{ width: '236px' }}>
      <div>
        {leftNavOpen ? (
          <div className='flex justify-between items-center w-full p-4 border-b'>
            <div className='flex gap-x-2 items-center'>
              <Avatar shape='rounded' src={logoURL} alt='logo' />
              <span className='text-label-semibold'>{logoName ?? '-'}</span>
            </div>
            <IconButton
              adornment={<DoubleCaretRightIcon className='rotate-180' />}
              name='doubleCaret'
              onClick={handleCloseNav}
            />
          </div>
        ) : (
          <div className='flex justify-end items-center w-full p-4 border-b'>
            <Avatar shape='rounded' src={logoURL} alt='logo' />
          </div>
        )}
        <div className='p-4 w-full border-b'>
          {leftNavOpen ? (
            menusLayout
          ) : (
            <div className='flex justify-end'>
              <div className='flex flex-col gap-y-2'>{menusLayout}</div>
            </div>
          )}
        </div>
        <div
          className={clsx([
            {
              'w-full p-4': leftNavOpen,
              'flex justify-end items-center w-full p-4': !leftNavOpen,
            },
          ])}
        >
          <div>
            <div className='space-y-1'>{linkLayout}</div>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 w-full'>
        <div className='w-full p-4'>
          {leftNavOpen ? (
            profileLayout
          ) : (
            <div className='flex justify-end items-center'>{profileLayout}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideNavigation;
