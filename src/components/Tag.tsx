/** Third-party hooks */
import clsx from 'clsx';

/** Custom hooks */
import React, { FC, ReactNode } from 'react';

// PropTypes
type TagProp = {
  /** 아이콘 */
  startAdornment?: ReactNode;
  /** tag 컬러 */
  variant?:
    | 'grayscaleStatus'
    | 'infoStatus'
    | 'processStatus'
    | 'successStatus'
    | 'errorStatus'
    | 'grayscaleAuto'
    | 'successAuto'
    | 'grayscaleInfo'
    | 'primaryInfo'
    | 'secondaryInfo'
    | 'accentInfo'
    | 'personNumber'
    | 'increaseNumber'
    | 'decreaseNumber';
  /** tag text */
  text: string | number;
};

const Tag: FC<TagProp> = (props: TagProp) => {
  /** props - state */
  const { variant = 'grayscaleStatus', text, startAdornment } = props;

  const variantInfo = [
    'accentInfo',
    'primaryInfo',
    'secondaryInfo',
    'grayscaleInfo',
  ].includes(variant);

  const variantNumber = [
    'personNumber',
    'increaseNumber',
    'decreaseNumber',
  ].includes(variant);

  return (
    <div
      className={clsx(
        'inline-flex flex-row items-center gap-0.5 py-1 px-2 rounded h-[25px]',
        {
          'bg-opacity-[20%]': !variantNumber,
          'bg-accent ': variant === 'errorStatus',
          'bg-semantic-info': variant === 'infoStatus',
          'bg-semantic-processing': variant === 'processStatus',
          'bg-grayscale-600':
            variant === 'grayscaleStatus' || variant === 'grayscaleInfo',
          'bg-semantic-success': variant === 'successStatus',
          'bg-primary-300': variant === 'primaryInfo',
          'bg-secondary-300': variant === 'secondaryInfo',
          'bg-accent-300': variant === 'accentInfo',
          'bg-semantic-success border border-semantic-success':
            variant === 'successAuto',
          'bg-grayscale-400 border border-grayscale-400':
            variant === 'grayscaleAuto',
          'bg-grayscale-100': variantNumber,
        },
        {
          'text-semantic-error': variant === 'errorStatus',
          'text-semantic-info': variant === 'infoStatus',
          'text-semantic-processing': variant === 'processStatus',
          'text-semantic-success':
            variant === 'successStatus' || variant === 'successAuto',
          'text-grayscale-600': variant === 'grayscaleStatus',
          'text-grayscale-400': variant === 'grayscaleAuto',
        },
        { 'text-grayscale-900': variantInfo }
      )}
    >
      <div className={clsx(['flex gap-x-1 items-center'])}>
        {startAdornment && (
          <div
            className={clsx([
              {
                'text-grayscale-600':
                  variant === 'grayscaleInfo' || variant === 'personNumber',
                'text-primary-400': variant === 'primaryInfo',
                'text-secondary-400': variant === 'secondaryInfo',
                'text-accent-400': variant === 'accentInfo',
                'text-semantic-success': variant === 'increaseNumber',
                'text-semantic-error': variant === 'decreaseNumber',
              },
            ])}
          >
            {startAdornment}
          </div>
        )}
        <span className={clsx(['text-caption-semibold'])}>{text}</span>
      </div>
    </div>
  );
};

export default Tag;
