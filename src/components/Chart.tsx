/** Standard packages */
import React, { FC } from 'react';

/** Custom packages */
import Tooltip from './Tooltip';

export interface IChart {
  text: string;
  value: number;
}

export type ChartProp = {
  data: any[]; // 그래프 데이터
  valueName: string; // 데이터의 값 키
  labelName: string; // 데이터의 라벨 키
  max: number; // 최대 값
};

const Chart: FC<ChartProp> = (props: ChartProp) => {
  const { data, valueName, labelName, max } = props;

  /** 바 렌더링 함수 */
  const renderBar = (bar: any, index: number) => {
    const height = (bar?.[valueName] * 100) / max; // 높이를 퍼센트로 계산

    return (
      <div
        key={index}
        className='min-w-14 h-full flex flex-col items-center justify-end'
      >
        <div className='relative h-full w-10 '>
          {/* Bar graph */}
          <div
            style={{ height: height + '%' }}
            className='absolute bottom-0 bg-primary-100 hover:bg-primary-300 w-10 h-full rounded-t cursor-pointer'
          >
            {/* Tooltip */}
            <Tooltip position='top' label={bar?.[valueName]}>
              <div className='bg-primary-100 hover:bg-primary-300 w-10 rounded-t cursor-pointer' />
            </Tooltip>
          </div>
        </div>
        {/* 라벨 */}
        <div className='border-t border-grayscale-200 px-5'>
          <div className='mt-2 w-full h-[20px] text-center text-label-semibold text-grayscale-700'>
            {bar?.[labelName]}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='flex w-full h-64 p-4 bg-white rounded'>
      {data?.map(renderBar)}
    </div>
  );
};

export default Chart;
