// Standard packages
import React, { FC, ReactElement } from 'react';
// Third-party packages
import clsx from 'clsx';
// Custom packages

import { ArrowDownIcon } from '../icons/ArrowDownIcon';
import IconButton from './IconButton';

// PropTypes
export type ListMenuProps = {
  /** List menu title */
  title: string;
  /** List menu start adornment */
  startAdornment?: ReactElement;
  /** sublist menus count */
  menus?: number;
  /** sublist menus count */
  open?: boolean;
  /** Trigger when main menu clicked */
  onClick?: () => void;
};

export const ListMenu: FC<ListMenuProps> = (props: ListMenuProps) => {
  /** props - state */
  const { title, startAdornment, open = false, menus = 0 } = props;
  /** props -action */
  const { onClick } = props;
  /** custom handler */
  const handleClick = () => onClick && onClick();
  return (
    <div
      className={clsx([
        'min-w-[100px] p-2 rounded cursor-pointer flex justify-between items-center',
        'bg-grayscale-600 bg-opacity-0 hover:bg-opacity-[0.08] active:bg-opacity-[0.16] text-grayscale-600',
      ])}
      onClick={handleClick}
    >
      <div className='flex gap-x-2 items-center'>
        {startAdornment}
        <span className='text-label-semibold cursor-pointer'>{title}</span>
      </div>
      <IconButton
        size='small'
        adornment={
          <ArrowDownIcon
            className={clsx([
              'transition-all duration-200 ease-in-out',
              { 'rotate-180': open },
              {
                block: menus > 0,
                hidden: menus === 0,
              },
            ])}
          />
        }
        name='arrowdown'
      />
    </div>
  );
};

export default ListMenu;
