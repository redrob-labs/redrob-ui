'use client';

// Standard packages
import React, { FC, ReactElement } from 'react';
// Third-party packages
import clsx from 'clsx';
// Custom packages

// PropTypes
export type DividerProps = {
  /** divider label */
  label?: string;
  /** divider label color */
  color?: 'gray' | 'primary';
  /** divider padding bottom */
  paddingBottom?: boolean;
  /** time stamp */
  timeStamp?: string;
  /** button */
  button?: ReactElement;
};

const Divider: FC<DividerProps> = (props: DividerProps) => {
  /** props - state */
  const {
    label,
    color = 'gray',
    paddingBottom = false,
    timeStamp,
    button,
  } = props;

  return (
    <>
      <div
        className={clsx([
          'relative w-full flex justify-between items-center',
          {
            'pb-4': paddingBottom,
          },
        ])}
      >
        <div className={clsx(['h-[1px] w-full bg-grayscale-200'])} />
        {label && (
          <>
            <label
              className={clsx([
                'px-4 text-caption-medium',
                {
                  'text-grayscale-500': color === 'gray',
                  'text-primary-300': color === 'primary',
                },
              ])}
            >
              {label}
            </label>
            <div className='h-[1px] w-full bg-grayscale-200' />
          </>
        )}
      </div>
      {timeStamp && (
        <div className='w-full text-caption-medium pt-4 text-grayscale-500 text-left'>
          {timeStamp}
        </div>
      )}
      {button && <div className='pt-4'>{button}</div>}
    </>
  );
};

export default Divider;
