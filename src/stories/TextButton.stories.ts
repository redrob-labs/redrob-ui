/** Third-pary packages */
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

/** Custom packages */
import Button from "../components/Button"

const meta = {
  title: 'Button/Text',
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
    variant: 'primary-text',
    label: 'Button',
  },
};

export const PrimaryEnd: Story = {
  args: {
    variant: 'primary-text',
    label: 'Button',
    adornmentPosition:'end'
  },
};

export const PrimaryStart: Story = {
  args: {
    variant: 'primary-text',
    label: 'Button',
    adornmentPosition:'start'
  },
};


export const White: Story = {
  args: {
    variant: 'white-text',
    label: 'Button',
  },
};

export const WhiteEnd: Story = {
  args: {
    variant: 'white-text',
    label: 'Button',
    adornmentPosition: 'end'
  },
};

export const WhiteStart: Story = {
  args: {
    variant: 'white-text',
    label: 'Button',
    adornmentPosition: 'start'
  },
};

export const Gray: Story = {
  args: {
    variant: 'grayscale-text',
    label: 'Button',
  },
};

export const GrayEnd: Story = {
  args: {
    variant: 'grayscale-text',
    label: 'Button',
    adornmentPosition:'end'
  },
};

export const GrayStart: Story = {
  args: {
    variant: 'grayscale-text',
    label: 'Button',
    adornmentPosition:'start'
  },
};