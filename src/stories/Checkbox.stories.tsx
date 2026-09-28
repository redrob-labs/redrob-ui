// Standard packages
import React, { ReactElement, useEffect, useState } from 'react';

// Third-party packages
import type { Meta, StoryObj } from '@storybook/react';
import clsx from 'clsx';

// Custom packages
import { Card } from '../components/Card';
import Checkbox from '../components/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: `
/** multi checkbox */

/** useState hooks */
const [checkboxState, setCheckboxState] = useState({
  red: false,
  rob: false,
});

/** custom handlers */
const handleCheckboxChange = (
  checked: boolean,
  meta?: { value?: string; content?: ReactElement }
) => {
  if (meta) {
    const { value, content } = meta;

    // check state update
    setCheckboxState((prevState) => ({
      ...prevState,
      [String(meta?.value)]: checked,
    }));
  }
};

return (
  <div className="space-y-2">
    <div className="flex gap-x-2 items-center">
      <Checkbox
        {...args}
        value="red"
        checked={checkboxState.red}
        onChange={handleCheckboxChange}
        content={
          <Card background="gradient" className='text-caption-regular'>
            <div className="w-[300px] text-label-semibold">red</div>
          </Card>
        }
      />
    </div>
    <div className="flex gap-x-2 items-center">
      <Checkbox
        {...args}
        value="rob"
        checked={checkboxState.rob}
        onChange={handleCheckboxChange}
        content={<span className="text-label-semibold">rob</span>}
      />
    </div>
  </div>
);
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: false,
    },
    content: {
      control: false,
    },
  },
  args: {
    checked: false,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Single: Story = {
  render: args => {
    /** useState hook */
    const [checked, setChecked] = useState(args.checked);
    /** useEfffect hook */
    useEffect(() => {
      setChecked(args.checked);
    }, [args.checked]); // args control

    const handleCheckboxChange = (
      // component control
      checked: boolean,
      meta?: { value?: string; label?: string }
    ) => {
      setChecked(checked);
      args.onChange?.(checked);
      if (meta) {
        console.log(
          `Label: ${meta.label}, Value: ${meta.value}, Checked: ${checked}`
        );
      }
    };

    return (
      <Checkbox
        {...args}
        checked={checked}
        disabled={args.disabled}
        checkedIntermediate={args.checkedIntermediate}
        onChange={handleCheckboxChange}
        content={<div className={clsx(['text-label-semibold'])}>red</div>}
      />
    );
  },
};
export const Multi: Story = {
  argTypes: {
    checked: {
      control: false,
    },
    disabled: {
      control: false,
    },
    name: {
      control: false,
    },
  },
  render: args => {
    const [checkboxState, setCheckboxState] = useState({
      red: false,
      rob: false,
    });

    const handleCheckboxChange = (
      checked: boolean,
      meta?: { value?: string; content?: ReactElement }
    ) => {
      if (meta) {
        const { value, content } = meta;

        // 체크 상태 업데이트
        setCheckboxState(prevState => ({
          ...prevState,
          [String(meta?.value)]: checked,
        }));

        // Alert로 label과 value 출력
        console.log(`Label: ${content}, Value: ${value}, Checked: ${checked}`);
      }
    };

    return (
      <div className='space-y-2'>
        <div className='flex gap-x-2 items-center'>
          <Checkbox
            {...args}
            value='red'
            checked={checkboxState.red}
            onChange={handleCheckboxChange}
            content={
              <Card background='gradient' className='text-caption-regular'>
                <div className='w-[300px] text-label-semibold'>red</div>
              </Card>
            }
          />
        </div>
        <div className='flex gap-x-2 items-center'>
          <Checkbox
            {...args}
            value='rob'
            checked={checkboxState.rob}
            onChange={handleCheckboxChange}
            content={<span className='text-label-semibold'>rob</span>}
          />
        </div>
      </div>
    );
  },
};
