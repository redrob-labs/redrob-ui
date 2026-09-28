// Standard packages
import React, { useState } from 'react';

// Third-party packages
import type { Meta, StoryObj } from '@storybook/react';

// Custom packages
import List from '../components/List';
import ListGroup from '../components/ListGroup';
import { MagicWandIcon, PersonFrameIcon } from '../icons';

const meta = {
  title: 'List/Group',
  component: ListGroup,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: `
/** useState hooks */
  const [menuStates, setMenuStates] = useState<{ [key: string]: boolean }>({
    peopleSearch: true,
    chatGPT: false,
  });
/** custom handlers */
  const toggleMenu = (menuKey: string) => {
    setMenuStates((prev) =>
      Object.keys(prev).reduce(
        (newState, key) => ({
          ...newState,
          [key]: key === menuKey ? !prev[key] : false, // 선택된 key는 토글, 나머지는 false
        }),
        {}
      )
    );
  };

  return (
    <div className="min-w-[800px] space-y-1">
      <ListGroup
        menuTitle={"People Search"}
        menuIcon={<PersonFrameIcon className="text-grayscale-600" />}
        subListCount={3}
        selected={menuStates["peopleSearch"]}
        onClick={() => toggleMenu("peopleSearch")}
        subLists={
          <div className="space-y-1">
            <List key={"Find Talents"} title={"Saved Profiles"} subList />
            <List key={"Find Talents"} title={"Find Talents"} subList />
            <List key={"Meeting Request"} title={"Meeting Request"} subList />
          </div>
        }
      />
      <ListGroup
        menuTitle={"ChatGPT"}
        menuIcon={<MagicWandIcon />}
        subListCount={3}
        selected={menuStates["chatGPT"]}
        onClick={() => toggleMenu("chatGPT")}
        subLists={
          <div className="space-y-1">
            <List key={"Chat GPT 1"} title={"Chat GPT 1"} subList />
            <List key={"Chat GPT 2"} title={"Chat GPT 2"} subList />
          </div>
        }
      />
    </div>
  );
        `,
      },
    },
  },
  tags: ['autodocs'],
  // 자동색상 설정등 추가 설정 가능
  argTypes: {
    menuTitle: {
      control: false,
    },
    menuIcon: {
      control: false,
    },
    open: {
      control: false,
    },
    subListCount: {
      control: false,
    },
    subLists: {
      control: false,
    },
  },
} satisfies Meta<typeof ListGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basis: Story = {
  args: {
    menuTitle: 'People Search',
    menuIcon: <PersonFrameIcon />,
    open: false,
    subListCount: 0,
    subLists: <></>,
    onClick: () => {},
  },
  render: args => {
    /** useState hooks */
    const [menuStates, setMenuStates] = useState<{ [key: string]: boolean }>({
      peopleSearch: true,
      chatGPT: false,
    });
    /** custom handler */
    const toggleMenu = (menuKey: string) => {
      setMenuStates(prev =>
        Object.keys(prev).reduce(
          (newState, key) => ({
            ...newState,
            [key]: key === menuKey ? !prev[key] : false, // 선택된 key는 토글, 나머지는 false
          }),
          {}
        )
      );
    };

    return (
      <div className='min-w-[800px] space-y-1'>
        <ListGroup
          menuTitle={'People Search'}
          menuIcon={<PersonFrameIcon />}
          subListCount={3}
          open={menuStates['peopleSearch']}
          onClick={() => toggleMenu('peopleSearch')}
          subLists={
            <div className='space-y-1'>
              <List key={'Find Talents'} title={'Saved Profiles'} subList />
              <List key={'Find Talents'} title={'Find Talents'} subList />
              <List key={'Meeting Request'} title={'Meeting Request'} subList />
            </div>
          }
        />
        <ListGroup
          menuTitle={'ChatGPT'}
          menuIcon={<MagicWandIcon />}
          subListCount={3}
          open={menuStates['chatGPT']}
          onClick={() => toggleMenu('chatGPT')}
          subLists={
            <div className='space-y-1'>
              <List key={'Chat GPT 1'} title={'Chat GPT 1'} subList />
              <List key={'Chat GPT 2'} title={'Chat GPT 2'} subList />
            </div>
          }
        />
      </div>
    );
  },
};
