// Standard packages
import React, { FC } from 'react';

// Third-party packages
import clsx from 'clsx';

// Custom packages
import { TimerIcon } from '../icons';

// PropTypes
type ProgressLinearProps = {
  /** If present, apply additional classNames to the root */
  className?: string;
  /** Decides how much of the linear progress bar should fill */
  value?: number;
  /** If 'true' time urgent */
  urgent?: boolean;
  /** variant */
  variant?: 'circle' | 'circle-value' | 'rounded' | 'rounded-value';
};

const ProgressLinear: FC<ProgressLinearProps> = (
  props: ProgressLinearProps
) => {
  /** props */
  const { className, value = 0, urgent, variant } = props;

  /** consts - clsx */
  const rootClasses = clsx(['w-full', { [className as string]: className }]);

  const barConatinerClasses = clsx([
    'w-full',
    'bg-grayscale-200',
    {
      'rounded-full': variant === 'circle' || variant === 'circle-value',
    },
  ]);
  const barClasses = clsx([
    'bg-primary-300 ',
    {
      'h-2 rounded-l': variant === 'circle' || variant === 'circle-value',
      'h-3 rounded-l': variant === 'rounded' || variant === 'rounded-value',
    },
  ]);
  const containerClasses = clsx([
    'flex gap-x-2 items-center w-full',
    {
      'bg-black p-[2px] ': variant === 'circle-value',
    },
  ]);
  return (
    <div className={rootClasses}>
      <div className={containerClasses}>
        {variant === 'circle-value' && (
          <div className='flex gap-x-1 items-center'>
            <div
              className={clsx('shrink-0', {
                'animate-wiggle': urgent,
              })}
            >
              <TimerIcon className='text-white w-4 h-4' />
            </div>
            <label className='text-white'>{value}</label>
          </div>
        )}
        <div className={barConatinerClasses}>
          <div
            className={clsx([
              barClasses,
              {
                'animate-pulse': urgent,
              },
            ])}
            style={{ width: `${value}%` }}
          />
        </div>
        {variant === 'rounded-value' && <label>{value}</label>}
      </div>
    </div>
  );
};

export default ProgressLinear;
