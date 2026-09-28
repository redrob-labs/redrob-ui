// Third-party packages
import type { Meta, StoryObj } from '@storybook/react';

// Custom packages
import  AutoCompleteTag  from '../components/AutoCompleteTag';

const meta = {
  title: 'Tag/Auto',
  component: AutoCompleteTag,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: `
/** useState hooks */
const [checked, setChecked] = useState(false)
return(
<AutoCompleteTag
text="label"
checked={checked}
/>    
)    
        `
      }}

  },
  tags: ['autodocs'],
  // 자동색상 설정등 추가 설정 가능
  argTypes: {},
  // onClick 함수
  args: { },

} satisfies Meta<typeof AutoCompleteTag>;

export default meta; 
type Story = StoryObj<typeof meta>;

export const CheckOff: Story = {
  args: {
   text: 'label',
   checked: false,
  },
};

export const CheckOn: Story = {
  args: {
   text: 'label',
   checked: true,
  },
};

