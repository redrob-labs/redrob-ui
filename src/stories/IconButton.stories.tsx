// Standard packages
import React from "react";

// Third-party packages
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

// Custom packages
import IconButton from "../components/IconButton";
import { MenuIcon } from "../icons";

const meta = {
  title: "Button/Icon",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // 자동색상 설정등 추가 설정 가능
  argTypes: {
    className: {
      control: false,
    },
    style: {
      control: false,
    },
  },
  // onClick 함수
  args: { name: "menu", onClick: fn(() => console.log("button clicked")) },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    adornment: <MenuIcon />,
  },
  render: (args) => <IconButton {...args} />,
};
