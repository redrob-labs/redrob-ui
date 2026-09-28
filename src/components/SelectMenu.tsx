'use client';

// Standard packages
import React, { FC, KeyboardEvent, ReactNode } from 'react';
// Third-party packages
import clsx from 'clsx';
// Custom packages
import { SearchIcon, XIcon } from '../icons';
import List from './List';
import TextField from './TextField';

// PropTypes
type SelectMenuProps = {
  /** textfield placeholder */
  placeholder?: string;
  /** textfield disabled */
  disabled?: boolean;
  /** textfield classname */
  className?: string;
  /** textfield width */

  /** auto focus */
  autoFocus?: boolean;
  /** end adornment */
  endAdornment?: ReactNode;
  value?: string;
  /** input type */
  type?:
    | 'text'
    | 'number'
    | 'password'
    | 'email'
    | 'tel'
    | 'url'
    | 'date'
    | 'textarea'
    | 'currency';

  min?: number;
  max?: number;
  /** input size */
  size?: 'small' | 'medium' | 'large';
  /** input radius */
  variant?: 'rounded' | 'circle';
  /** If trigger textfield value change */
  onChange?: (value: string) => void;
  /** If trigger press key enter */
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  /** If trigger item clicked */
  onClickItem?: (value: string) => void;
  /** error message */
  errorMsg?: string;
  /** helper message */
  helperMsg?: string;
  /** List of menu items */
  items: { label: string; disabled: boolean }[];
};

const SelectMenu: FC<SelectMenuProps> = (props: SelectMenuProps) => {
  /** state - props */
  const {
    placeholder = '텍스트를 입력하세요',
    disabled = false,
    className,

    autoFocus = false,
    type = 'text',
    size = 'small',
    variant = 'rounded',
    min,
    max,
    errorMsg,
    helperMsg,
    items,
    value,
  } = props;
  /** state - actions */
  const { onChange, onKeyDown, onClickItem } = props;

  /** custom handlers */
  const handleItemClick = (item: string) => {
    onClickItem && onClickItem(item);
  };

  const handleInputChange = (val: string) => {
    onChange && onChange(val);
  };

  /** custom renderer */
  const renderItems = (item: { label: string; disabled: boolean }) => (
    <List
      key={item.label}
      title={item.label}
      disabled={item.disabled}
      onClick={() => {
        handleItemClick(item.label);
      }}
    />
  );

  return (
    <div
      className={clsx([
        'relative',
        'rounded',
        'border border-grayscale-200 bg-white shadow-sm',
      ])}
    >
      {/* TextField */}
      <div className='p-4 border-b border-grayscale-200'>
        <TextField
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          className={clsx([className, 'min-w-[200px]'])}
          outline
          autoFocus={autoFocus}
          endAdornment={
            value ? (
              <XIcon onClick={() => onChange && onChange('')} />
            ) : (
              <SearchIcon />
            )
          }
          type={type}
          size={size}
          variant={variant}
          min={min}
          max={max}
          onChange={(val: string) => handleInputChange(val)}
          onKeyDown={onKeyDown}
          errorMsg={errorMsg}
          helperMsg={helperMsg}
        />
      </div>
      {/* List */}
      {items?.length > 0 && (
        <div className='absolute left-0 top-full mt-1 w-full p-4 bg-white shadow-md max-h-[200px] overflow-auto border border-grayscale-200 rounded-md'>
          {items.map(renderItems)}
        </div>
      )}
    </div>
  );
};

export default SelectMenu;
