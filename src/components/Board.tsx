// Standard packages
import React, { FC, ReactNode } from 'react';

// Third-party packages
import clsx from 'clsx';

// PropTypes
interface BoardProps {
  /** Board children */
  children: ReactNode;
  /** Board title */
  title?: ReactNode;
  /** Board className */
  className: string;
  /** Extra adornment placed after the input (e.g. icon, search button)  */
  adornment?: ReactNode;
}

const Board: FC<BoardProps> = (props: BoardProps) => {
  /** props - state */
  const { children, title, className, adornment } = props;

  /** consts */
  const rootClasses = clsx([
    className,
    {
      border: true,
      'border-grayscale-200': true,
      'bg-white': true,
      'p-6': true,
    },
    'rounded',
  ]);

  return (
    <div className={rootClasses}>
      <div className='flex justify-between items-center'>
        <h4 className='text-h4-bold'>{title}</h4>
        {adornment && adornment}
      </div>

      {children}
    </div>
  );
};

export default Board;
