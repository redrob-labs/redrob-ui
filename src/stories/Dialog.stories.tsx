// Standard packages
import React from 'react';

// Third-party packages
import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from 'storybook/internal/preview-api';

// Custom packages
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import Dialog from '../components/Dialog';

const meta = {
  title: 'Dialog/Basis',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
    },
    onClose: { action: 'closed' },
    disableGutters: {
      control: false,
    },
    maxWidth: {
      control: false,
    },
    children: {
      control: false,
    },
  },
  args: {
    open: false,
    title: 'Title',
    alignActions: 'right',
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Confirm: Story = {
  render: args => {
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
        <Button onClick={handleOpen} label='Open Confirm Dialog' />

        {/* 모달 */}
        <Dialog
          {...args}
          open={open} // Storybook Controls 상태에 따라 동작
          onClose={handleClose}
          onConfirm={() => {
            updateArgs({ open: false }); // `open` 상태 업데이트
            args.onConfirm && args.onConfirm(); // Storybook 액션 호출
          }}
          onCancel={() => {
            updateArgs({ open: false }); // `open` 상태 업데이트
            args.onCancel && args.onCancel(); // Storybook 액션 호출
          }}
        >
          <>
            <p className='pb-10'>Description</p>
            <div
              className='flex flex-col pt-6'
              style={{
                gap: '16px 0',
              }}
            >
              <div className='flex gap-x-2 items-center'>
                <Checkbox
                  {...args}
                  value='option'
                  disabled
                  onChange={() => {}}
                  content={<span className='text-label-semibold'>option</span>}
                />
              </div>
              <div className='flex gap-x-2 items-center'>
                <Checkbox
                  {...args}
                  value='option'
                  disabled
                  onChange={() => {}}
                  content={<span className='text-label-semibold'>option</span>}
                />
              </div>
              <div className='flex gap-x-2 items-center'>
                <Checkbox
                  {...args}
                  value='option'
                  disabled
                  onChange={() => {}}
                  content={<span className='text-label-semibold'>option</span>}
                />
              </div>
            </div>
          </>
        </Dialog>
      </>
    );
  },
};

export const Destroy: Story = {
  render: args => {
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
        <Button onClick={handleOpen} label='Open Destroy Dialog' />

        {/* 모달 */}
        <Dialog
          {...args}
          open={open}
          onClose={handleClose}
          onDestroy={() => {
            updateArgs({ open: false }); // `open` 상태 업데이트
            args.onDestroy && args.onDestroy(); // Storybook 액션 호출
          }}
          onCancel={() => {
            updateArgs({ open: false }); // `open` 상태 업데이트
            args.onCancel && args.onCancel(); // Storybook 액션 호출
          }}
        >
          <>
            <p className='pb-10'>Description</p>
          </>
        </Dialog>
      </>
    );
  },
};

export const Cancel: Story = {
  render: args => {
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
        <Button onClick={handleOpen} label='Open Cancel Dialog' />
        {/* 모달 */}
        <Dialog
          {...args}
          open={open} // Storybook Controls 상태에 따라 동작
          onClose={handleClose}
          onCancel={() => {
            updateArgs({ open: false }); // `open` 상태 업데이트
            args.onCancel && args.onCancel(); // Storybook 액션 호출
          }}
        >
          <>
            <p className='pb-10'>Description</p>
          </>
        </Dialog>
      </>
    );
  },
};

export const Reset: Story = {
  render: args => {
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
        <Button onClick={handleOpen} label='Open Reset Dialog' />

        {/* 모달 */}
        <Dialog
          {...args}
          open={open} // Storybook Controls 상태에 따라 동작
          labelConfirm='Button'
          labelCancel='Cancel'
          onClose={handleClose}
          onReset={() => {
            updateArgs({ open: false }); // `open` 상태 업데이트
            args.onReset && args.onReset(); // Storybook 액션 호출
          }}
          onConfirm={() => {
            updateArgs({ open: false }); // `open` 상태 업데이트
            args.onConfirm && args.onConfirm(); // Storybook 액션 호출
          }}
          onCancel={() => {
            updateArgs({ open: false }); // `open` 상태 업데이트
            args.onCancel && args.onCancel(); // Storybook 액션 호출
          }}
        >
          <>
            <p className='pb-10'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publis Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publis
            </p>
            <div
              className='flex flex-col pt-6'
              style={{
                gap: '16px 0',
              }}
            >
              <div className='flex gap-x-2 items-center'>
                <Checkbox
                  {...args}
                  value='option'
                  disabled
                  onChange={() => {}}
                  content={<span className='text-label-semibold'>option</span>}
                />
              </div>
              <div className='flex gap-x-2 items-center'>
                <Checkbox
                  {...args}
                  value='option'
                  disabled
                  onChange={() => {}}
                  content={<span className='text-label-semibold'>option</span>}
                />
              </div>
              <div className='flex gap-x-2 items-center'>
                <Checkbox
                  {...args}
                  value='option'
                  disabled
                  onChange={() => {}}
                  content={<span className='text-label-semibold'>option</span>}
                />
              </div>
            </div>
          </>
        </Dialog>
      </>
    );
  },
};
