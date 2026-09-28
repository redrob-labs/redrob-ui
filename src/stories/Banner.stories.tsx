// Standard packages
import React from "react";

// Third-party packages
import type { Meta, StoryObj } from "@storybook/react";

// Custom packages
import Banner from "../components/Banner";
import Button from "../components/Button";

const meta = {
  title: "Banner/Basis",
  component: Banner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // 자동색상 설정등 추가 설정 가능
  argTypes: {
    endAdornment: {
      control: false,
    },
  },
} satisfies Meta<typeof Banner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basis: Story = {
  args: {
    description: `e industry's standard dummy  five centuries, but also the leap into electr`,
  },
  render: (args) => {
    return (
      <div className="max-w-[800px] mx-auto">
        <Banner {...args} />
      </div>
    );
  },
};

export const EndButton: Story = {
  args: {
    endAdornment: (
      <Button variant="white-outline" label="Button" adornmentPosition="end" />
    ),
    description: `e industry's standard dummy  five centuries, but also the leap into electr`,
  },
  render: (args) => {
    return (
      <div className="max-w-[800px] mx-auto">
        <Banner {...args} />
      </div>
    );
  },
};
