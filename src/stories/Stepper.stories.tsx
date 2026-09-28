// Standard packages
import React from "react";

// Third-party packages
import type { Meta, StoryObj } from "@storybook/react";

// Custom packages
import Stepper from "../components/Stepper";

const meta = {
  title: "Stepper",
  component: Stepper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // 자동색상 설정등 추가 설정 가능
  argTypes: {},
} satisfies Meta<typeof Stepper>;

export default meta;

type Story = StoryObj<typeof meta>;

const steps = [
  {
    id: 1,
    label: "Label",
    content: <div className="p-4">content1</div>,
  },
  {
    id: 2,
    label: "Label2",
    content: <div className="p-4">content2</div>,
  },
  {
    id: 3,
    label: "Label3",
    content: <div className="p-4">content3</div>,
  },
  {
    id: 4,
    label: "Label4",
    content: <div className="p-4">content4</div>,
  },
];
export const Basis: Story = {
  args: {
    steps: steps,
    lock: false,
  },
  render: (args) => {
    return <Stepper {...args} initialTab={2} />;
  },
};

export const Lock: Story = {
  args: {
    steps: steps,
    lock: true,
  },
  render: (args) => {
    return <Stepper {...args} initialTab={2} />;
  },
};
