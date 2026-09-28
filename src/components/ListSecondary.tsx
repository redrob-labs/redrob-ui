// Standard packages
import React, { FC, ReactElement } from 'react';
// Third-party packages
import clsx from 'clsx';
// Custom packages

// PropTypes
export type ListSecondaryProps = {
  /** Card title */
  title?: string;
  subTitle?: string;
  startAdornment?: ReactElement;
  endAdornment?: ReactElement;
  selected?: boolean;
  timeStamp?: string;
  onClick?: () => void;
};

export const ListSecondary: FC<ListSecondaryProps> = (
  props: ListSecondaryProps
) => {
  /** props - state */
  const {
    title,
    startAdornment,
    selected = false,
    endAdornment,
    subTitle,
    timeStamp,
  } = props;
  /** props -action */
  const { onClick } = props;

  /** custom handler */
  const handleClick = () => onClick && onClick;

  return (
    <div
      className={clsx([
        'w-full p-4 rounded cursor-pointer',
        'bg-grayscale-600 bg-opacity-0 hover:bg-opacity-[0.08] active:bg-opacity-[0.16] active:text-grayscale-900',
        {
          'text-grayscale-600': !selected,
          'text-grayscale-900 bg-opacity-[0.08]': selected,
        },
      ])}
      onClick={handleClick}
    >
      <div className='flex items-start justify-between w-full'>
        <div className='flex gap-x-2 items-center'>
          {startAdornment}
          <div className='flex flex-col'>
            <span className='text-label-semibold cursor-pointer'>{title}</span>
            <span className='block pt-1 text-caption-regular'>{subTitle}</span>
          </div>
        </div>
        <div className='flex flex-col'>
          <p className='text-caption-medium text-grayscale-500'>{timeStamp}</p>
        </div>
      </div>
    </div>
  );
};

export default ListSecondary;
