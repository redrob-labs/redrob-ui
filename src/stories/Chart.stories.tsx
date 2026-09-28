// Standard packages
import React from "react";

// Third-party packages
import type { Meta, StoryObj } from "@storybook/react";

// Custom packages
import Chart from "../components/Chart";

const meta = {
  title: "Chart",
  component: Chart,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    labelName: {
      control: false,
    },
    valueName: {
      control: false,
    },
    data: {
      control: false,
    },
  },
} satisfies Meta<typeof Chart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basis: Story = {
  args: {
    data: [
      { category: "Email", value: 30 },
      { category: "SMS", value: 60 },
      { category: "Push", value: 45 },
      { category: "Social", value: 75 },
    ],
    valueName: "value", // 데이터에서 바의 높이를 계산할 키
    labelName: "category", // 데이터에서 바의 라벨로 표시할 키
    max: 100,
  },
  render: (args) => (
    <div className="">
      <Chart {...args} />
    </div>
  ),
};
