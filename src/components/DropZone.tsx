// Standard packages
import React, { ChangeEvent, DragEvent, FC } from 'react';
// Custom packages
import { UploadIcon } from '../icons';
import { showCustomToast } from './ToastProvider';

// PropTypes
type DropZoneProp = {
  /** Trigger when add file */
  onFile: (nextFiles: File[]) => void;
  /** file extension */
  fileExtension: (fileName: string) => string | undefined;
  /** allowed file extensions */
  allowedExtensions: string;
  /** maximum file size */
  maxFileSize: number;
};

const DropZone: FC<DropZoneProp> = props => {
  /** props - state */
  const { allowedExtensions, maxFileSize } = props;

  /** props - action */
  const { onFile, fileExtension } = props;

  /** custom handler */
  const onAddFile = () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  };

  const onInputClick = (event: any) => {
    event.target.value = '';
  };

  const handleDragOver = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragLeave = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const validateFile = (file: File) => {
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > maxFileSize) {
      showCustomToast({
        message: `파일이 너무 큽니다. 최대 ${maxFileSize}MB 크기의 파일만 업로드 가능합니다.`,
        type: 'warning',
      });
      return false;
    }

    return true;
  };
  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const targetFiles = e.target.files;
    if (!targetFiles) return;

    const validFiles = Array.from(targetFiles).filter(validateFile);

    onFile(validFiles);
  };
  const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const droppedFiles = e.dataTransfer.files;
    if (!droppedFiles) return;

    const validFiles = Array.from(droppedFiles).filter(validateFile);
    onFile(validFiles);
  };
  return (
    <>
      <label
        className='select-none cursor-pointer'
        onClick={onAddFile}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <div className='rounded-dashed bg-white p-4 min-h-[132px] flex flex-col gap-y-2 justify-center items-center'>
          <div className='flex items-center gap-x-2'>
            <UploadIcon className='w-7 h-7 text-grayscale-600' />
            <p className='text-buttonL-semibold text-grayscale-600'>
              Upload File
            </p>
          </div>
          <p className='text-label-regular text-grayscale-500 text-center'>
            Supports{' '}
            {allowedExtensions
              .split(',')
              .map(ext => ext.replace('.', '').toUpperCase())
              .join(', ')}{' '}
            with maximum size of {maxFileSize}MB
          </p>
        </div>
      </label>
      <input
        type='file'
        id='fileInput'
        style={{ display: 'none' }}
        accept={allowedExtensions}
        multiple
        onChange={handleFileSelect}
        onClick={onInputClick}
      />
    </>
  );
};

export default DropZone;
