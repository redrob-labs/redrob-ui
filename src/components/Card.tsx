// Standard packages
import React, { FC, ReactElement } from 'react';

// Third-party packages
import clsx from 'clsx';

// Custom packages

// PropTypes
export type CardProps = {
  /** Card children */
  children: ReactElement;
  /** Card background color */
  background?: 'white' | 'gray' | 'gradient';
  /** Card outline */
  outline?: boolean;
  /** Card shadow */
  elevation?: boolean;
  /** Card classname */
  className?: string;
};

export const Card: FC<CardProps> = (props: CardProps) => {
  /** props - state */
  const {
    children,
    background = 'white',
    outline = false,
    elevation = true,
    className,
  } = props;

  /** consts */
  const rootClasses = clsx([
    'relative rounded p-4 text-grayscale-900',
    className, // className을 맨 마지막에 배치
    {
      'border border-grayscale-200': outline,
      'hover:shadow-sm cursor-pointer transition-all duration-100 ease-in-out':
        elevation,
      'bg-white': background === 'white',
      'bg-grayscale-100': background === 'gray',
      'bg-primary-secondary-gradient': background === 'gradient',
    },
  ]);

  return (
    <div className={rootClasses}>
      <div
        className={clsx([
          {
            'absolute inset-0 bg-white bg-opacity-80 pointer-events-none rounded-[3px]':
              background === 'gradient',
          },
        ])}
      />
      <div className='relative'>{children}</div>
    </div>
  );
};

export default Card;
