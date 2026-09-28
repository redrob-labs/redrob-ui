import React from 'react';
import StatCard from './StatCard';

type DonutChartData = {
  label: string;
  value: any;
};

type DonutChartProps = {
  data: DonutChartData[];
  colors: string[];
  totalValue?: number; // 전체 값 (기본값: 100)
  radius?: number; // 도넛 반지름
  strokeWidth?: number; // 도넛 두께
  value?: string;
};

const DonutChart: React.FC<DonutChartProps> = ({
  data,
  colors,
  totalValue = 100,
  radius = 60, // 도넛 반지름 (120 = 2 * radius)
  strokeWidth = 20, // 도넛 두께
  value,
}) => {
  const dataSum = data.reduce((sum, item) => sum + item.value, 0); // 데이터 합계
  const remainingValue = Math.max(totalValue - dataSum, 0); // 남은 값
  const center = radius + strokeWidth / 2; // SVG 중심 좌표
  const circumference = 2 * Math.PI * radius;

  let cumulativePercentage = 0; // 누적 퍼센트 계산

  const renderData = (item: any, index: number) => {
    const percentage = item.value / totalValue;
    const dashArray = percentage * circumference;
    const dashOffset = cumulativePercentage * circumference;
    cumulativePercentage += percentage;

    return (
      <circle
        key={item.label}
        cx={center}
        cy={center}
        r={radius}
        fill='none'
        stroke={colors[index % colors.length]}
        strokeWidth={strokeWidth}
        strokeDasharray={`${dashArray} ${circumference - dashArray}`}
        strokeDashoffset={-dashOffset}
        strokeLinecap='butt'
      />
    );
  };
  const renderAnnotation = (item: any, index: number) => (
    <div key={item.label} className='flex justify-between items-center'>
      <div className='flex items-center gap-x-2'>
        <div
          className='w-2 h-2 rounded bg-grayscale-200'
          style={{
            backgroundColor: colors[index % colors.length],
          }}
        />
        <span className='text-caption-medium'>{item.label}</span>
      </div>
      <span className='text-label-semibold'>
        {((item.value / totalValue) * 100).toFixed(1)}
      </span>
    </div>
  );
  return (
    <div>
      <div className='flex items-center gap-x-10 w-full'>
        {/* Donut chart */}
        <div className='relative'>
          <svg
            className='shrink-0'
            width={120}
            height={120}
            viewBox={`0 0 ${center * 2} ${center * 2}`}
          >
            <circle
              cx={center}
              cy={center}
              r={radius}
              fill='none'
              stroke='#e0e0e0'
              strokeWidth={strokeWidth}
            />
            {data.map(renderData)}
            {remainingValue > 0 && (
              <circle
                cx={center}
                cy={center}
                r={radius}
                fill='none'
                stroke='#e0e0e0'
                strokeWidth={strokeWidth}
                strokeDasharray={`${
                  (remainingValue / totalValue) * circumference
                } ${circumference}`}
                strokeDashoffset={-cumulativePercentage * circumference}
                strokeLinecap='butt'
              />
            )}
          </svg>
          <span className='text-label-semibold absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%]'>
            {value}
          </span>
        </div>
        {/* 주석 섹션 */}
        <div className='flex flex-col gap-y-[11px] w-full'>
          {data.map(renderAnnotation)}
        </div>
      </div>
      <div className='pt-4'>
        <StatCard datas={data} />
      </div>
    </div>
  );
};

export default DonutChart;
