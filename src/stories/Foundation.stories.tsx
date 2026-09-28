// Standard packages
import React from "react";
// Third-party packages
import type { Meta, StoryObj } from "@storybook/react";

// Custom packages
import Foundation from "../components/Foundation";

const meta: Meta<typeof Foundation> = {
  title: "Foundation",
  component: Foundation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Foundation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basis: Story = {
  args: {},
  render: (args) => {
    return <Foundation />;
  },
};
