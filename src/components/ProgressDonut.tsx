// Standard packages
import React, { FC } from 'react';

// PropType
export type ProgressDonutProps = {
  /** progress percent (0~100%) */
  progress: number;
  /** total number */
  total: number;
  /** label */
  label?: string;
};

const ProgressDonut: FC<ProgressDonutProps> = (props: ProgressDonutProps) => {
  const { progress, total, label } = props;
  const radius = 12; // 원의 반지름
  const circumference = 2 * Math.PI * radius; // 원의 둘레
  const normalizedProgress = (progress / total) * 100; // 퍼센트로 변환
  const dashOffset = circumference - (normalizedProgress / 100) * circumference;

  return (
    <div>
      <svg
        width='30'
        height='30'
        viewBox='0 0 30 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        {/* 배경 원 */}
        <circle cx='15' cy='15' r={radius} stroke='#ECEFF2' strokeWidth='4.8' />
        {/* 진행 원 */}
        <circle
          cx='15'
          cy='15'
          r={radius}
          stroke='#217BBB'
          strokeWidth='4.8'
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          transform='rotate(-90 15 15)' // 시작 지점을 12시로 이동
        />
      </svg>
      {label && (
        <label className='text-caption-medium text-grayscale-700'>
          {label}
        </label>
      )}
    </div>
  );
};

export default ProgressDonut;
