// Standard packages
import React from "react";

// Third-party packages
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

// Custom packages
import { ArrowLeftIcon } from "../icons";
import FloatingButton from "../components/FloatingButton";

const meta = {
  title: "Button/Floating",
  component: FloatingButton,
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
    type: {
      control: false,
    },
  },
  // onClick 함수
  args: { onClick: fn(() => console.log("button clicked")) },
} satisfies Meta<typeof FloatingButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    adornment: <ArrowLeftIcon />,
  },
  render: (args) => <FloatingButton {...args} />,
};

export const Text: Story = {
  args: {
    adornment: <ArrowLeftIcon />,
  },
  render: (args) => <FloatingButton {...args} label="Label" />,
};
