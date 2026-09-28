// Standard packages
import React, { useState } from 'react';

// Third-party packages
import type { Meta, StoryObj } from '@storybook/react';
import clsx from 'clsx';
import { useArgs } from 'storybook/internal/preview-api';

// Custom packages
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import IconButton from '../components/IconButton';
import Select, { SelectOptionType } from '../components/Select';
import StatusTag from '../components/StatusTag';
import Table, { TableColumnType, TableRowType } from '../components/Table';
import TableHeader from '../components/TableHeader';
import TextField from '../components/TextField';
import { DownloadIcon, SearchIcon, XIcon } from '../icons';

const meta = {
  title: 'Table',
  component: Table,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: `
/** useState hooks */
const [currentPage, setCurrentPage] = useState(0);
const [selectedRows, setSelectedRows] = useState<string[]>([]);
const [selected, setSelected] = useState("");
const [searchText, setSearchText] = useState("");
/** const */
const columns: TableColumnType[] = [
  { key: "check", label: <span></span>, width: "100", order: false },
  { key: "email", label: <span>이메일</span>, width: "300", order: false },
  { key: "status", label: <span>상태</span>, width: "200", order: false },
  {
    key: "completedAt",
    label: <span>마감일</span>,
    width: "200",
    order: false,
  },
];
const rows: TableRowType[] = [
  {
    id: "1",
    check: "",
    email: <span className="text-label-semibold">test1@example.com</span>,
    completedAt: (
      <Select
        disabled
        options={[
          {
            value: "value1",
            label: "label1",
            disabled: false,
          },
          {
            value: "value2",
            label: "label2",
            disabled: false,
          },
        ]}
        value="value1"
        onChange={() => {}}
      />
    ),
    status: <StatusTag variant="infoStatus" text="진행중" />,
  },
  {
    id: "2",
    check: "",
    email: <span className="text-label-semibold">test2@example.com</span>,
    completedAt: <TextField disabled />,
    status: <StatusTag variant="errorStatus" text="error" />,
  },
  {
    id: "3",
    check: "",
    email: <span className="text-label-semibold">test3@example.com</span>,
    completedAt: <Button label="button" disabled />,
    status: <StatusTag variant="processStatus" text="pending" />,
  },
];
const allSelected = selectedRows?.length === rows?.length;

const options = [
  { value: "active", label: "Active" },
  { value: "paused", label: "Paused", disabled: true },
  { value: "delayed", label: "Delayed" },
  { value: "canceled", label: "Canceled" },
];
/** custom handlers */
const handlePageChange = (page: number) => {
  setCurrentPage(page);
};
const handleRowClick = (id: string) => console.log("Row clicked:", id);

const handleRowCheckboxChange = (checked: boolean, id: string) => {
  setSelectedRows(
    checked
      ? [...(selectedRows || []), id]
      : (selectedRows || []).filter((rowId: string) => rowId !== id)
  );
};

const handleHeaderCheckboxChange = (checked: boolean) => {
  const allRowIds = checked ? rows.map((row) => row.id) : [];
  setSelectedRows(allRowIds);
};
const handleSelectChange = (value: string) => {
  setSelected(value);
};

const handleSearchChange = (text: string) => setSearchText(text);

const handleSearchClear = () => setSearchText("");

/** custom renderers */
const renderHeader = (col: TableColumnType, index: number) => {
  return (
    <TableHeader
      key={col?.key}
      width={col?.width}
      index={index}
      allSelected={allSelected}
      onHeaderCheckboxChange={handleHeaderCheckboxChange}
      label={col?.label}
    />
  );
};

const renderColumns = (
  row: TableRowType,
  col: TableColumnType,
  index: number
) => (
  <td
    key={col.key}
    className={clsx([
      "px-6 py-[14.5px] text-label-regular",
      {
        "border-t border-grayscale-200": row.id !== rows[0].id,
      },
    ])}
  >
    {index === 0 ? (
      <Checkbox
        value={row.id}
        checked={selectedRows?.includes(row.id)}
        onChange={(checked) => handleRowCheckboxChange(checked, row.id)}
      />
    ) : (
      row[col.key] ?? <span className="text-gray-400">-</span>
    )}
  </td>
);

const renderRow = (row: TableRowType) => (
  <tr
    key={row.id}
    className="hover:bg-primary hover:bg-opacity-[16%] select-none cursor-pointer bg-white"
    onClick={() => handleRowClick(row.id)}
  >
    {columns.map((column: TableColumnType, index: number) =>
      renderColumns(row, column, index)
    )}
  </tr>
);

return (
  <div className="min-w-[800px]">
    <div className="flex justify-between items-center py-4 px-6 border border-b-0 border-grayscale-200 rounded-t bg-white">
      <div className="flex gap-x-4 items-center">
        <TextField
          className="w-[300px]"
          value={searchText}
          onChange={handleSearchChange}
          endAdornment={
            searchText ? (
              <IconButton
                adornment={<XIcon />}
                name="x"
                onClick={handleSearchClear}
              />
            ) : (
              <IconButton adornment={<SearchIcon />} name="search" />
            )
          }
        />
        <Select
          options={options}
          value={selected}
          onChange={handleSelectChange}
          defaultLabel="Default Option"
        />
      </div>
      <IconButton
        outline
        size="large"
        adornment={<DownloadIcon />}
        name="download"
        onClick={() => {}}
      />
    </div>
    <Table
      {...args}
      headers={<>{columns.map(renderHeader)}</>}
      rows={<>{rows.map(renderRow)}</>}
      allSelected={allSelected}
      selectedRows={selectedRows}
      onClickAsc={(field, order) => console.log("Asc", field, order)}
      onClickDesc={(field, order) => console.log("Desc", field, order)}
      currentPage={currentPage}
      onChangePage={handlePageChange}
    />
  </div>
);    
        `,
      },
    },
  },
  tags: ['autodocs'],
  // 자동색상 설정등 추가 설정 가능
  argTypes: {
    headers: {
      control: false,
    },
    rows: {
      control: false,
    },
    caption: {
      control: false,
    },
    className: {
      control: false,
    },
    allSelected: {
      control: false,
    },
    selectedRows: {
      control: false,
    },
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basis: Story = {
  argTypes: {},
  args: {
    currentPage: 1,
    totalPage: 10,
    headers: <></>,
    rows: <></>,
  },
  render: args => {
    const [{ currentPage, selectedRows }, updateArgs] = useArgs();

    /** const  */
    const columns: TableColumnType[] = [
      { key: 'check', label: <span></span>, width: '100', order: false },
      { key: 'email', label: <span>이메일</span>, width: '300', order: false },
      { key: 'status', label: <span>상태</span>, width: '200', order: false },
      {
        key: 'completedAt',
        label: <span>마감일</span>,
        width: '200',
        order: false,
      },
    ];
    const rows: TableRowType[] = [
      {
        id: '1',
        check: '',
        email: <span className='text-label-semibold'>test1@example.com</span>,
        completedAt: (
          <Select
            disabled
            options={[
              {
                value: 'value1',
                label: 'label1',
                disabled: false,
              },
              {
                value: 'value2',
                label: 'label2',
                disabled: false,
              },
            ]}
            value='value1'
            onChange={() => {}}
          />
        ),
        status: <StatusTag variant='infoStatus' text='진행중' />,
      },
      {
        id: '2',
        check: '',
        email: <span className='text-label-semibold'>test2@example.com</span>,
        completedAt: <TextField disabled />,
        status: <StatusTag variant='errorStatus' text='error' />,
      },
      {
        id: '3',
        check: '',
        email: <span className='text-label-semibold'>test3@example.com</span>,
        completedAt: <Button label='button' disabled />,
        status: <StatusTag variant='processStatus' text='pending' />,
      },
    ];
    const allSelected = selectedRows?.length === rows?.length;

    /** custom handlers */
    const handlePageChange = (page: number) => {
      updateArgs({ currentPage: page });
      args.onChangePage && args.onChangePage(page);
    };
    const handleRowClick = (id: string) => console.log('Row clicked:', id);

    const handleRowCheckboxChange = (checked: boolean, id: string) => {
      updateArgs({
        selectedRows: checked
          ? [...(selectedRows || []), id]
          : (selectedRows || []).filter((rowId: string) => rowId !== id),
      });
    };

    const handleHeaderCheckboxChange = (checked: boolean) => {
      const allRowIds = checked ? rows.map(row => row.id) : [];
      updateArgs({
        selectedRows: allRowIds,
      });
    };

    /** custom renderers */
    const renderHeader = (col: TableColumnType, index: number) => {
      return (
        <TableHeader
          key={col?.key}
          width={col?.width}
          index={index}
          allSelected={allSelected}
          onHeaderCheckboxChange={handleHeaderCheckboxChange}
          label={col?.label}
        />
      );
    };

    const renderColumns = (
      row: TableRowType,
      col: TableColumnType,
      index: number
    ) => (
      <td
        key={col.key}
        className={clsx([
          'px-6 py-[14.5px] text-label-regular',
          {
            'border-t border-grayscale-200': row.id !== rows[0].id,
          },
        ])}
      >
        {index === 0 ? (
          <Checkbox
            value={row.id}
            checked={selectedRows?.includes(row.id)}
            onChange={checked => handleRowCheckboxChange(checked, row.id)}
          />
        ) : (
          row[col.key] ?? <span className='text-gray-400'>-</span>
        )}
      </td>
    );

    const renderRow = (row: TableRowType) => (
      <tr
        key={row.id}
        className='hover:bg-primary hover:bg-opacity-[16%] select-none cursor-pointer bg-white'
        onClick={() => handleRowClick(row.id)}
      >
        {columns.map((column: TableColumnType, index: number) =>
          renderColumns(row, column, index)
        )}
      </tr>
    );
    return (
      <div>
        <Table
          {...args}
          headers={<>{columns.map(renderHeader)}</>}
          rows={<>{rows.map(renderRow)}</>}
          allSelected={allSelected}
          selectedRows={selectedRows}
          onClickAsc={(field, order) => console.log('Asc', field, order)}
          onClickDesc={(field, order) => console.log('Desc', field, order)}
          currentPage={currentPage}
          onChangePage={handlePageChange}
        />
      </div>
    );
  },
};

export const Search: Story = {
  argTypes: {
    currentPage: {
      control: false,
    },
    totalPage: {
      control: false,
    },
    headers: {
      control: false,
    },
    rows: {
      control: false,
    },
    caption: {
      control: false,
    },
    className: {
      control: false,
    },
    allSelected: {
      control: false,
    },
    selectedRows: {
      control: false,
    },
  },

  args: {
    currentPage: 1,
    totalPage: 10,
    headers: <></>,
    rows: <></>,
  },
  render: args => {
    /** useState hooks */
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const [selected, setSelected] = useState<SelectOptionType>({
      label: '',
      value: '',
    });
    const [searchText, setSearchText] = useState('');
    /** const */
    const columns: TableColumnType[] = [
      { key: 'check', label: <span></span>, width: '100', order: false },
      { key: 'email', label: <span>이메일</span>, width: '300', order: false },
      { key: 'status', label: <span>상태</span>, width: '200', order: false },
      {
        key: 'completedAt',
        label: <span>마감일</span>,
        width: '200',
        order: false,
      },
    ];
    const rows: TableRowType[] = [
      {
        id: '1',
        check: '',
        email: <span className='text-label-semibold'>test1@example.com</span>,
        completedAt: (
          <Select
            disabled
            options={[
              {
                value: 'value1',
                label: 'label1',
                disabled: false,
              },
              {
                value: 'value2',
                label: 'label2',
                disabled: false,
              },
            ]}
            value='value1'
            onChange={() => {}}
          />
        ),
        status: <StatusTag variant='infoStatus' text='진행중' />,
      },
      {
        id: '2',
        check: '',
        email: <span className='text-label-semibold'>test2@example.com</span>,
        completedAt: <TextField disabled />,
        status: <StatusTag variant='errorStatus' text='error' />,
      },
      {
        id: '3',
        check: '',
        email: <span className='text-label-semibold'>test3@example.com</span>,
        completedAt: <Button label='button' disabled />,
        status: <StatusTag variant='processStatus' text='pending' />,
      },
    ];
    const allSelected = selectedRows?.length === rows?.length;

    const options = [
      { value: 'active', label: 'Active' },
      { value: 'paused', label: 'Paused', disabled: true },
      { value: 'delayed', label: 'Delayed' },
      { value: 'canceled', label: 'Canceled' },
    ];
    /** custom handlers */
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
    const handleRowClick = (id: string) => console.log('Row clicked:', id);

    const handleRowCheckboxChange = (checked: boolean, id: string) => {
      setSelectedRows(
        checked
          ? [...(selectedRows || []), id]
          : (selectedRows || []).filter((rowId: string) => rowId !== id)
      );
    };

    const handleHeaderCheckboxChange = (checked: boolean) => {
      const allRowIds = checked ? rows.map(row => row.id) : [];
      setSelectedRows(allRowIds);
    };
    const handleSelectChange = (option: SelectOptionType) => {
      setSelected(option);
    };

    const handleSearchChange = (text: string) => setSearchText(text);

    const handleSearchClear = () => setSearchText('');

    /** custom renderers */
    const renderHeader = (col: TableColumnType, index: number) => {
      return (
        <TableHeader
          key={col?.key}
          width={col?.width}
          index={index}
          allSelected={allSelected}
          onHeaderCheckboxChange={handleHeaderCheckboxChange}
          label={col?.label}
        />
      );
    };

    const renderColumns = (
      row: TableRowType,
      col: TableColumnType,
      index: number
    ) => (
      <td
        key={col.key}
        className={clsx([
          'px-6 py-[14.5px] text-label-regular',
          {
            'border-t border-grayscale-200': row.id !== rows[0].id,
          },
        ])}
      >
        {index === 0 ? (
          <Checkbox
            value={row.id}
            checked={selectedRows?.includes(row.id)}
            onChange={checked => handleRowCheckboxChange(checked, row.id)}
          />
        ) : (
          row[col.key] ?? <span className='text-gray-400'>-</span>
        )}
      </td>
    );

    const renderRow = (row: TableRowType) => (
      <tr
        key={row.id}
        className='hover:bg-primary hover:bg-opacity-[16%] select-none cursor-pointer bg-white'
        onClick={() => handleRowClick(row.id)}
      >
        {columns.map((column: TableColumnType, index: number) =>
          renderColumns(row, column, index)
        )}
      </tr>
    );

    return (
      <div className='min-w-[800px]'>
        <div className='flex justify-between items-center py-4 px-6 border border-b-0 border-grayscale-200 rounded-t bg-white'>
          <div className='flex gap-x-4 items-center'>
            <TextField
              className='w-[300px]'
              value={searchText}
              onChange={handleSearchChange}
              endAdornment={
                searchText ? (
                  <IconButton
                    adornment={<XIcon />}
                    name='x'
                    onClick={handleSearchClear}
                  />
                ) : (
                  <IconButton adornment={<SearchIcon />} name='search' />
                )
              }
            />
            <Select
              options={options}
              value={selected?.value}
              onChange={handleSelectChange}
              defaultLabel='Default Option'
            />
          </div>
          <IconButton
            outline
            size='large'
            adornment={<DownloadIcon />}
            name='download'
            onClick={() => {}}
          />
        </div>
        <Table
          {...args}
          headers={<>{columns.map(renderHeader)}</>}
          rows={<>{rows.map(renderRow)}</>}
          allSelected={allSelected}
          selectedRows={selectedRows}
          onClickAsc={(field, order) => console.log('Asc', field, order)}
          onClickDesc={(field, order) => console.log('Desc', field, order)}
          currentPage={currentPage}
          onChangePage={handlePageChange}
        />
      </div>
    );
  },
};
