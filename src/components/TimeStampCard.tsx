import clsx from 'clsx';
import React, { FC, useState } from 'react';

// PropTypes
export type TimeStampCardProps = {
  /** Card children */
  children: React.ReactElement;
  /** Card classname */
  className?: string;
  /** timestamp */
  timeStamp: string;
};

export const TimeStampCard: FC<TimeStampCardProps> = (
  props: TimeStampCardProps
) => {
  /** props - state */
  const { children, timeStamp, className } = props;

  /** Hover state */
  const [isHovered, setIsHovered] = useState(false);

  /** Hover handlers */
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  /** consts */
  const rootClasses = clsx(['relative', 'rounded', className]);

  return (
    <div
      className={rootClasses}
      id='0'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='relative w-full'>
        {/* id="1": hover 효과 */}
        <div
          id='1'
          className={clsx([
            'p-4 pb-2 bg-white border border-b-0 rounded-t border-grayscale-200',
            {
              'shadow-sm cursor-pointer transition-all duration-100 ease-in-out':
                isHovered,
            },
          ])}
        >
          {children}
        </div>
        {/* id="2": 중간 SVG */}
        <div className='relative h-4 flex' id='2'>
          <div className='absolute left-0 top-1/2 px-2 w-full'>
            <div className='line-dashed' />
          </div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='9'
            height='16'
            viewBox='0 0 9 16'
            fill='none'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M8.58307e-06 16C4.59385 16 8.31789 12.4183 8.31789 8C8.31789 3.58172 4.59385 0 8.58307e-06 0H9V16H8.58307e-06Z'
              fill='white'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M7.31789 8C7.31789 11.8296 4.07865 15 9.53674e-06 15C6.35783e-06 15 3.17891e-06 15 0 15L9.53674e-06 16C4.59385 16 8.31789 12.4183 8.31789 8C8.31789 3.58172 4.59385 0 9.53674e-06 0C6.35783e-06 0 3.17891e-06 0 0 0V1C3.17891e-06 1 6.35783e-06 1 9.53674e-06 1C4.07865 1 7.31789 4.17037 7.31789 8Z'
              fill='#ECEFF2'
            />
          </svg>
          <div
            className={clsx(['bg-white h-full'])}
            style={{
              width: `calc(100% - 16px)`,
            }}
          />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='9'
            height='16'
            viewBox='0 0 9 16'
            fill='none'
            className='rotate-180'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M8.58307e-06 16C4.59385 16 8.31789 12.4183 8.31789 8C8.31789 3.58172 4.59385 0 8.58307e-06 0H9V16H8.58307e-06Z'
              fill='white'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M7.31789 8C7.31789 11.8296 4.07865 15 9.53674e-06 15C6.35783e-06 15 3.17891e-06 15 0 15L9.53674e-06 16C4.59385 16 8.31789 12.4183 8.31789 8C8.31789 3.58172 4.59385 0 9.53674e-06 0C6.35783e-06 0 3.17891e-06 0 0 0V1C3.17891e-06 1 6.35783e-06 1 9.53674e-06 1C4.07865 1 7.31789 4.17037 7.31789 8Z'
              fill='#ECEFF2'
            />
          </svg>
        </div>

        {/* id="3": hover 효과 */}
        <p
          id='3'
          className={clsx([
            'text-caption-medium text-grayscale-500 p-4 pt-2 bg-white rounded-b border border-grayscale-200 border-t-0',
            {
              'shadow-sm cursor-pointer transition-all duration-100 ease-in-out':
                isHovered,
            },
          ])}
          style={{
            borderSpacing: 20,
          }}
        >
          {timeStamp}
        </p>
      </div>
    </div>
  );
};

export default TimeStampCard;
