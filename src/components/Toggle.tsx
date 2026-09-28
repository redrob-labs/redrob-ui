'use client';

// Standard packages
import React, { FC, ReactElement } from 'react';

// Third-party packages
import { Switch as HeadlessSwitch } from '@headlessui/react';
import clsx from 'clsx';

// PropTypes
export interface ToggleProps {
  /** If `true`, the component is filled with color. */
  checked: boolean;
  /** If `true`, the toggle is disabled. */
  disabled?: boolean;
  /** Callback triggered when the state is changed */
  onChange?: (newValue: boolean) => void;
  /** Toggle labels */
  labels: [ReactElement, ReactElement];
  /** Toggle images */
  images: [ReactElement, ReactElement];
}

const Toggle: FC<ToggleProps> = (props: ToggleProps) => {
  /** props - state */
  const { checked, disabled = false, labels, images } = props;
  /** props - action */
  const { onChange } = props;
  /** consts - clsx */
  const containerClasses = clsx(
    'w-fit text-grayscale-400 h-9 px-1 rounded bg-grayscale-200 flex gap-x-1 items-center'
  );

  const switchClasses = clsx(
    'absolute top-1/2 -translate-y-1/2 rounded bg-white flex justify-center items-center transition-all duration-200',
    {
      'left-[calc(50%-14px)]': checked,
      'left-[4px]': !checked,
    }
  );

  /** custom handlers */
  const handleChange = () => {
    if (!disabled && onChange) onChange(!checked);
  };

  /** custom renderer */
  const renderLabel = (index: number, isActive: boolean) => (
    <span
      className={clsx('text-center px-2 py-1', {
        'opacity-50': !isActive,
        'opacity-100': isActive,
      })}
    >
      <div className={clsx(['flex gap-x-1 items-center justify-center'])}>
        <div
          className={clsx('w-4 h-4 transition-all duration-0 ease-in-out', {
            'opacity-0 scale-90 hidden': !isActive,
            'opacity-100 scale-100': isActive,
          })}
        >
          {images[index]}
        </div>

        <span>{labels[index]}</span>
      </div>
    </span>
  );

  return (
    <HeadlessSwitch
      checked={checked}
      onChange={handleChange}
      disabled={disabled}
      className='relative border-inherit text-label-medium'
      data-checked={checked}
      data-disabled={disabled}
      aria-checked={checked}
      aria-disabled={disabled}
      aria-labelledby='toggle-label'
    >
      <div className={containerClasses}>
        {renderLabel(0, !checked)}
        {renderLabel(1, checked)}
      </div>
      {/* Moving tab */}
      <span className={switchClasses} aria-hidden='true'>
        {renderLabel(checked ? 1 : 0, true)}
      </span>
    </HeadlessSwitch>
  );
};

export default Toggle;
