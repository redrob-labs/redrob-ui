// Standard packages
import React, { FC, ReactElement, ReactNode } from 'react';

// Third-party packages
import clsx from 'clsx';

// Custom packages
import { XIcon } from '../icons';

// PropTypes
type ChipProps = {
  /** 추가 className */
  className?: string;
  /** chip label */
  label: ReactElement | string;
  /** selected true시 chip 활성화 */
  selected?: boolean;
  /** canHover true시 hover 가능 */
  canHover?: boolean;
  /** chip 클릭 트리거 */
  onClick?: (value: ReactNode) => void;
  /** chip 삭제 트리거 */
  onDelete?: (text: string) => void;
  /** disabled true시 클릭 불가능 */
  disabled?: boolean;
};

const Chip: FC<ChipProps> = (props: ChipProps) => {
  /** props - states */
  const {
    label,
    selected = false,
    className,
    canHover = false,
    disabled = false,
  } = props;

  /** props - action */
  const { onClick, onDelete } = props;

  /** custom handlers */
  const handleOnClick = () => onClick && onClick(label);

  const handleDelete = () => {
    if (typeof label === 'string' && onDelete) {
      onDelete(label);
    }
  };
  /** consts - clsx */
  const rootClasses = clsx([
    className,
    'select-none relative whitespace-nowrap rounded-[30px] inline-block px-2 py-[5.5px] border text-caption-semibold text-grayscale-600 mr-2',
    {
      // 선택되었을 때
      'bg-[#D3E5F1] border-primary-300 bg-primary-300 bg-opacity-[0.2] text-primary-300':
        selected,
      'cursor-pointer hover:bg-grayscale-800 hover:bg-opacity-[8%]': canHover,
      'cursor-not-allowed': disabled,
    },
  ]);

  return (
    <button
      className={rootClasses}
      aria-label={typeof label === 'string' ? label : 'button'}
      onClick={handleOnClick}
      disabled={disabled}
    >
      {onDelete ? (
        <div className='flex gap-x-1 items-center'>
          {label}
          <XIcon
            className={clsx([
              'w-4 h-4',
              {
                'text-primary-300': selected,
                'text-grayscale-600': !selected,
              },
            ])}
            onClick={handleDelete}
          />
        </div>
      ) : (
        label
      )}
    </button>
  );
};

export default Chip;
