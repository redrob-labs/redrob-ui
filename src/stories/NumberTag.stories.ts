// Third-party packages
import type { Meta, StoryObj } from '@storybook/react';

// Custom packages
import  NumberTag  from '../components/NumberTag';

const meta = {
  title: 'Tag/Number',
  component: NumberTag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // 자동색상 설정등 추가 설정 가능
  argTypes: {},
  // onClick 함수
  args: { },

} satisfies Meta<typeof NumberTag>;

export default meta; 
type Story = StoryObj<typeof meta>;

export const Person: Story = {
  args: {
   text: 1,
   variant:'personNumber'
  },
};

export const Increase: Story = {
  args: {
    text: 1,
   variant:'increaseNumber'
  },
};

export const Decrease: Story = {
  args: {
    text: 1,
   variant:'decreaseNumber'
  },
};

