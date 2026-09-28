// Standard packages
import React from 'react';

// Third-party packages
import type { Meta, StoryObj } from '@storybook/react';

// Custom packages
import NotificationBanner from '../components/NotificationBanner';

const meta = {
  title: 'Banner/Notification',
  component: NotificationBanner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // 자동색상 설정등 추가 설정 가능
  argTypes: {
    notices: {
      control: false,
    },
  },
} satisfies Meta<typeof NotificationBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basis: Story = {
  args: {
    notices: [
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eversince the 1500s, when an unknown printer took a galley of type and`,
      `It was popularised in the 1960s with the release
      of Letraset sheets containing Lorem Ipsum passages, and more recently`,
    ],
  },
  render: args => {
    return (
      <div className='bg-primary-400 px-4'>
        <NotificationBanner {...args} />
      </div>
    );
  },
};
