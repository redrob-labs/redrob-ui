// Standard packages
import React from "react";

// Third-party packages
import type { Meta, StoryObj } from "@storybook/react";

// Custom packages
import UploadFile from "../components/UploadFile";
import UploadItem from "../components/UploadItem";

const meta = {
  title: "Upload/File",
  component: UploadFile,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof UploadFile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basis: Story = {
  args: {},
  render: (args) => {
    return <UploadFile />;
  },
};

export const UploadFileItem: Story = {
  args: {},
  render: (args) => {
    return (
      <div className="min-w-[800px]">
        <UploadItem
          fileName={"upload file name"}
          fileSize={"0.05"}
          index={0}
          extension={"PDF"}
        />
      </div>
    );
  },
};
