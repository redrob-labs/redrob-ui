// Standard packages
import React, { FC, ReactElement } from 'react';

// Third-party packages
import clsx from 'clsx';

// PropTypes
export type EmptyStateProps = {
  /** image */
  image?: ReactElement;
  /** title */
  title: string;
  titleVariant?: 'body' | 'h3';
  /** content */
  content?: string;
  /** button */
  button?: ReactElement;
};

export const EmptyState: FC<EmptyStateProps> = (props: EmptyStateProps) => {
  /** props - state */
  const { image, title, content, button, titleVariant = 'body' } = props;

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      {image && <div className='py-[17.87px] px-[21.33px]'>{image}</div>}

      {title && (
        <h3
          className={clsx([
            'text-grayscale-900',
            {
              'text-body-bold pt-2': titleVariant === 'body',
              'text-h3-bold pt-4': titleVariant === 'h3',
            },
          ])}
        >
          {title}
        </h3>
      )}
      {content && (
        <p className={clsx(['text-label-regular text-grayscale-600 pt-2'])}>
          {content}
        </p>
      )}
      {button && <div className='pt-6'>{button}</div>}
    </div>
  );
};
export default EmptyState;
