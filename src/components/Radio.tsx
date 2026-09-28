'use client';

// Standard packages
import React, { FC, ReactElement, useState } from 'react';
// Third-party packages
import { Radio as HeadlessRadio, RadioGroup } from '@headlessui/react';
import clsx from 'clsx';
// Custom packages
import { RadioActiveSVG } from '../assets/RadioActiveSVG';
import { RadioInActiveSVG } from '../assets/RadioInActiveSVG';
import { RadioNoneCheckActiveSVG } from '../assets/RadioNoneCheckActiveSVG';
import { RadioNoneCheckInActiveSVG } from '../assets/RadioNoneCheckInActiveSVG';

// PropTypes
export type RadioOptionType = {
  /** option content */
  content: ReactElement;
  /** option value */
  value: string;
  /** If 'true' option is displayed checked */
  checked?: boolean;
  /** If 'true' option is displayed disabled */
  disabled?: boolean;
};

export type RadioProps = {
  /** label */
  label?: string;
  /** options */
  options: RadioOptionType[];
  /** 추가 className */
  className?: string;
  /** Radio 클릭 시 트리거 */
  onChange: (selected: RadioOptionType) => void;
};

const Radio: FC<RadioProps> = (props: RadioProps) => {
  /** props - state */
  const { options: initialOptions, className, label } = props;
  /** props - action */
  const { onChange } = props;

  /** useState hook */
  const [options, setoptions] = useState(
    initialOptions.map((option: RadioOptionType) => ({
      ...option,
      checked: option.checked ?? false,
    }))
  );
  /** custom handler */
  const handleChange = (selected: RadioOptionType) => {
    const updatedoptions = options.map((option: RadioOptionType) => ({
      ...option,
      checked: option.value === selected.value,
    }));

    if (!selected.disabled) {
      setoptions(updatedoptions);
      onChange(selected);
    } // 부모로 전달
  };
  /** custom renderer */
  const renderOptions = (option: RadioOptionType) => (
    <div
      key={option.value}
      className='flex gap-x-2 items-center'
      data-checked={option.checked}
      data-disabled={option.disabled}
      role='radio'
      aria-checked={option.checked}
      aria-disabled={option.disabled}
      tabIndex={option.checked ? 0 : -1}
      aria-labelledby={option.value}
      aria-describedby={option.value}
    >
      <input
        id={option.value}
        type='radio'
        name='radio-group'
        checked={option.checked}
        onChange={() => handleChange(option)}
        className='sr-only'
      />
      <HeadlessRadio value={option} disabled={option.disabled} as='div'>
        {option.checked ? (
          option.disabled ? (
            <RadioInActiveSVG aria-hidden='true' /> // 체크 비활성화
          ) : (
            <RadioActiveSVG aria-hidden='true' /> // 체크 활성화
          )
        ) : option.disabled ? (
          <RadioNoneCheckInActiveSVG aria-hidden='true' /> // 논체크 비활성화 (비활성화 상태)
        ) : (
          <RadioNoneCheckActiveSVG aria-hidden='true' /> // 논체크 활성화
        )}
      </HeadlessRadio>
      <label
        htmlFor={option.value}
        id={`label-${option.value}`}
        className={clsx([
          'text-label-regular',
          {
            'text-grayscale-400': option.disabled,
          },
        ])}
      >
        {option.content}
      </label>
    </div>
  );

  return (
    <div className='flex flex-col text-grayscale-900'>
      {label && (
        <label className='text-label-medium text-grayscale-700 inline-block pb-2'>
          {label}
        </label>
      )}
      <RadioGroup
        value={options.find((option: RadioOptionType) => option.checked)}
        onChange={handleChange}
        className={clsx('space-y-2', className)}
        aria-labelledby='radio-group-label'
      >
        {options.map(renderOptions)}
      </RadioGroup>
    </div>
  );
};
export default Radio;
