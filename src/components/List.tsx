// Standard packages
import React, { FC, ReactElement } from 'react';
// Third-party packages
import clsx from 'clsx';
// Custom packages

// PropTypes
export type ListProps = {
  /** List title */
  title?: string;
  /** List start adornment */
  startAdornment?: ReactElement;
  /** List end adornment */
  endAdornment?: ReactElement;
  /** If 'true' list selected */
  selected?: boolean;
  /** If 'true' list disabled */
  disabled?: boolean;
  /** class name */
  className?: string;
  /** If true padding left 36px */
  subList?: boolean;
  /** List link */
  href?: string;
  /** Trigger when the list clicked */
  onClick?: () => void;
  /** border radius */
  rounded?: 'rounded' | 'rounded-t' | 'rounded-y' | 'rounded-b';
};

export const List: FC<ListProps> = (props: ListProps) => {
  /** props - state */
  const {
    title,
    startAdornment,
    selected = false,
    className,
    endAdornment,
    href,
    disabled,
    subList,
    rounded = 'rounded',
  } = props;
  /** props -action */
  const { onClick } = props;

  /** custom handler */
  const handleClick = () => onClick && onClick();
  const listContent = (
    <div
      className={clsx(['p-2 cursor-pointer flex justify-between items-center'])}
      onClick={!href && !disabled ? handleClick : undefined}
    >
      <div className={'flex justify-between items-center w-full'}>
        <div className='flex gap-x-2 items-center'>
          {startAdornment}
          <span className='text-label-semibold cursor-pointer'>{title}</span>
        </div>
        {endAdornment}
      </div>
    </div>
  );

  return (
    <div
      className={clsx([
        className,
        rounded,
        'bg-grayscale-600 bg-opacity-0 hover:bg-opacity-[0.08] active:bg-opacity-[0.16] active:text-grayscale-900',
        {
          'text-grayscale-600': !selected && !disabled,
          'text-grayscale-900 bg-opacity-[0.08]': selected,
          'text-grayscale-400 bg-opacity-[0.08] !cursor-not-allowed': disabled,
        },
        {
          'pl-7': subList,
        },
      ])}
    >
      {href ? (
        <a
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className='block'
        >
          {listContent}
        </a>
      ) : (
        listContent
      )}
    </div>
  );
};

export default List;
