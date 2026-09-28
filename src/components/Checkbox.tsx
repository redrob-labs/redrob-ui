'use client';

// Standard packages
import React, { FC, MouseEvent, ReactElement } from 'react';
// Third-party packages
import { Checkbox as HeadlessCheckbox } from '@headlessui/react';
import clsx from 'clsx';
// Custom packages
import { CheckboxActiveSVG } from '../assets/CheckboxActiveSVG';
import { CheckboxInActiveSVG } from '../assets/CheckboxInActiveSVG';

import { CheckboxIntermediateActiveSVG } from '../assets/CheckboxIntermediateActiveSVG';
import { CheckboxIntermediateInActiveSVG } from '../assets/CheckboxIntermediateInActiveSVG';
import { CheckboxNoneCheckActiveSVG } from '../assets/CheckboxNoneCheckActiveSVG';
import { CheckboxNoneCheckInActiveSVG } from '../assets/CheckboxNoneCheckInActiveSVG';

// PropTypes
type CheckboxProps = {
  /** 추가 className */
  className?: string;
  /** 체크박스 비활성화 여부 */
  disabled?: boolean;
  /** 체크박스 이름 */
  name?: string;
  /** 체크박스 체크 유무 */
  checked?: boolean;
  /** label */
  value: string;
  /** intermediate checked */
  checkedIntermediate?: boolean;

  /** 체크박스 클릭시 트리거 */
  onChange?: (
    checked: boolean,
    meta?: { value?: string; content?: ReactElement }
  ) => void;

  onClick?: (event: MouseEvent<HTMLLabelElement>) => void;
  content?: ReactElement;
};

const Checkbox: FC<CheckboxProps> = (props: CheckboxProps) => {
  // props - state
  const {
    className,
    disabled = false,
    checked = false,
    checkedIntermediate = false,
    name,
    value,
    content,
    onClick,
  } = props;

  // props - action
  const { onChange } = props;

  // Custom handler
  const handleChange = (checked: boolean) => {
    onChange && onChange(checked, { value, content });
  };

  return (
    <HeadlessCheckbox
      checked={checked}
      onClick={onClick}
      onChange={handleChange}
      className={`relative flex items-center ${className}`}
      as='label'
    >
      <label
        role='checkbox'
        tabIndex={0}
        aria-label={name}
        aria-checked={checked}
        aria-disabled={disabled}
        data-checked={checked}
        data-disabled={disabled}
        className='flex gap-x-2 items-center'
      >
        <input
          id={name}
          type='checkbox'
          name={name}
          checked={checked}
          onChange={e => handleChange(e.target.checked)}
          className='sr-only' // 화면에서 숨김
        />

        {checkedIntermediate ? (
          disabled ? (
            <CheckboxIntermediateInActiveSVG aria-hidden='true' /> // 체크 비활성화
          ) : (
            <CheckboxIntermediateActiveSVG aria-hidden='true' /> // 체크 활성화
          )
        ) : checked ? (
          disabled ? (
            <CheckboxInActiveSVG aria-hidden='true' /> // 체크 비활성화
          ) : (
            <CheckboxActiveSVG aria-hidden='true' /> // 체크 활성화
          )
        ) : disabled ? (
          <CheckboxNoneCheckInActiveSVG aria-hidden='true' /> // 논체크 비활성화
        ) : (
          <CheckboxNoneCheckActiveSVG aria-hidden='true' /> // 논체크 활성화
        )}
        <div
          className={clsx([
            {
              'text-grayscale-400': disabled,
            },
          ])}
        >
          {content}
        </div>
      </label>
    </HeadlessCheckbox>
  );
};

export default Checkbox;
