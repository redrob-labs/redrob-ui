// Standard packages
import React, { FC } from 'react';

// Custom packages
import { FileIcon, XIcon } from '../icons';
import Avatar from './Avatar';
import IconButton from './IconButton';

// PropTypes
export type UploadItemProps = {
  /** file name */
  fileName?: string;
  /** file extension */
  extension?: string;
  /** file size */
  fileSize?: string;
  /** Trigger when remove file */
  onRemoveFile?: (index: number) => void;
  /** file array index */
  index?: number;
};

const UploadItem: FC<UploadItemProps> = (props: UploadItemProps) => {
  /** props - state */
  const { fileName, extension, fileSize = 0, index = 0 } = props;
  /** props - action */
  const { onRemoveFile } = props;
  /** custom handler */
  const handleRemoveFile = () => index && onRemoveFile && onRemoveFile(index);
  return (
    <div className='flex items-center flex-row p-xs border border-grayscale-300 bg-white rounded h-18 mb-2'>
      <div className='flex items-center m-4 bg-white w-full justify-between'>
        <div className='flex items-center gap-x-2'>
          <Avatar size='large' variant={'gray-icon'} icon={<FileIcon />} />
          <div className='space-y-1'>
            <p className='text-label-semibold mb-1'>{fileName}</p>
            <p className='text-caption-regular text-grayscale-600'>
              {extension}
              &nbsp;|&nbsp;
              {fileSize}MB
            </p>
          </div>
        </div>
        <IconButton
          adornment={<XIcon />}
          name='close'
          onClick={handleRemoveFile}
        />
      </div>
    </div>
  );
};

export default UploadItem;
