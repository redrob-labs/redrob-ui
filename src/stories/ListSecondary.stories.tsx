// Standard packages
import React from 'react';

// Third-party packages
import type { Meta, StoryObj } from '@storybook/react';

// Custom packages
import Avatar from '../components/Avatar';
import ListSecondary from '../components/ListSecondary';

const meta = {
  title: 'List/Secondary',
  component: ListSecondary,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // 자동색상 설정등 추가 설정 가능
  argTypes: {},
} satisfies Meta<typeof ListSecondary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basis: Story = {
  args: {
    title: 'Header',
  },
  render: args => (
    <div className='min-w-[800px] flex flex-col space-y-4'>
      <label className='text-label-semibold'>secondory - subheader</label>
      <ListSecondary {...args} subTitle='Subheader' />
      <label className='text-label-semibold'>
        secondory - avatar, timestamp
      </label>
      <ListSecondary
        {...args}
        startAdornment={
          <Avatar
            shape='circle'
            src='https://i.pinimg.com/236x/30/15/40/301540f163d1397c150d8a6955a1d92a.jpg'
            alt='logo'
          />
        }
        timeStamp='1 min ago'
      />
      <label className='text-label-semibold'>
        secondory - avatar, timestamp, subheader
      </label>
      <ListSecondary
        {...args}
        subTitle='Subheader'
        startAdornment={
          <Avatar
            shape='circle'
            src='https://i.pinimg.com/236x/30/15/40/301540f163d1397c150d8a6955a1d92a.jpg'
            alt='logo'
          />
        }
        timeStamp='1 min ago'
      />
    </div>
  ),
};
