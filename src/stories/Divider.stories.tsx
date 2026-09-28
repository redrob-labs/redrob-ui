// Standard packages
import React from "react";

// Third-party packages
import type { Meta, StoryObj } from "@storybook/react";

// Custom packages
import Divider from "../components/Divider";
import Button from "../components/Button";

const meta = {
  title: "Divider",
  component: Divider,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        code: `
/** basic divider */
<Divider />
/** label gray divider */
<Divider label="label"
color="gray" />
/** label primary divider */
<Divider label="label"
color="primary" />
/** timestamp divider */
<Divider label="label"
timeStamp={String(new Date())}
/>
/** button label divider */
<Divide
label="label" 
button={<Button label="button" variant="grayscale-text" />}
/> 
        `,
      },
    },
  },
  tags: ["autodocs"],
  // 자동색상 설정등 추가 설정 가능
  argTypes: {
    button: {
      control: false,
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basis: Story = {
  args: {},
  render: (args) => {
    return (
      <div className="min-w-[800px]">
        <Divider {...args} />
      </div>
    );
  },
};

export const GrayDivider: Story = {
  args: {
    label: "label",
    color: "gray",
  },
  render: (args) => {
    return (
      <div className="min-w-[800px]">
        <Divider {...args} />
      </div>
    );
  },
};

export const PrimaryDivider: Story = {
  args: {
    label: "label",
    color: "primary",
  },
  render: (args) => {
    return (
      <div className="min-w-[800px]">
        <Divider {...args} />
      </div>
    );
  },
};

export const TimeStampDivdier: Story = {
  args: {
    label: "label",
    timeStamp: String(new Date()),
  },
  render: (args) => {
    return (
      <div className="min-w-[800px]">
        <Divider {...args} />
      </div>
    );
  },
};

export const ButtonDivider: Story = {
  args: {
    label: "label",
    button: <Button label="button" variant="grayscale-text" />,
  },
  render: (args) => {
    return (
      <div className="min-w-[800px]">
        <Divider {...args} />
      </div>
    );
  },
};
