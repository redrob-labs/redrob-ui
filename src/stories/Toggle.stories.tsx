// Standard packages
import React from "react";

// Third-party packages
import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "storybook/internal/preview-api";

// Custom packages
import Toggle from "../components/Toggle";
import KoreaImage from "../assets/korea.png";
import UsImage from "../assets/us.png";

const meta = {
  title: "Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        code: `
/** useState hooks */
const {english, setEnglish} = useState(false)

/** custom handlers */
const handleChangeLanguage = (newChecked: boolean) => {
  setEnglish(newChecked)
};

return (
  <Toggle checked={english} onChange={handleChangeLanguage}
  labels={[<span>한국어</span>, <span>English</span>]}
  images={[<KoreaImage />, <UsImage />]}
  />
);
        `,
      },
    },
  },
  tags: ["autodocs"],
  // 자동색상 설정등 추가 설정 가능
  argTypes: {
    labels: {
      control: false,
    },
    images: {
      control: false,
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basis: Story = {
  args: {
    checked: true,
    labels: [<span>한국어</span>, <span>English</span>],
    images: [<KoreaImage />, <UsImage />],
  },
  render: (args) => {
    const [currentArgs, updateArgs] = useArgs();
    const { checked } = currentArgs;

    const handleChangeLanguage = (newChecked: boolean) => {
      updateArgs({ checked: newChecked });
      args.onChange && args.onChange(newChecked);
    };

    return (
      <Toggle {...args} checked={checked} onChange={handleChangeLanguage} />
    );
  },
};
