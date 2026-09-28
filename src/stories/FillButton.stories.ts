/** Standard packages */
import type { Meta, StoryObj } from '@storybook/react';

/** Third-party packages */
import { fn } from '@storybook/test';

/** Custom packages */
import Button from "../components/Button"

const meta = {
  title: 'Button/Fill',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // 자동색상 설정등 추가 설정 가능
  argTypes: {
    className:{
      control: false
    },
    style: {
      control: false
    },
    type:{
      control: false
    }
  },
  // onClick 함수
  args: { onClick: fn(()=>console.log('button clicked')) },

} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary-fill',
    label: 'Button',
  },
};

export const PrimaryEnd: Story = {
  args: {
    variant: 'primary-fill',
    label: 'Button',
    adornmentPosition: 'end'
  },
};

export const PrimaryStart: Story = {
  args: {
    variant: 'primary-fill',
    label: 'Button',
    adornmentPosition: 'start'
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive-fill',
    label: 'Button',
  },
};

export const Ai: Story = {
  args: {
    variant: 'ai-fill',
    label: 'Button',
  },
};
