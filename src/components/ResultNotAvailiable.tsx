'use client';

// Standard packages
import React, { FC } from 'react';

// Third-party packages

// Custom packages
import { ResultNotAvailiableSVG } from '../assets/ResultNotAvailiableSVG';

// PropTypes
type ResultNotAvailableProps = {
  title?: string;
  content1?: string;
  content2?: string;
};

const ResultNotAvailiable: FC<ResultNotAvailableProps> = (
  props: ResultNotAvailableProps
) => {
  /** props - states */
  const { title, content1, content2 } = props;

  /** third-party hook */

  return (
    <div className='w-full bg-white flex flex-col items-center text-bodyL-medium py-[120px]'>
      <ResultNotAvailiableSVG />
      <div className='pt-6'>
        <h4 className='pb-2 text-h4-bold text-grayscale-900 text-center'>
          {title ? title : '아직 응시자가 없어요'}
        </h4>
        <div className='text-center'>
          <p className='text-bodyS-regular'>
            {content1 ? content1 : '시험 링크를 응시자에게 공유하고'}
          </p>
          <p className='text-bodyS-regular'>
            {content2 ? content2 : '결과를 한눈에 확인해 보세요.'}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ResultNotAvailiable;
