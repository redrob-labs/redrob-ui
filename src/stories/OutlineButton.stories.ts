/** Third-party packages */
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

/** Custom packages */
import Button from "../components/Button"

const meta = {
  title: 'Button/Outline',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
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
    variant: 'primary-outline',
    label: 'Button',
  },
};

export const PrimaryStart: Story = {
  args: {
    variant: 'primary-outline',
    label: 'Button',
    adornmentPosition:'start'
  },
};

export const PrimaryEnd: Story = {
  args: {
    variant: 'primary-outline',
    label: 'Button',
    adornmentPosition:'end'
  },
};

export const White: Story = {
  args: {
    variant: 'white-outline',
    label: 'Button',
  },
};

export const WhiteStart: Story = {
  args: {
    variant: 'white-outline',
    label: 'Button',
    adornmentPosition:'start'
  },
};

export const WhiteEnd: Story = {
  args: {
    variant: 'white-outline',
    label: 'Button',
    adornmentPosition:'end'
  },
};
