// Standard packages
import React from "react";

// Third-party packages
import type { Meta, StoryObj } from "@storybook/react";

// Custom packages
import BackdropLoaderComponent from "../components/BackdropLoader";
import Backdrop from "../components/Backdrop";
import LoaderComponent from "../components/Loader";
import Button from "../components/Button";

const meta = {
  title: "Backdrop",
  component: BackdropLoaderComponent,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        code: `
<Backdrop />
<Loader />
<BackdropLoader />
        `,
      },
    },
  },
  tags: ["autodocs"],
  // 자동색상 설정등 추가 설정 가능
  argTypes: {},
} satisfies Meta<typeof BackdropLoaderComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BackdropBasis: Story = {
  render: () => {
    return (
      <div className="min-w-[800px]">
        <Backdrop />
      </div>
    );
  },
};

export const BackdropPopper: Story = {
  render: () => {
    return (
      <div className="min-w-[800px] flex justify-center">
        <Backdrop popper />
        <Button label="can not click this button" />
      </div>
    );
  },
};

export const Loader: Story = {
  render: () => {
    return (
      <div className="min-w-[800px] flex justify-center">
        <LoaderComponent />
      </div>
    );
  },
};

export const BackdropLoader: Story = {
  render: () => {
    return (
      <div className="min-w-[800px] flex justify-center">
        <BackdropLoaderComponent />
      </div>
    );
  },
};
