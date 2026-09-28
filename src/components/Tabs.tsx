'use client';

// Standard packages
import React, { FC, ReactElement } from 'react';

// Third-party packages
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import clsx from 'clsx';

// PropTypes
type TabOption = {
  value: string;
  label: ReactElement;
  content: ReactElement;
  count?: number;
  disabled?: boolean;
};

type TabsProps = {
  tabs: TabOption[];
  defaultValue: string;
  border?: boolean;
  onChange?: (index: number) => void;
};

const Tabs: FC<TabsProps> = (props: TabsProps) => {
  /** props - state */
  const { tabs, defaultValue, border = false, onChange } = props;
  const defaultIndex = tabs.findIndex(tab => tab.value === defaultValue);
  const [selectedIndex, setSelectedIndex] = React.useState(defaultIndex);

  const handleChange = (index: number) => {
    setSelectedIndex(index);
    if (onChange) {
      onChange(index);
    }
  };

  return (
    <TabGroup
      defaultIndex={defaultIndex}
      selectedIndex={selectedIndex}
      onChange={handleChange}
    >
      <TabList
        className={clsx([
          'flex',
          {
            'border-b': border,
          },
        ])}
      >
        {tabs.map(tab => (
          <Tab
            as={'div'}
            key={tab.value}
            disabled={tab.disabled}
            aria-disabled={tab.disabled}
            data-disabled={tab.disabled}
            className={clsx(['outline-none'])}
          >
            {({ selected }) => (
              <div
                className={clsx([
                  'px-4 pb-2 transition-colors flex gap-x-2 items-center text-label-semibold relative',
                  {
                    ' text-primary-400': selected,
                    'border-transparent text-grayscale-600 hover:text-primary-400 cursor-pointer':
                      !selected && !tab.disabled,
                    'cursor-not-allowed text-grayscale-400': tab.disabled,
                  },
                ])}
                id={`tab-${tab.value}`}
                role='tab'
              >
                {tab.label}
                <span
                  className={clsx([
                    'bg-primary-100 px-1 h-4 rounded w-fit text-primary-400 text-[10px] flex items-center justify-center',
                    {
                      hidden: !(tab.count && tab.count > 0),
                    },
                    {
                      block: tab.count && tab.count > 0,
                    },
                  ])}
                >
                  {tab.count && (tab.count <= 99 ? tab.count : '99+')}
                </span>
                {selected && (
                  <div className='absolute bottom-[-1px] left-0 w-full border-b border-primary-400' />
                )}
              </div>
            )}
          </Tab>
        ))}
      </TabList>
      <TabPanels className='mt-4'>
        {tabs.map(tab => (
          <TabPanel
            key={tab.value}
            className=''
            id={`panel-${tab.value}`}
            aria-labelledby={`tab-${tab.value}`}
          >
            {tab.content}
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};

export default Tabs;
