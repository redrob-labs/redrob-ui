'use client';

// Standard packages
import React, { ChangeEvent, FC, KeyboardEvent } from 'react';
// Third-party packages
import clsx from 'clsx';
// Custom packages
import { FilterIcon, SendIcon, StarFourDoubleIcon } from '../icons';
import GradientInputWrapper from './GradientInputWrapper';
import IconButton from './IconButton';
import Loader from './Loader';

// PropTypes
type SearchBarProps = {
  className?: string;
  /** searchbar value */
  value?: string;
  /** If trigger textfield value change */
  onChange?: (value: string) => void;
  /** If trigger press key enter */
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  /** searchbar disabled */
  disabled?: boolean;

  /** If trigger filter handler active */
  openFilter?: () => void;
  /** If trigger send handler active */
  openSend?: () => void;
};

const SearchBar: FC<SearchBarProps> = (props: SearchBarProps) => {
  /** props - state */
  const { value, disabled = false, className } = props;
  /** props - action */
  const { onChange, onKeyDown, openFilter, openSend } = props;

  /** custom handler */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    onChange && onChange(inputValue);
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      onKeyDown && onKeyDown(e);
    }
  };

  const handleFilter = () => {
    openFilter && openFilter();
  };
  const handleSend = () => {
    openSend && openSend();
  };

  return (
    <GradientInputWrapper
      disabled={disabled}
      aria-disabled={disabled}
      data-disabled={disabled}
    >
      <div
        className={clsx([
          'flex items-center gap-x-2 border-transparent border-[1px]',
          {
            className,
          },
        ])}
        role='search'
        aria-label='Search bar'
      >
        <StarFourDoubleIcon
          className='text-primary-300 shrink-0'
          aria-hidden='true'
        />
        <input
          type='text'
          value={value}
          onChange={handleChange}
          className='w-full text-bodyS-regular text-grayscale-900 outline-none bg-transparent'
          placeholder='Software developers (Node.js, React.js) with minimum 5 years of experience in New York'
          onKeyDown={handleKeyDown}
          autoComplete='off'
          autoFocus
          disabled={disabled}
          aria-disabled={disabled}
          data-disabled={disabled}
          role='textbox'
          aria-placeholder='Enter search query'
        />
        {disabled ? (
          <Loader aria-label='Loading...' />
        ) : (
          <div className='flex gap-x-2 items-center'>
            <IconButton
              adornment={<FilterIcon />}
              name='filter'
              onClick={handleFilter}
              aria-label='Filter options'
              data-disabled={disabled}
              disabled={disabled}
            />
            <IconButton
              adornment={<SendIcon />}
              name='send'
              onClick={handleSend}
              aria-label='Send query'
              data-disabled={disabled}
              disabled={disabled}
            />
          </div>
        )}
      </div>
    </GradientInputWrapper>
  );
};

export default SearchBar;
