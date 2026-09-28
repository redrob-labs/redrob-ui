'use client';

// Standard packages
import React, { FC, ReactElement } from 'react';

// Third-party packages
import {
  DialogBackdrop,
  DialogPanel,
  Dialog as HeadlessDialog,
} from '@headlessui/react';
import clsx from 'clsx';

// Custom package
import { ResetIcon, XIcon } from '../icons';
import Button from './Button';
import Container, { ContainerProps } from './Container';
import IconButton from './IconButton';
import Loader from './Loader';
// PropTypes
export type DialogProps = {
  /** Dialog is open when true */
  open: boolean;
  /** Alignment of bottom action buttons (default | right | vertical) */
  alignActions?: 'default' | 'right' | 'vertical';
  /** Dialog children */
  children?: ReactElement;
  /** If `true`, remove padding from the sides */
  disableGutters?: boolean;
  /** If `true` the confirm button is disabled */
  disableConfirm?: boolean;
  /** If `true` the destroy button is disabled */
  disableDestroy?: boolean;
  /** Max-width of the modal container */
  maxWidth?: ContainerProps['maxWidth'];
  /** If present, display a modal header */
  title?: string;
  /** Display close icon when true */
  closeIcon?: boolean;
  /** Callback triggered when the modal is closing */
  onClose?: () => void;
  /** Callback triggered when the cancel action is clicked */
  onCancel?: () => void;
  /** Callback triggered when the confirm action is clicked */
  onConfirm?: () => void;
  /** Callback triggered when the destroy action is clicked */
  onDestroy?: () => void;
  /** Callback triggered when the reset action is clicked */
  onReset?: () => void;
  /** Label displayed on the cancel action */
  labelCancel?: string;
  /** Label displayed on the confirm action */
  labelConfirm?: string;
  /** Label displayed on the destroy action */
  labelDestroy?: string;
  /** Label displayed on the later action */
  labelLater?: string;
  /** If `true`, display a loading spinner */
  loadingConfirm?: boolean;
  /** If `true`, display a loading spinner */
  loadingDestroy?: boolean;
  /** Overflow of the dialog */
  overflow?: 'auto' | 'hidden' | 'visible';
};

const Dialog: FC<DialogProps> = (props: DialogProps) => {
  /** props - state */
  const {
    open,
    alignActions = 'default',
    children,
    disableGutters,
    disableConfirm,
    disableDestroy,
    maxWidth = 'modal',
    title,
    labelCancel = 'Cancel',
    labelConfirm = 'Confirm',
    labelDestroy = 'Delete',
    closeIcon = false,
    labelLater,
    overflow = 'auto',
  } = props;

  /** props - action */
  const { onClose, onCancel, onConfirm, onDestroy, onReset } = props;

  /** Event handlers */
  const handleClose = () => onClose && onClose();
  const handleCancel = () => onCancel && onCancel();
  const handleConfirm = () => onConfirm && onConfirm();
  const handleDestroy = () => onDestroy && onDestroy();
  const handleReset = () => onReset && onReset();

  // Early return if dialog is not open
  if (!open) return null;

  // Check if action buttons are present
  const hasActions = onCancel || onConfirm || onDestroy || onReset;

  return (
    <HeadlessDialog
      open={open}
      onClose={handleClose}
      className='relative text-grayscale-900 z-50'
    >
      {/* Overlay */}
      <DialogBackdrop
        transition
        aria-hidden='true'
        className='fixed inset-0 bg-grayscale-800 bg-opacity-56 duration-300 ease-out data-[closed]:opacity-0'
      />
      <Container
        maxWidth={maxWidth}
        className='fixed inset-0 flex items-center justify-center p-4'
      >
        <DialogPanel
          className={clsx('w-full', {
            'overflow-visible': overflow === 'visible',
          })}
        >
          <div className='bg-white rounded-2xl max-h-[90vh] shadow-lg flex flex-col'>
            {/* Header section */}
            {title && (
              <div className='flex items-center shrink-0 p-6 pb-4 sticky top-0 left-0 z-10'>
                <h4 className='text-h4-bold text-grayscale-900 truncate flex-1'>
                  {title}
                </h4>
                {closeIcon && (
                  <IconButton
                    adornment={<XIcon />}
                    size='large'
                    name='close'
                    onClick={handleClose}
                  />
                )}
              </div>
            )}

            {/* Content section */}
            <div
              className={clsx('rounded-2xl', {
                'flex-1 px-6 pb-6': !disableGutters && !hasActions,
                'flex-1 px-6 pb-4': !disableGutters && hasActions,
                'overflow-auto': overflow === 'auto',
                'overflow-hidden': overflow === 'hidden',
                'overflow-visible': overflow === 'visible',
              })}
            >
              {children}
            </div>

            {/* Action buttons section */}
            <div
              className={clsx('sticky justify-end gap-6 bottom-0 p-6 flex', {
                'flex-col': alignActions === 'vertical',
                'justify-end items-center': alignActions === 'right',
                'justify-start': alignActions === 'default',
                '!pt-0 !pb-0': !hasActions,
              })}
            >
              {/* Reset button */}
              {onReset && (
                <div className='flex'>
                  <Button
                    variant='grayscale-text'
                    size='medium'
                    onClick={handleReset}
                    adornment={<ResetIcon />}
                    label='Reset'
                    adornmentPosition='start'
                  />
                </div>
              )}

              {/* Cancel button */}
              <div
                className={clsx('flex flex-1 justify-end gap-4', {
                  'flex-col-reverse': alignActions === 'vertical',
                  'items-center': alignActions !== 'vertical',
                })}
              >
                {onCancel && (
                  <Button
                    label={labelCancel || 'Cancel'}
                    variant='grayscale-text'
                    size='medium'
                    onClick={handleCancel}
                  />
                )}

                {/* Confirm button */}
                {onConfirm && (
                  <Button
                    label={labelConfirm || 'Confirm'}
                    size='medium'
                    onClick={handleConfirm}
                    disabled={disableConfirm || props.loadingConfirm}
                    adornment={props.loadingConfirm ? <Loader /> : undefined}
                    adornmentPosition={
                      props.loadingConfirm ? 'start' : undefined
                    }
                  />
                )}

                {/* Destroy button */}
                {onDestroy && (
                  <Button
                    label={labelDestroy || 'Delete'}
                    variant='destructive-fill'
                    size='medium'
                    onClick={handleDestroy}
                    disabled={disableDestroy || props.loadingDestroy}
                    adornment={props.loadingDestroy ? <Loader /> : undefined}
                    adornmentPosition={
                      props.loadingDestroy ? 'start' : undefined
                    }
                  />
                )}
              </div>
            </div>

            {/* Later action button */}
            {labelLater && (
              <div className='p-6 pt-0'>
                <Button
                  label={labelLater}
                  className='w-full'
                  variant='grayscale-text'
                  size='medium'
                  onClick={handleClose}
                />
              </div>
            )}
          </div>
        </DialogPanel>
      </Container>
    </HeadlessDialog>
  );
};

export default Dialog;
