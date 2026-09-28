'use client';

// Standard packages
import React, { FC, ReactElement } from 'react';

// Third-party packages
import clsx from 'clsx';

// Custom packages
import { StarFourIcon } from '../icons';

// PropTypes
type BannerType = {
  endAdornment?: ReactElement;
  description: string;
};

const Banner: FC<BannerType> = (props: BannerType) => {
  /** props - state */
  const { endAdornment, description } = props;

  /** custom renderer */

  return (
    <div
      className={clsx([
        'sticky top-0 w-full',
        'bg-primary-400 text-white rounded flex justify-between items-center gap-x-4 p-4',
      ])}
    >
      <div className={clsx(['flex gap-x-2 items-center truncate'])}>
        <StarFourIcon className='text-secondary w-5 h-5 shrink-0' />
        <p
          className={clsx([
            'truncate',
            'text-ellipsis overflow-hidden whitespace-nowrap',
          ])}
        >
          {description}
        </p>
      </div>
      <div className='flex-1'>{endAdornment && endAdornment}</div>
    </div>
  );
};

export default Banner;
