// Standard packages
import React from "react";

// Third-party packages
import type { Meta, StoryObj } from "@storybook/react";

// Custom packages
import { EmptyState } from "../components/EmptyState";
import Button from "../components/Button";
import NoResultImage from "../assets/noResult.png";

const meta = {
  title: "EmptyState",
  component: EmptyState,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        code: `
/** small */
<EmptyState
button={<Button label="Button" size="small"/>}
content="content"
image
title="title"
/>
/** large */
<EmptyState
button={<Button label="Button" size="small"/>}
content="content"
image
title="title"
titleVariant="h3"
/>
      `,
      },
    },
  },
  tags: ["autodocs"],
  // 자동색상 설정등 추가 설정 가능
  argTypes: {},
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallContent: Story = {
  args: {
    image: (
      <img src={NoResultImage} alt="noResult" className="w-[213px] h-[124px]" />
    ),
    title: "title",
    content: "content",
    button: <Button label="Button" size="small" />,
  },
  render: (args) => (
    <div className="min-w-[800px] flex flex-col gap-4">
      <EmptyState {...args} />
    </div>
  ),
};

export const LargeContent: Story = {
  args: {
    image: (
      <img src={NoResultImage} alt="noResult" className="w-[213px] h-[124px]" />
    ),
    title: "title",
    content: "content",
    button: <Button label="Button" size="large" />,
    titleVariant: "h3",
  },
  render: (args) => (
    <div className="min-w-[800px] flex flex-col gap-4">
      <EmptyState {...args} />
    </div>
  ),
};
