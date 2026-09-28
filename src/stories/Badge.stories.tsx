// Standard packages
import React from "react";

// Third-party packages
import type { Meta, StoryObj } from "@storybook/react";

// Custom packages
import Badge from "../components/Badge";
import { AssessmentIcon, MenuIcon } from "../icons";
import IconButton from "../components/IconButton";
import FloatingButton from "../components/FloatingButton";

const meta = {
  title: "Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        code: `
/** notice badge */
<Badge
notice
topPadding="icon"
>
<IconButton
  adornment={<MenuIcon />}
  name="menu"
/>
</Badge>
/** floating badge */
<Badge
count={111}
topPadding="floating"
>
<FloatingButton
label="Label"
adornment={<IconButton adornment={<AssessmentIcon />} name="menu" />}
/>
</Badge>
        `,
      },
    },
  },

  tags: ["autodocs"],
  argTypes: {
    topPadding: {
      control: false,
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconNotice: Story = {
  args: {
    children: <IconButton adornment={<MenuIcon />} name="menu" />,
    topPadding: "icon",
    notice: true,
  },

  render: (args) => {
    return <Badge {...args} />;
  },
};
export const FloatingCount: Story = {
  args: {
    children: (
      <FloatingButton
        label="Label"
        adornment={<IconButton adornment={<AssessmentIcon />} name="menu" />}
      />
    ),
    count: 111,
    topPadding: "floating",
  },
  render: (args) => {
    return <Badge {...args} />;
  },
};
