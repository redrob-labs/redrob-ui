// Standard packages
import React from 'react';

// Third-party packages
import type { Meta, StoryObj } from '@storybook/react';

// Custom packages
import Card from '../components/Card';

const meta = {
  title: 'Card/Basis',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // 자동색상 설정등 추가 설정 가능
  argTypes: {
    className: {
      control: false,
    },
    elevation: {
      control: false,
    },
    children: {
      control: false,
    },
    outline: {
      control: false,
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basis: Story = {
  args: {
    children: (
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
    ),
    className: 'text-caption-regular',
    background: 'white',
    elevation: true,
  },
  render: args => (
    <div className='min-w-[800px] flex flex-col gap-4'>
      <label className='text-label-semibold'>basic</label>
      <Card {...args} />
      <label className='text-label-semibold'>outline</label>
      <Card {...args} background='white' outline={true} elevation={true} />
      <label className='text-label-semibold'>gray</label>
      <Card {...args} background='gray' outline={false} elevation={true} />
    </div>
  ),
};
