// Standard pakcages
import React, { KeyboardEvent, useState } from "react";

// Third-party packages
import type { Meta, StoryObj } from "@storybook/react";

// Custom packages
import SelectMenu from "../components/SelectMenu";

const meta: Meta<typeof SelectMenu> = {
  title: "Select/Menu",
  component: SelectMenu,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: {
      control: false,
    },
    endAdornment: {
      control: false,
    },
    autoFocus: {
      control: false,
    },
    value: {
      control: false,
    },
    type: {
      control: false,
    },
    min: {
      control: false,
    },
    max: {
      control: false,
    },
    items: {
      control: false,
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SelectMenu>;

export const Basis: Story = {
  render: (props) => {
    /** useState hooks */
    const [val, setVal] = useState("");

    const items = [
      {
        label: "item1",
        disabled: false,
      },
      {
        label: "item2",
        disabled: true,
      },
      {
        label: "item3",
        disabled: false,
      },
    ];

    /** custom handlers */
    const handleChangeText = (text: string) => {
      setVal(text);
    };
    const handleRemoveText = () => {
      setVal("");
    };
    const handleItemClick = (item: string) => {
      handleChangeText(item);
    };

    return (
      <div className="min-w-[800px] flex justify-center">
        <SelectMenu
          {...props}
          className="w-[400px]"
          items={val !== "" ? items : []}
          value={val}
          onChange={handleChangeText}
          onClickItem={handleItemClick}
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
            if (e.code === "Enter") {
              console.log("submit entered: " + val);
              handleRemoveText();
            }
          }}
        />
      </div>
    );
  },
};
