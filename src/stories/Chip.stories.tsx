// Standard packages
import React, { useState } from "react";

// Third-party packages
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

// Custom packages
import Chip from "../components/Chip";

const meta = {
  title: "Chip",
  component: Chip,
  parameters: {
    layout: "centered",

    docs: {
      source: {
        code: `
/** useState hoooks */
const [chips, setChips] = useState(["label1", "label2", "label3"]);

/** custom handlers */
const handleDelete = (label: string) => {
  setChips((prevChips) => prevChips.filter((chip) => chip !== label));
};

return (
  <div>
    {chips.map((label, index) => (
      <Chip key={index} {...args} label={label} onDelete={handleDelete} />
    ))}
  </div>
);
          `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: false,
    },
    label: {
      control: false,
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basis: Story = {
  args: {
    label: "label",
    onClick: fn(() => console.log("chip clicked")),
  },
  render: (args) => {
    return <Chip {...args} />;
  },
};

export const BasisDelete: Story = {
  args: {
    label: "label",
    onDelete: fn(() => console.log("chip deleted")),
  },
  render: (args) => {
    return <Chip {...args} />;
  },
};

export const Group: Story = {
  args: {
    className: "",
    selected: false,
    canHover: true,
    onClick: undefined,
    label: "label",
  },
  render: (args) => {
    const [chips, setChips] = useState(["label1", "label2", "label3"]);

    const handleDelete = (label: string) => {
      setChips((prevChips) => prevChips.filter((chip) => chip !== label));
    };

    return (
      <div>
        {chips.map((label, index) => (
          <Chip key={index} {...args} label={label} onDelete={handleDelete} />
        ))}
      </div>
    );
  },
};
