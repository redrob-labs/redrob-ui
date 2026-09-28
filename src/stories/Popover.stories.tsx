// Standard packages
import React from "react";

// Third-party packages
import type { Meta, StoryObj } from "@storybook/react";

// Custom packages
import Popover from "../components/Popover";
import { MenuIcon } from "../icons";
import IconButton from "../components/IconButton";
import List from "../components/List";

const meta = {
  title: "Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    pannel: {
      control: false,
    },
    button: {
      control: false,
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    size: "medium",
    position: "right",
    pannel: (
      <div className="space-y-1">
        <List title={"Notice"} className="px-2" rounded="rounded-t" />
        <List title={"Campaigns"} className="px-2" rounded="rounded-y" />
        <List title={"Wallet"} className="px-2" rounded="rounded-y" />
        <List title={"Data Integration"} className="px-2" rounded="rounded-y" />
        <List title={"Settings"} className="px-2" rounded="rounded-b" />
      </div>
    ),
    button: <IconButton outline adornment={<MenuIcon />} name="menu" />,
  },
  render: (args) => <Popover {...args}>{args.pannel}</Popover>,
};
