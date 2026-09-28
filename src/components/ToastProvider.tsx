'use client';

// Standard packages
import React, { FC } from 'react';

// Third-party packages
import clsx from 'clsx';
import { Toaster, toast } from 'sonner';

// Custom packages
import { CheckIcon, ErrorIcon, InformationIcon, WarningIcon } from '../icons';
import Button from './Button';

export const showCustomToast = ({
  message,
  type,
  showButton = false, // 기본값 false
}: {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  showButton?: boolean;
}) => {
  toast.custom(id => (
    <div
      className={clsx([
        'px-4 h-12 rounded shadow-lg flex items-center justify-between gap-2 text-white text-label-medium w-[320px]',
        {
          'bg-semantic-success': type === 'success',
          'bg-semantic-error': type === 'error',
          'bg-semantic-info': type === 'info',
          'bg-semantic-processing': type === 'warning',
        },
      ])}
      onClick={() => toast.dismiss(id)}
    >
      <div className='flex items-center gap-2'>
        {type === 'success' ? (
          <CheckIcon className='w-5 h-5 text-white' />
        ) : type === 'error' ? (
          <ErrorIcon className='w-5 h-5 text-white' />
        ) : type === 'info' ? (
          <InformationIcon className='w-5 h-5 text-white' />
        ) : type === 'warning' ? (
          <WarningIcon className='w-5 h-5 text-white' />
        ) : null}
        <span>{message}</span>
      </div>
      <Button
        className={clsx({
          hidden: !showButton,
        })}
        variant='white-text'
        onClick={() => toast.dismiss(id)}
        label='button'
      />
    </div>
  ));
};
export const ToastProvider: FC = () => {
  return <Toaster duration={2000} richColors position='top-center' />;
};

export default ToastProvider;
