// Standard packages
import React, { FC } from 'react';
// Third-party packages
import clsx from 'clsx';
// Custom packages
import { ArrowLeftIcon } from '../icons/ArrowLeftIcon';
import { ArrowRightIcon } from '../icons/ArrowRightIcon';
import IconButton from './IconButton';
// PropTypes
type PaginationProps = {
  /** page 변환 트리거 */
  onChangePage?: (page: number) => void;
  /** 현재 페이지 */
  currentPage: number;
  /** 전체 페이지 */
  totalPage: number;
};

const Pagination: FC<PaginationProps> = (props: PaginationProps) => {
  /** props - state */
  const { currentPage, totalPage } = props;
  /** props - aciton */
  const { onChangePage } = props;

  /** custom handler */
  const handleChangePrev = () => {
    if (typeof currentPage === 'number' && currentPage > 1 && onChangePage)
      onChangePage(currentPage - 1);
  };

  const handleChangeNext = () => {
    if (
      typeof currentPage === 'number' &&
      currentPage < totalPage &&
      onChangePage
    )
      onChangePage(currentPage + 1);
  };

  /** custom renderer */
  const createPagination = (totalPage: number, currentPage: number) => {
    let pages: any[] = [];

    if (totalPage < 0) return pages;

    // totalPage가 5 이하일 때는 모든 페이지를 표시
    if (totalPage <= 5) {
      for (let i = 1; i <= totalPage; i++) {
        pages.push(i);
      }
      return pages;
    }

    // 처음에는 1 2 3 4 5 ... 29
    if (currentPage <= 4) {
      for (let i = 1; i <= Math.min(5, totalPage); i++) {
        pages.push(i);
      }
      if (totalPage > 5) {
        pages.push('dots1');
        pages.push(totalPage);
      }
    } else if (currentPage >= totalPage - 3) {
      // 마지막에는 1 ... 25 26 27 28 29
      pages.push(1);
      if (totalPage > 5) {
        pages.push('dots2');
      }
      for (let i = totalPage - 4; i <= totalPage; i++) {
        pages.push(i);
      }
    } else {
      // 중간에는 1 ... currentPage-1 currentPage currentPage+1 ... 29
      pages.push(1);
      pages.push('dots3');
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pages.push(i);
      }
      pages.push('dots4');
      pages.push(totalPage);
    }

    return pages.filter((page, index) => pages.indexOf(page) === index);
  };

  const pages = createPagination(totalPage, currentPage);

  const renderPage = (page: any) => (
    <button
      key={page}
      type='button'
      onClick={() =>
        typeof page === 'number' && onChangePage && onChangePage(page)
      }
      disabled={typeof page !== 'number'}
      className={clsx([
        'w-7 h-7 text-label-medium text-grayscale-700 bg-primary-300 bg-opacity-0 rounded ',
        {
          'hover:bg-opacity-[8%] hover:text-primary-300 ':
            typeof page === 'number',
        },
        {
          'bg-opacity-[16%] text-primary-300':
            typeof page === 'number' && page === currentPage,
        },
      ])}
      aria-label={'페이지네이션 버튼' + page}
      aria-disabled={typeof page !== 'number'}
    >
      {typeof page === 'number' ? page : '...'}
    </button>
  );
  if (totalPage === 0) return;
  return (
    <div className='flex gap-x-2 justify-center items-center select-none'>
      <IconButton
        adornment={<ArrowLeftIcon />}
        name='arrow-left'
        disabled={currentPage === 1}
        onClick={handleChangePrev}
      />
      <div className='space-x-2'>
        {pages.map((page: any) => renderPage(page))}
      </div>
      <IconButton
        adornment={<ArrowRightIcon />}
        name='arrow-left'
        disabled={totalPage === currentPage}
        onClick={handleChangeNext}
      />
    </div>
  );
};

export default Pagination;
