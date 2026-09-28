'use client';

// Standard packages
import { Input, Textarea } from '@headlessui/react';
import clsx from 'clsx';
import React, {
  ChangeEvent,
  FC,
  KeyboardEvent,
  ReactNode,
  useRef,
  useState,
} from 'react';
import { ErrorIcon } from '../icons';
import IconButton from './IconButton';

// PropTypes
type TextFieldProps = {
  /** textfield label */
  label?: string;
  /** textfield value */
  value?: string;
  /** textfield placeholder */
  placeholder?: string;
  /** textfield disabled */
  disabled?: boolean;
  /** textfield classname */
  className?: string;

  /** outline */
  outline?: boolean;
  /** auto focus */
  autoFocus?: boolean;
  /** end adornment */
  endAdornment?: ReactNode;
  /** info tooltip */
  labelIcon?: ReactNode;
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
  variant?: 'rounded' | 'circle' | 'rounded-lg';
  /** Trigger textfield value change */
  onChange?: (value: string) => void;
  /** Trigger press key enter */
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  /** error message */
  errorMsg?: string;
  /** helper message */
  helperMsg?: string;
  /** Trigger when click end adornment */
  onClickEnd?: (e: React.MouseEvent<HTMLElement>) => void;
  /** id for Input element. to be associated with label */
  id?: string;
  /** whether textarea should resize when we type or not */
  shouldResizeOnType?: boolean;
  /** If required `true`, show the text */
  required?: boolean;
  /** If required `true`, show the text */
  requiredText?: string;
};

const TextField: FC<TextFieldProps> = (props: TextFieldProps) => {
  /** props - state */
  const {
    label,
    value,
    placeholder = 'Enter your text',
    disabled = false,
    className,
    outline = true,
    autoFocus = false,
    endAdornment,
    labelIcon,
    type = 'text',
    size = 'small',
    variant = 'rounded-lg',
    min,
    max,
    errorMsg,
    helperMsg,
    id,
    shouldResizeOnType = true,
    required,
    requiredText = 'This is required field',
  } = props;
  /** props - action  */
  const { onChange, onKeyDown, onClickEnd } = props;
  /** useState hook */
  const [focused, setFocused] = useState(false);

  /** useRef hooks */
  const textareaRef = useRef(null);
  /** clsx */
  const rootClasses = clsx(
    'relative flex flex-col',
    'min-w-[150px]',
    {
      'text-h2-bold': type === 'currency',
    },
    className
  );

  const inputClasses = clsx(
    'w-full focus:outline-none px-4 py-[11px]',
    {
      border: outline,
      'min-h-[42px] h-[42px]': !outline,
      'pr-8': endAdornment,
      'pl-10': type === 'currency',
    },
    {
      rounded: variant === 'rounded',
      'rounded-lg': variant === 'rounded-lg',
      'rounded-full': variant === 'circle',
    },
    {
      'h-11': size === 'small',
      'h-14': size === 'medium',
      'max-h-[292px] min-h-11 resize-none': size === 'large',
    },
    {
      'border-grayscale-300': !focused && !errorMsg,
      'border-grayscale-900': focused && !errorMsg,
      'border-semantic-error': errorMsg,

      'cursor-not-allowed bg-grayscale-200 border-grayscale-200 text-grayscale-500':
        disabled,
    },
    {
      '!border-semantic-error': required,
    }
  );
  const textAreaClasses = clsx(
    'w-full focus:outline-none px-4 py-[11px] border min-h-[200px]',
    {
      'pr-8': endAdornment,
    },
    {
      rounded: variant === 'rounded',
      'rounded-lg': variant === 'rounded-lg',
      'rounded-full': variant === 'circle',
    },
    {
      'border-grayscale-300': !focused && !errorMsg,
      'border-grayscale-900': focused && !errorMsg,
      'border-semantic-error': errorMsg,
      'cursor-not-allowed bg-grayscale-200 border-grayscale-200 text-grayscale-500':
        disabled,
    }
  );
  /** custom handler */
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const inputValue = e.target.value;
    if (type === 'number') {
      // 숫자만 허용
      if (/^\d*$/.test(inputValue)) {
        onChange && onChange(inputValue);
      }
    } else {
      onChange && onChange(inputValue);
    }
  };

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target;
    onChange && onChange(target.value);
    if (shouldResizeOnType) {
      target.style.height = 'auto';
      target.style.height = target.scrollHeight + 'px';
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      onKeyDown && onKeyDown(e);
    }
  };
  const handleClickEnd = (e: React.MouseEvent<HTMLElement>) =>
    onClickEnd && onClickEnd(e);

  return (
    <div
      className={rootClasses}
      data-disabled={disabled}
      data-error={!!errorMsg}
      data-focused={focused}
    >
      {label && (
        <div className='flex gap-x-2 items-center pb-2'>
          {label && (
            <label className='text-label-medium text-grayscale-700'>
              {label}
            </label>
          )}
          {labelIcon}
        </div>
      )}
      <div className='relative'>
        {type === 'currency' && (
          <div
            className={clsx(
              'absolute top-1/2 left-4 transform -translate-y-1/2 select-none flex items-center'
            )}
          >
            $
          </div>
        )}
        {type === 'textarea' ? (
          <Textarea
            as='textarea'
            value={value}
            id={id}
            ref={textareaRef}
            style={{
              resize: 'vertical',
            }}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            autoFocus={autoFocus}
            minLength={min}
            maxLength={max}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={handleTextAreaChange}
            className={textAreaClasses}
            data-focused={focused}
            data-disabled={disabled}
            data-error={!!errorMsg}
            aria-invalid={!!errorMsg}
            aria-describedby={errorMsg ? 'error' : undefined}
          />
        ) : (
          <Input
            as='input'
            value={value}
            id={id}
            type={type === 'currency' ? 'number' : type}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            autoFocus={autoFocus}
            minLength={min}
            maxLength={max}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className={inputClasses}
            data-focused={focused}
            data-disabled={disabled}
            data-error={!!errorMsg}
            aria-invalid={!!errorMsg}
            aria-describedby={errorMsg ? 'error' : undefined}
            size={2}
          />
        )}
        {endAdornment && (
          <div
            className={clsx([
              'absolute top-1/2 right-1 transform -translate-y-1/2 select-none flex items-center',
            ])}
          >
            <IconButton
              adornment={endAdornment}
              onClick={handleClickEnd}
              name='icon'
              className='rounded-lg'
              disabled={disabled}
            />
          </div>
        )}
      </div>
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
      </div>{' '}
      {required && (
        <div className='flex gap-x-1 pt-2'>
          <ErrorIcon className='w-4 h-4 text-semantic-error' />

          <span className='text-caption-regular text-semantic-error'>
            {requiredText}
          </span>
        </div>
      )}
    </div>
  );
};

export default TextField;
