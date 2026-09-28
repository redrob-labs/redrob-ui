// Standard packages
import React from "react";

// Third-party packages
import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";

// Custom packages
import Dialog from "../components/Dialog";
import Button from "../components/Button";
import TemplateImage from "../assets/template.png";

const meta = {
  title: "Dialog/Modal",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
    },
    onConfirm: { action: "confirmed" },
    onClose: { action: "closed" },
    disableGutters: {
      control: false,
    },
    maxWidth: {
      control: false,
    },
    labelCancel: {
      control: false,
    },
    labelLater: {
      control: false,
    },
    labelDestroy: {
      control: false,
    },
    children: {
      control: false,
    },
  },
  args: {
    open: false,
    title: "Title",
    alignActions: "vertical",
    labelConfirm: "Button",
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Modal: Story = {
  render: (args) => {
    const [currentArgs, updateArgs] = useArgs(); // args는 항상 초기 상태를 참조
    const { open } = currentArgs;

    const handleOpen = () => {
      updateArgs({ open: true }); // Storybook Controls 상태 업데이트
    };

    const handleClose = () => {
      updateArgs({ open: false }); // Storybook Controls 상태 업데이트
      args.onClose && args.onClose(); // Storybook 액션 호출
    };

    return (
      <>
        {/* 모달 열기 버튼 */}
        <Button onClick={handleOpen} label="Open Modal" />

        {/* 모달 */}
        <Dialog
          {...args}
          open={open} // Storybook Controls 상태에 따라 동작
          onClose={handleClose}
          onConfirm={() => {
            updateArgs({ open: false }); // `open` 상태 업데이트
            args.onConfirm && args.onConfirm(); // Storybook 액션 호출
          }}
        >
          <>
            <p className="pb-10">Description</p>
            <div className="flex justify-center">
              <img
                src={TemplateImage}
                alt="Template"
                style={{
                  width: "200px",
                }}
              />
            </div>
          </>
        </Dialog>
      </>
    );
  },
};
