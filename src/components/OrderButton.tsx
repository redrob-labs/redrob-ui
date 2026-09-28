// Standard packages
import React, { FC, MouseEvent } from 'react';
// Third-party packages
import clsx from 'clsx';
// Custom packages
import { ArrowVerticalDownIcon, ArrowVerticalUpIcon } from '../icons';

// PropTypes
export type OrderButtonProps = {
  /** order button id */
  id?: string;
  /** order button index */
  listIndex?: number;
  /** order button count - all */
  listCount?: number;
  /** Trigger when change ordering -  accordian */
  // onMove?: (id: string, direction: "up" | "down") => void;
  onAsc?: () => void;
  onDesc?: () => void;
};

const OrderButton: FC<OrderButtonProps> = (props: OrderButtonProps) => {
  const { listIndex = 0, listCount = 0 } = props;
  const { onAsc, onDesc } = props;

  const handleMoveUp = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onAsc && onAsc();
  };

  const handleMoveDown = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onDesc && onDesc();
  };

  return (
    <div className='flex flex-col gap-y-1'>
      <ArrowVerticalUpIcon
        onClick={onAsc}
        className={clsx(
          'h-[5px]',
          'cursor-pointer text-grayscale-600 hover:text-grayscale-900'
        )}
      />

      <ArrowVerticalDownIcon
        onClick={onDesc}
        className={clsx(
          'h-[5px]',
          'cursor-pointer text-grayscale-600 hover:text-grayscale-900'
        )}
      />
    </div>
  );
};

export default OrderButton;
