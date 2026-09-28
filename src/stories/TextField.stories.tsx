// Standard pakcages
import React, { KeyboardEvent, useState } from "react";

// Third-party packages
import type { Meta, StoryObj } from "@storybook/react";

// Custom packages
import TextField from "../components/TextField";
import IconButton from "../components/IconButton";
import { MenuIcon } from "../icons";
import { InfoIcon } from "../icons/InfoIcon";

const meta: Meta<typeof TextField> = {
  title: "TextField/Basis",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    value: {
      control: false,
    },
    className: {
      control: false,
    },
    autoFocus: {
      control: false,
    },
    endAdornment: {
      control: false,
    },
    labelIcon: {
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
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Basis: Story = {
  render: (props) => {
    /** useState hooks */
    const [val, setVal] = useState("");
    return (
      <div className="min-w-[800px] flex justify-center">
        <TextField
          {...props}
          className="w-[400px]"
          value={val}
          onChange={(text: string) => setVal(text)}
          endAdornment={<MenuIcon />}
          onClickEnd={() => alert("click end adornment")}
          labelIcon={<IconButton adornment={<InfoIcon />} name="menu" />}
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
            if (e.code === "Enter") console.log("submit entered: " + val);
          }}
        />
      </div>
    );
  },
};

export const TextArea: Story = {
  render: (props) => {
    /** useState hooks */
    const [val, setVal] = useState("");
    return (
      <div className="min-w-[800px]">
        <TextField
          {...props}
          className="w-full"
          type="textarea"
          value={val}
          onChange={(text: string) => setVal(text)}
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
            if (e.code === "Enter") console.log("submit entered: " + val);
          }}
        />
      </div>
    );
  },
};

export const Currency: Story = {
  render: (props) => {
    /** useState hooks */
    const [val, setVal] = useState("");
    return (
      <div className="min-w-[800px] flex justify-center">
        <TextField
          {...props}
          type="currency"
          className="w-[400px]"
          value={val}
          outline={false}
          onChange={(text: string) => setVal(text)}
          placeholder={"5"}
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
            if (e.code === "Enter") console.log("submit entered: " + val);
          }}
        />
      </div>
    );
  },
};
