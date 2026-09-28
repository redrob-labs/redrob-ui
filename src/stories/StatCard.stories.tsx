// Standard packages
import React from 'react';

// Third-party packages
import type { Meta, StoryObj } from '@storybook/react';

// Custom packages
import IconButton from '../components/IconButton';
import StatCard from '../components/StatCard';
import { MenuIcon } from '../icons';

const meta = {
  title: 'Card/Stat',
  component: StatCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // 자동색상 설정등 추가 설정 가능
  argTypes: {
    endAdornment: {
      control: false,
    },
  },
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basis: Story = {
  args: {
    datas: [
      {
        label: 'Label',
        value: 'h3',
      },
      {
        label: 'Label',
        value: 'h3',
      },
      {
        label: 'Label',
        value: 'h3',
      },
    ],
  },
  render: args => (
    <div className='min-w-[800px] flex flex-col gap-4'>
      <label className='text-label-semibold'>basic</label>
      <StatCard {...args} />
      <label className='text-label-semibold'>sub header</label>
      <StatCard {...args} title='Header' subTitle='subHeader' />
      <label className='text-label-semibold'>end adornment</label>
      <StatCard
        {...args}
        title='Header'
        subTitle='subHeader'
        endAdornment={
          <IconButton
            adornment={<MenuIcon />}
            name='menu'
            onClick={() => alert('click adornment')}
          />
        }
      />
    </div>
  ),
};
