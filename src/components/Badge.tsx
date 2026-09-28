'use client';

// Standard packages
import React, { FC, ReactElement } from 'react';
// Third-party packages
import clsx from 'clsx';

// PropTypes
export type BadgeType = {
  /** badge children */
  children: ReactElement;
  /** badge count */
  count?: number;
  /** badge notice */
  notice?: boolean;
  /** badge type */
  topPadding?: 'icon' | 'floating';
};

const Badge: FC<BadgeType> = (props: BadgeType) => {
  /** props - state */
  const { children, count = 0, notice = false, topPadding = 'icon' } = props;

  /** Determine which state to display */
  const showNotice = notice;
  const showCount = !notice && count > 0;
  const countTens = count >= 10 && count < 100;
  const upperHundred = count >= 100;

  return (
    <div className='relative'>
      <div
        className={clsx([
          {
            hidden: !showNotice && !showCount,
            'block z-[1]': showNotice || showCount,
          },
          {
            'top-[-4px] right-[-4px]': topPadding === 'icon' && showNotice,
            'top-[-10px] right-[-18px]':
              topPadding === 'icon' && showCount && !upperHundred,
            'top-[-10px] right-[-28px]':
              topPadding === 'icon' && showCount && countTens,
            'top-[-10px] right-[-38px]':
              topPadding === 'icon' && showCount && upperHundred,
            'top-0 right-0': topPadding === 'floating' && showNotice,
            'top-[-8px] right-[-10px]': topPadding === 'floating' && showCount,
          },
          {
            'absolute bg-primary-300 rounded-full w-2 h-2': showNotice,
            'absolute bg-primary-300 text-white text-caption-semibold rounded-full h-5 p-[1.5px] px-2':
              showCount,
          },
        ])}
      >
        {showCount && <span>{count <= 99 ? count : '99+'}</span>}
      </div>
      {children}
    </div>
  );
};

export default Badge;
