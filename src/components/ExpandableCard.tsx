// Standard packages
import React, { FC, ReactNode, useState } from 'react';
// Third-party packages
import clsx from 'clsx';
// Custom packages
import Button from './Button';
import Card from './Card';

// PropTypes
export type ExpandableCardProps = {
  /** Card title */
  title?: string;
  /** Card children */
  children: ReactNode;
};

export const ExpandableCard: FC<ExpandableCardProps> = (
  props: ExpandableCardProps
) => {
  const { title, children } = props;

  // State to manage visibility of content
  const [isContentVisible, setIsContentVisible] = useState(false);

  // Toggle content visibility
  const toggleContent = () => {
    setIsContentVisible(prev => !prev);
  };

  return (
    <Card elevation={false} background='gray' className='text-caption-regular'>
      <div>
        {/* Header */}
        <div className='flex justify-between items-center'>
          <label className='text-label-semibold'>{title}</label>
          <Button
            variant='primary-text'
            label='Button'
            disabled={isContentVisible}
            onClick={toggleContent}
          />
        </div>

        {/* Expandable content */}
        <div
          id='content'
          className={clsx([
            'transition-all duration-300 ease-in-out overflow-hidden',
            {
              'max-h-0 opacity-0': !isContentVisible,
              'max-h-screen opacity-100': isContentVisible,
            },
          ])}
          style={{
            transition: 'max-height 0.3s ease, opacity 0.3s ease',
          }}
        >
          <div className='rounded pt-2'>{children}</div>
        </div>
      </div>
    </Card>
  );
};

export default ExpandableCard;
