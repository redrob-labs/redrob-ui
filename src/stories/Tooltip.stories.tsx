// Standard packages
import React from "react";

// Third-party packages
import type { Meta, StoryObj } from "@storybook/react";

// Custom packages
import Tooltip from "../components/Tooltip";
import IconButton from "../components/IconButton";
import { InfoIcon } from "../icons/InfoIcon";

const meta = {
  title: "Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // 자동색상 설정등 추가 설정 가능
  argTypes: {
    className: {
      control: false,
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Left: Story = {
  args: {
    label: "Left",
    position: "left",
    children: <IconButton adornment={<InfoIcon />} name="information" />,
  },
  render: (args) => (
    <div className="min-w-[800px] flex justify-center items-center">
      <Tooltip {...args} />
    </div>
  ),
};

export const Right: Story = {
  args: {
    label: "Right",
    position: "right",
    children: <IconButton adornment={<InfoIcon />} name="information" />,
  },
  render: (args) => (
    <div className="min-w-[800px] flex justify-center items-center">
      <Tooltip {...args} />
    </div>
  ),
};

export const Top: Story = {
  args: {
    label: "Top",
    position: "top",
    children: <IconButton adornment={<InfoIcon />} name="information" />,
  },
  render: (args) => (
    <div className="min-w-[800px] flex justify-center items-center">
      <Tooltip {...args} />
    </div>
  ),
};

export const Bottom: Story = {
  args: {
    label: "Bottom",
    position: "bottom",
    children: <IconButton adornment={<InfoIcon />} name="information" />,
  },
  render: (args) => (
    <div className="min-w-[800px] flex justify-center items-center">
      <Tooltip {...args} />
    </div>
  ),
};
