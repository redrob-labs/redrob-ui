'use client';

// Standard packages
import React, { FC, useEffect, useState } from 'react';

// Third-party packages
import clsx from 'clsx';

// Custom packages
import { StarFourIcon } from '../icons';

// PropTypes
type NotificationBannerType = {
  notices?: string[];
  size?: 'small' | 'medium' | 'large';
};
const NotificationBanner: FC<NotificationBannerType> = (
  props: NotificationBannerType
) => {
  /** props - state */
  const { notices = [], size = 'medium' } = props;
  /** props - action */
  const {} = props;

  /** useState hook */
  const [noticeIndex, setNoticeIndex] = useState(0);

  /** useEffect hook */
  useEffect(() => {
    const interval = setInterval(() => {
      setNoticeIndex(prevIndex => (prevIndex + 1) % notices?.length); // 순환 로직
    }, 2000); // Switch every 2 seconds
    return () => clearInterval(interval); // Avoid memory leaks
  }, [notices?.length]);

  /** custom renderer */

  const renderNotices = (label: string, index: number) => (
    <div
      key={index}
      className={clsx(
        'absolute w-full flex items-center justify-start gap-x-2 text-label-medium transition-transform duration-700 ease-linear',
        {
          'translate-y-0 opacity-100': index === noticeIndex, // visible in the middle
          '-translate-y-full opacity-0':
            index === (noticeIndex - 1 + notices.length) % notices.length, // disappears up
          'translate-y-full opacity-0':
            index !== noticeIndex &&
            index !== (noticeIndex - 1 + notices.length) % notices.length, // waiting below
        }
      )}
    >
      <StarFourIcon className='text-secondary w-5 h-5 shrink-0' />
      <p
        className={clsx([
          'truncate overflow-hidden whitespace-nowrap text-ellipsis text-white',
          {
            'w-[320px]': size === 'small',
            'w-[520px]': size === 'medium',
            'w-[720px]': size === 'large',
          },
        ])}
      >
        {label}
      </p>
    </div>
  );
  return (
    <div
      className={clsx([
        'relative bg-white rounded bg-opacity-[8%] transition-all duration-[0ms] ease-linear h-9 p-2 overflow-hidden',
        {
          'w-[360px]': size === 'small',
          'w-[560px]': size === 'medium',
          'w-[760px]': size === 'large',
        },
      ])}
    >
      {notices.map(renderNotices)}
    </div>
  );
};

export default NotificationBanner;
