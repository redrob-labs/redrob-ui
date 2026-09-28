'use client';
// Standard packages
import React, { FC } from 'react';
// Third-party packages

// Custom packages
import clsx from 'clsx';
import { StarFourIcon } from '../icons';
import Button from './Button';

// PropTypes
type AlertBannerProps = {
  /** Trigger when subscribe */
  onGoSubscribe?: () => void;
  /** banner label */
  label: string;
  bannerOpen?: boolean;
};

const AlertBanner: FC<AlertBannerProps> = (props: AlertBannerProps) => {
  /** props - state */
  const { label, bannerOpen } = props;
  /** props - action */
  const { onGoSubscribe } = props;

  /** custom handlers */
  const handleGoSubscribe = () => {
    onGoSubscribe && onGoSubscribe();
  };
  if (bannerOpen) return;
  <div
    className={clsx([
      'fixed top-0 left-0 z-10 w-full flex flex-col justify-start items-start gap-4 sm:flex-row sm:justify-between sm:items-center bg-primary-400 p-4 text-white transition-all duration-300 ease-in-out',
    ])}
  >
    <div className='flex flex-col gap-2 sm:flex-row sm:items-center text-label-regular'>
      <StarFourIcon className='text-[#EDFF69] h-4 w-4 shrink-0' />
      <p className='pl-1'>{label}</p>
    </div>
    {onGoSubscribe && (
      <Button
        variant='white-outline'
        size='small'
        className='flex gap-x-2 items-center'
        adornmentPosition='end'
        label={label}
        onClick={handleGoSubscribe}
      />
    )}
  </div>;

  return null;
};

export default AlertBanner;
