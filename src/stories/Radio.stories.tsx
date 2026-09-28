/** Standard packages */
import React from "react";

/** Third-party packages */
import type { Meta, StoryObj } from "@storybook/react";

/** Custom packages */
import Radio, { RadioOptionType } from "../components/Radio";

const meta: Meta<typeof Radio> = {
  title: "Radio",
  component: Radio,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        code: `
const handleRadioChange = (selected: OptionType) => {
  console.log(selected?.value);
};

return (
  <div className="flex gap-x-4">
    <Radio
      label="Label"
      options$[
        {
          content: <div>Start up</div>,
          value: "startup",
          disabled: true,
          checked: true,
        },
        {
          content: <div>Student</div>,
          value: "student",
          disabled: true,
          checked: false,
        },
      ]}
      onChange={handleRadioChange}
    />
    <Radio
      label="Label"
      options={[
        {
          content: <div>Business</div>,
          value: "business",
        },
        {
          content: <div>Enterprise</div>,
          value: "enterprise",
        },
      ]}
      onChange={handleRadioChange}
    />
  </div>
);   
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Basis: Story = {
  render: () => {
    const handleRadioChange = (selected: RadioOptionType) => {
      console.log(`Value: ${selected?.value}`);
    };

    return (
      <div className="flex gap-x-4">
        <Radio
          label="Label"
          options={[
            {
              content: <div>Start up</div>,
              value: "startup",
              disabled: true,
              checked: true,
            },
            {
              content: <div>Student</div>,
              value: "student",
              disabled: true,
              checked: false,
            },
          ]}
          onChange={handleRadioChange}
        />
        <Radio
          label="Label"
          options={[
            {
              content: <div>Business</div>,
              value: "business",
            },
            {
              content: <div>Enterprise</div>,
              value: "enterprise",
            },
          ]}
          onChange={handleRadioChange}
        />
      </div>
    );
  },
};
