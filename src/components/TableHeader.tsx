// Standard packages
import React, { FC, ReactElement } from 'react';

// Third-party hooks
// Custom packages
import Checkbox from './Checkbox';
// PropTypes
export type TableHeaderProps = {
  /** table header width */
  width?: string;
  /** table header index */
  index?: number;
  /** if 'true' checkbox all selected */
  allSelected?: boolean;
  /** Trigger when header checkbox clicked */
  onHeaderCheckboxChange?: (checked: boolean) => void;
  /** table header label */
  label?: ReactElement;
};
const TableHeader: FC<TableHeaderProps> = (props: TableHeaderProps) => {
  /** props - state */
  const { width = 0, index = 0, allSelected = false, label } = props;
  /** props - action */
  const { onHeaderCheckboxChange } = props;
  /** custom handler */
  const handleCheckbox = (checked: boolean) => {
    onHeaderCheckboxChange && onHeaderCheckboxChange(checked);
  };

  return (
    <th
      style={{ width: width }}
      className='text-left text-label-medium border-b border-grayscale-200 px-6 py-[14.5px] bg-white'
    >
      <div className='flex items-center gap-x-1'>
        {index === 0 ? (
          <Checkbox
            value='selectAll'
            checked={allSelected}
            onChange={checked => handleCheckbox(checked)}
          />
        ) : (
          label
        )}
      </div>
    </th>
  );
};
export default TableHeader;
