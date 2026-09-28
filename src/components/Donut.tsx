// Standard packages
import React, { FC } from 'react';

// Third-party packages

// PropTypes
type DonutProps = {
  /** Current fill of the donut */
  value?: number;
  /** Label inside the donut */
  label?: string;
};

const Donut: FC<DonutProps> = (props: DonutProps) => {
  /** props */
  const { value, label } = props;

  return (
    <div className='w-[120px] h-[120px] relative'>
      <svg viewBox='0 0 50 50' className='block mx-auto max-w-80 max-h-80'>
        <circle
          fill='none'
          strokeWidth='10'
          stroke={'#C1DDED'}
          cx='25'
          cy='25'
          r='15.9155'
        />
        <circle
          fill='none'
          strokeWidth='10' // 도넛의 두께
          strokeLinecap='butt'
          strokeDasharray={`${value}, 100`}
          stroke={'#69A3CC'}
          transform='rotate(-90 25 25)' // 중심점 이동에 따른 수정
          cx='25' // 중심점 이동
          cy='25' // 중심점 이동
          r='15.9155'
        />
      </svg>
      <h3 className='text-bodyS-bold absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]'>
        {label && label}
      </h3>
    </div>
  );
};

export default Donut;
