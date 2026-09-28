// Standard pakcages
import React, { useState } from "react";

// Third-party packages
import type { Meta, StoryObj } from "@storybook/react";

// Custom packages
import Select, { SelectOptionType } from "../components/Select";

const meta: Meta<typeof Select> = {
  title: "Select/Basis",
  component: Select,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    options: {
      control: false,
    },
    value: {
      control: false,
    },
    className: {
      control: false,
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Basis: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<SelectOptionType>({
      label: "",
      value: "",
    });
    const options = [
      { value: "active", label: "Active" },
      { value: "paused", label: "Paused", disabled: true },
      { value: "delayed", label: "Delayed" },
      { value: "canceled", label: "Canceled" },
    ];
    const handleChange = (option: SelectOptionType) => {
      setSelected(option);
    };
    return (
      <Select
        {...args}
        options={options}
        value={selected?.value}
        onChange={handleChange}
      />
    );
  },
};
