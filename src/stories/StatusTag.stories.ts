// Third-party packages
import type { Meta, StoryObj } from '@storybook/react';

// Custom packages
import  StatusTag  from '../components/StatusTag';

const meta = {
  title: 'Tag/Status',
  component: StatusTag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // 자동색상 설정등 추가 설정 가능
  argTypes: {},
  // onClick 함수
  args: { },

} satisfies Meta<typeof StatusTag>;

export default meta; 
type Story = StoryObj<typeof meta>;

export const Grayscale: Story = {
  args: {
   text: 'label',
   variant:'grayscaleStatus'
  },
};

export const Info: Story = {
  args: {
   text: 'label',
   variant:'infoStatus'
  },
};

export const Process: Story = {
  args: {
   text: 'label',
   variant:'processStatus'
  },
};

export const Success: Story = {
  args: {
   text: 'label',
   variant:'successStatus'
  },
};

export const Error: Story = {
  args: {
   text: 'label',
   variant:'errorStatus'
  },
};
