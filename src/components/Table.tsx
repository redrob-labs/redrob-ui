// Standard packges
import React, { FC, ReactElement } from 'react';

// Third-party packages
import clsx from 'clsx';

// Custom packages
import Pagination from './Pagination';

// PropTypes
export type TableColumnType = {
  /** table key */
  key: string;
  /** table label (th) */
  label: ReactElement;
  /** table width */
  width?: string;
  /** table order */
  order: boolean;
};

export type TableRowType = {
  /** table row id */
  id: string;
  /** table */
  [key: string]: ReactElement | string;
};

export type TableProps = {
  headers: ReactElement;
  rows: ReactElement;
  caption?: string;
  className?: string;
  onClickAsc?: (field: string, order: string) => void;
  onClickDesc?: (field: string, order: string) => void;

  /** page 변환 트리거 */
  onChangePage?: (page: number) => void;

  /** 현재 페이지 */
  currentPage: number;
  /** 전체 페이지 */
  totalPage: number;
  allSelected?: boolean;
  selectedRows?: string[];
};
const Table: FC<TableProps> = (props: TableProps) => {
  /** props - state */
  const { headers, rows, caption, className, currentPage, totalPage } = props;
  /** props - action */
  const {
    onClickAsc,
    onClickDesc,

    onChangePage,
  } = props;

  return (
    <div className='space-y-6'>
      <div className='overflow-auto border border-grayscale-200 rounded'>
        <table
          className={clsx([`table-auto border-collapse w-full`, className])}
          role='table'
          aria-label={caption}
        >
          <thead>
            <tr>{headers}</tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        onChangePage={onChangePage}
        totalPage={totalPage}
      />
    </div>
  );
};
export default Table;
