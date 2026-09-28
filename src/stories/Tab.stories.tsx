// Standard pakcages
import React from 'react';

// Third-party packages
import type { Meta, StoryObj } from '@storybook/react';

// Custom packages
import Tabs from '../components/Tabs';
import Tooltip from '../components/Tooltip';
import { AssessmentIcon } from '../icons';
import { InfoIcon } from '../icons/InfoIcon';

const meta = {
  title: 'Tab',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: false,
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basis: Story = {
  args: {
    defaultValue: 'value',
    tabs: [
      {
        value: 'value',
        label: (
          <div className='flex items-center gap-x-2'>
            <AssessmentIcon className='w-4 h-4' />
            <span>label</span>
          </div>
        ),
        content: (
          <div className='flex'>
            <Tooltip
              label={'label1'}
              position='bottom'
              children={<InfoIcon />}
            />
            <label>label1</label>
          </div>
        ),
      },
      {
        value: 'value2',
        label: <div>label2</div>,
        content: <div>content2</div>,
        count: 2,
      },
      {
        value: 'value3',
        label: <div>label3</div>,
        content: (
          <div className='flex'>
            <Tooltip
              label={'label3'}
              position='bottom'
              children={<InfoIcon />}
            />
            <label>label3</label>
          </div>
        ),
        count: 22222,
      },
      {
        value: 'value4',
        label: <div>label4</div>,
        content: <div>content4</div>,
        disabled: true,
      },
    ],
    border: true,
    onChange: (index: number) => {
      console.log('Tab changed to index:', index);
    },
  },
  render: args => {
    return <Tabs {...args} />;
  },
};
