// Standard packages
import React from "react";

// Third-party packages
import type { Meta, StoryObj } from "@storybook/react";

// Custom packages
import ProgressDonut from "../components/ProgressDonut";

const meta = {
  title: "Progress/Donut",
  component: ProgressDonut,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ProgressDonut>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basis: Story = {
  args: {
    progress: 50,
    total: 60,
    label: "Label",
  },
  render: (args) => (
    <div className="min-w-[800px] flex justify-center items-center">
      <ProgressDonut {...args} />
    </div>
  ),
};
