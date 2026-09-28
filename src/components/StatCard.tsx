// Standard packages
import React, { FC, ReactElement } from 'react';

// Third-party packages
import clsx from 'clsx';

// Custom packages
import Card from './Card';

// PropTypes
export type StatCardProps = {
  /** Card title */
  title?: string;
  /** Card subtitle */
  subTitle?: string;
  /** end adornment */
  endAdornment?: ReactElement;
  /** data */
  datas: { label: string; value: any }[];
};

export const StatCard: FC<StatCardProps> = (props: StatCardProps) => {
  const { title, subTitle, endAdornment, datas } = props;

  const renderStatus = (
    data: { label: string; value: string },
    index: number
  ) => (
    <div
      key={data?.label + index}
      className={clsx([
        'min-w-[147px]',
        {
          'border-0': index === 0,
          'border-l border-grayscale-200 pl-4': index > 0,
        },
      ])}
    >
      <label className='text-caption-medium text-grayscale-700'>
        {data.label}
      </label>
      <h3 className='text-h3-bold pt-1'>{data.value}</h3>
    </div>
  );
  return (
    <Card outline elevation={false} className='text-caption-regular'>
      <div>
        <div className='flex justify-between items-center'>
          <label
            className={clsx([
              {
                hidden: !title,
              },
              'text-body-bold',
            ])}
          >
            {title}
          </label>
          {endAdornment}
        </div>
        <p
          className={clsx([
            {
              hidden: !subTitle,
            },
            'pt-1 pb-4 text-caption-regular text-grayscale-600',
          ])}
        >
          {subTitle}
        </p>
        <div className='flex'>{datas?.map(renderStatus)}</div>
      </div>
    </Card>
  );
};

export default StatCard;
