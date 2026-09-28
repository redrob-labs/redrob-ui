// Standard packages
import React from "react";

// Third-party packages
import type { Meta, StoryObj } from "@storybook/react";

// Custom packages
import ToastProvider, { showCustomToast } from "../components/ToastProvider";
import Button from "../components/Button";

const meta = {
  title: "ToastProvider",
  component: ToastProvider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ToastProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basis: Story = {
  args: {},
  render: (args) => {
    return (
      <div>
        <div className="flex flex-col gap-y-2">
          <Button
            label="success no-button"
            onClick={() =>
              showCustomToast({
                message: "message",
                type: "success",
              })
            }
          />
          <Button
            label="error no-button"
            onClick={() =>
              showCustomToast({
                message: "message",
                type: "error",
              })
            }
          />
          <Button
            label="info no-button"
            onClick={() =>
              showCustomToast({
                message: "message",
                type: "info",
              })
            }
          />
          <Button
            label="warning no-button"
            onClick={() =>
              showCustomToast({
                message: "message",
                type: "warning",
              })
            }
          />
          <Button
            label="success"
            onClick={() =>
              showCustomToast({
                message: "message",
                type: "success",
                showButton: true,
              })
            }
          />
          <Button
            label="error"
            onClick={() =>
              showCustomToast({
                message: "message",
                type: "error",
                showButton: true,
              })
            }
          />
          <Button
            label="info"
            onClick={() =>
              showCustomToast({
                message: "message",
                type: "info",
                showButton: true,
              })
            }
          />
          <Button
            label="warning"
            onClick={() =>
              showCustomToast({
                message: "message",
                type: "warning",
                showButton: true,
              })
            }
          />
        </div>
        <ToastProvider />
      </div>
    );
  },
};
