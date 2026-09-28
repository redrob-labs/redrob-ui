// Standard packages
import React from "react";

// Third-party packages
import type { Meta, StoryObj } from "@storybook/react";

// Custom packages
import DonutChart from "../components/DonutChart";

const meta = {
  title: "Chart/Donut",
  component: DonutChart,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    data: {
      control: false,
    },
    colors: {
      control: false,
    },
  },
} satisfies Meta<typeof DonutChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basis: Story = {
  args: {
    data: [
      { label: "Category A", value: 30 },
      { label: "Category B", value: 20 },
      { label: "Remain", value: 50 },
    ],
    colors: ["#ff6384", "#36a2eb", "#e0e0e0"],
    radius: 80,
    strokeWidth: 30,
    value: "60%",
  },
  render: (args) => {
    return (
      <div className="">
        <DonutChart {...args} />
      </div>
    );
  },
};
