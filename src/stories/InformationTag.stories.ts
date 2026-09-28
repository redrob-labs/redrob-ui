// Third-party packages
import type { Meta, StoryObj } from '@storybook/react';

// Custom packages
import  InformationTag  from '../components/InformationTag';

const meta = {
  title: 'Tag/Information',
  component: InformationTag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // 자동색상 설정등 추가 설정 가능
  argTypes: {},
  // onClick 함수
  args: { },

} satisfies Meta<typeof InformationTag>;

export default meta; 
type Story = StoryObj<typeof meta>;

export const GrayscaleInfo: Story = {
  args: {
   text: 'label',
    variant:'grayscaleInfo'
  },
};

export const PrimaryInfo: Story = {
  args: {
   text: 'label',
    variant:'primaryInfo'
  },
};

export const SecondaryInfo: Story = {
  args: {
   text: 'label',
    variant:'secondaryInfo'
  },
};

export const AccentInfo: Story = {
  args: {
   text: 'label',
    variant:'accentInfo'
  },
};