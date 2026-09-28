// Standard packages
import React from "react";

// Third-party packages
import type { Meta, StoryObj } from "@storybook/react";

// Custom packages
import ProgressLinear from "../components/ProgressLinear";

const meta = {
  title: "Progress/Linear",
  component: ProgressLinear,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: false,
    },
    urgent: {
      control: false,
    },
  },
} satisfies Meta<typeof ProgressLinear>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Circle: Story = {
  args: {
    value: 20,
    variant: "circle",
  },
  render: (args) => (
    <div className="min-w-[800px] flex justify-center items-center">
      <div className="w-full">
        <ProgressLinear {...args} />
      </div>
    </div>
  ),
};
export const CircleValue: Story = {
  args: {
    value: 20,
    variant: "circle-value",
    urgent: true,
  },
  render: (args) => (
    <div className="min-w-[800px] flex justify-center items-center">
      <div className="w-full">
        <ProgressLinear {...args} />
      </div>
    </div>
  ),
};
export const Rounded: Story = {
  args: {
    value: 50,
    variant: "rounded",
  },
  render: (args) => (
    <div className="min-w-[800px] flex justify-center items-center">
      <div className="w-full">
        <ProgressLinear {...args} />
      </div>
    </div>
  ),
};
export const RoundedValue: Story = {
  args: {
    value: 50,
    variant: "rounded-value",
  },
  render: (args) => (
    <div className="min-w-[800px] flex justify-center items-center">
      <div className="w-full">
        <ProgressLinear {...args} />
      </div>
    </div>
  ),
};
