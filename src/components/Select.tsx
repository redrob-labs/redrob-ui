'use client';

// Standard packages
import React, { FC, Fragment } from 'react';
// Third-party packages
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from '@headlessui/react';
import clsx from 'clsx';
// Custom packages
import { ArrowDownIcon, ErrorIcon } from '../icons';

// PropTypes
export type SelectOptionType = {
  value: string;
  label: string;
  disabled?: boolean;
};

type SelectProps = {
  options: SelectOptionType[];
  value: string;
  onChange: (option: SelectOptionType) => void;
  className?: string;
  disabled?: boolean;
  label?: string;
  defaultLabel?: string;
  errorMsg?: string;
  helperMsg?: string;
};

const Select: FC<SelectProps> = (props: SelectProps) => {
  /** props - action */
  const { onChange } = props;
  /** props - state */
  const {
    options,
    value,
    className,
    disabled = false,
    label,
    defaultLabel,
    errorMsg,
    helperMsg,
  } = props;

  const selectedOption = options.find(option => option.value === value);

  /** custom renderers */
  const renderOptions = (option: SelectOptionType) => (
    <ListboxOption
      key={option.value}
      value={option.value}
      disabled={option.disabled}
      as='li'
      data-checked={option.value === value}
      data-disabled={option.disabled}
      className={({ selected, disabled }) =>
        clsx(
          'px-4 py-2 cursor-pointer text-bodyS-regular',
          'flex justify-between items-center',
          'bg-grayscale-600 bg-opacity-0',
          'active:bg-opacity-[0.08] active:text-grayscale-900',
          {
            '!text-grayscale-400 !cursor-not-allowed bg-opacity-[0.08]':
              disabled,
            'text-grayscale-600 bg-opacity-[0.08]': selected && !disabled,
            'hover:bg-opacity-[0.08] text-grayscale-600': !disabled,
          }
        )
      }
    >
      <span>{option.label}</span>
    </ListboxOption>
  );

  const handleChange = (val: string) => {
    const selectedOption = options.find(
      (option: SelectOptionType) => option.value === val
    );
    if (selectedOption) {
      onChange && onChange(selectedOption);
    }
  };
  return (
    <div className={clsx('w-[200px] relative', className)}>
      {label && (
        <label className='block pb-2 text-label-medium text-grayscale-700'>
          {label}
        </label>
      )}
      <Listbox
        value={value}
        onChange={handleChange}
        disabled={disabled}
        as='div'
        data-error={!!errorMsg}
        data-disabled={disabled}
        className='relative'
      >
        {({ open }) => (
          <>
            {/* Button */}
            <ListboxButton
              className={clsx(
                'h-11 relative bg-white rounded flex justify-between items-center w-full px-4 py-2',
                'border text-left text-bodyS-regular',
                {
                  'cursor-not-allowed text-grayscale-400 bg-grayscale-200':
                    disabled,
                  'border-grayscale-300 text-grayscale-600 active:text-grayscale-900':
                    !disabled,
                  'border-grayscale-900': open,
                  'border-semantic-error': errorMsg,
                }
              )}
              data-error={!!errorMsg}
              data-disabled={disabled}
              aria-disabled={disabled}
              aria-expanded={open}
              aria-labelledby={label ?? 'label'}
              aria-describedby={
                errorMsg ? 'error' : helperMsg ? 'helper' : 'default'
              }
            >
              <span>
                {selectedOption?.label || (
                  <span className='text-body-regular'>
                    {defaultLabel ?? 'Select Option'}
                  </span>
                )}
              </span>
              <ArrowDownIcon
                className={clsx(
                  'w-4 h-4 duration-300',
                  { 'rotate-180': open },
                  { 'text-grayscale-500': disabled },
                  { 'text-grayscale-700': !disabled }
                )}
              />
            </ListboxButton>
            <div
              className={clsx([
                'absolute bottom-[-24px] text-semantic-error text-caption-regular flex gap-x-1 items-center',
                {
                  block: errorMsg,
                  hidden: !errorMsg,
                },
              ])}
            >
              <ErrorIcon className='w-4 h-4' />
              {errorMsg}
            </div>
            <div
              className={clsx([
                'absolute bottom-[-24px] text-grayscale-500 text-caption-regular',
                {
                  block: helperMsg,
                  hidden: !helperMsg,
                },
              ])}
            >
              {helperMsg}
            </div>
            {/* Options */}
            <Transition
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <ListboxOptions
                className={clsx(
                  'absolute z-10 mt-2 max-h-60 w-full overflow-auto',
                  'bg-white rounded-md shadow-lg border border-grayscale-300'
                )}
              >
                {options.map(renderOptions)}
              </ListboxOptions>
            </Transition>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default Select;
