// Standard packages
import React from 'react';

// Third-party packages
import type { Meta, StoryObj } from '@storybook/react';

// Custom packages
import Avatar from '../components/Avatar';
import List from '../components/List';
import { AssessmentIcon, CaretDoubleRightIcon } from '../icons';

const meta = {
  title: 'List/Basis',
  component: List,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    startAdornment: {
      control: false,
    },
    endAdornment: {
      control: false,
    },
    className: {
      control: false,
    },
    subList: {
      control: false,
    },
    href: {
      control: false,
    },
  },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basis: Story = {
  args: {
    title: 'Header',
  },
  render: args => (
    <div className='min-w-[800px] flex flex-col space-y-4'>
      <label className='text-label-semibold'>basic</label>
      <List {...args} />
      <label className='text-label-semibold'>end adornment</label>
      <List
        {...args}
        endAdornment={
          <span className='bg-primary-300 block text-white text-caption-semibold px-2 py-[2px] rounded-full'>
            2
          </span>
        }
      />
      <label className='text-label-semibold'>avatar + end adornment</label>
      <List
        {...args}
        startAdornment={
          <Avatar
            shape='rounded'
            src='https://i.pinimg.com/236x/30/15/40/301540f163d1397c150d8a6955a1d92a.jpg'
            alt='logo'
          />
        }
        endAdornment={<CaretDoubleRightIcon />}
      />
      <label className='text-label-semibold'>start adornment</label>
      <List {...args} startAdornment={<AssessmentIcon />} />
      <label className='text-label-semibold'>sub list</label>
      <List {...args} subList />
    </div>
  ),
};
