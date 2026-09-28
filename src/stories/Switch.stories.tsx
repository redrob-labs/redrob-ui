// Standard packages
import React from "react";

// Third-party packages
import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "storybook/internal/preview-api";

// Custom packages
import Switch from "../components/Switch";

const meta = {
  title: "Switch",
  component: Switch,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        code: `
const [{ checked }, updateArgs] = useArgs();

const handleChange = (checked: boolean) => {
  updateArgs({ checked });
};

return (
  <Switch
    {...args}
    onChange={() => handleChange(!checked)}
    checked={checked}
  />
);
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean", // Storybook Controls에서 boolean으로 조작 가능
    },
  },
  args: {
    checked: false, // 기본 checked 상태
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basis: Story = {
  render: (args) => {
    const [{ checked }, updateArgs] = useArgs();

    const handleChange = (checked: boolean) => {
      updateArgs({ checked });
    };

    return (
      <Switch
        {...args}
        onChange={() => handleChange(!checked)}
        checked={checked}
      />
    );
  },
};
