'use client';

// Standard packages
import React, { FC } from 'react';

// Third-party packages
import { Switch as HeadlessSwitch } from '@headlessui/react';
import clsx from 'clsx';

/** PropTypes */
export interface SwitchProps {
  /** If `true`, the component is filled with color. */
  checked: boolean;
  /** Callback triggered when the state is changed */
  onChange?: (newValue: boolean) => void;
  /** If `true`, the component is disabled. */
  disabled?: boolean;
}

const Switch: FC<SwitchProps> = (props: SwitchProps) => {
  /** props - state */
  const { checked, disabled = false } = props;

  /** props - action */
  const { onChange } = props;

  return (
    <HeadlessSwitch
      as='button'
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      data-checked={checked}
      data-disabled={disabled}
      aria-checked={checked}
      aria-disabled={disabled}
      className={clsx([
        'group relative inline-flex h-6 w-[44px] items-center rounded-full',
        { 'bg-semantic-success': checked },
        { 'bg-grayscale-400': !checked },
        { 'cursor-not-allowed opacity-50': disabled },
      ])}
    >
      <span className='sr-only'>Toggle switch</span>
      <span
        className={clsx([
          'absolute top-[4px] h-4 w-4 rounded-full bg-[#fafafa] transition',
          {
            'translate-x-[23px]': checked,
            'translate-x-[4px]': !checked,
          },
        ])}
        aria-hidden='true' // 이동하는 핸들을 보조기술에서 숨김
      />
    </HeadlessSwitch>
  );
};

export default Switch;
