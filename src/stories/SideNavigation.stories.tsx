// Standard packages
import React, { useEffect, useState } from 'react';
// Third-party packages
import type { Meta, StoryObj } from '@storybook/react';

// Custom packages
import Button from '../components/Button';
import SideNavigation, { LinkItems } from '../components/SideNavigation';

import Avatar from '../components/Avatar';
import List from '../components/List';
import ListGroup from '../components/ListGroup';
import Tooltip from '../components/Tooltip';
import {
  ArrowLineRightIcon,
  BellIcon,
  ChatIcon,
  DataIcon,
  MessageIcon,
  PersonFrameIcon,
  SettingIcon,
  WalletIcon,
} from '../icons';

const meta = {
  title: 'SideNavigation',
  component: SideNavigation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SideNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basis: Story = {
  args: {
    logoURL: '',
    logoName: '',
    leftNavOpen: false,
    handleCloseNav: () => {},
    menusLayout: <></>,
    linkLayout: <></>,
  },
  parameters: {
    docs: {
      source: {
        code: `
/** useState hooks */
const [isNavOpen, setIsNavOpen] = useState(false);

const [menuStates, setMenuStates] = useState<{ [key: string]: boolean }>({
  peopleSearch: true,
  chatGPT: false,
});

/** useEffect hooks */
useEffect(() => {
  const nav = localStorage.getItem("isNavOpen");

  if (nav === null) {
    localStorage.setItem("isNavOpen", "false");
    setIsNavOpen(false);
  } else {
    setIsNavOpen(nav === "true");
  }
}, []);
/** const */
const menus = [
  {
    key: "peopleSearch",
    title: "People Search",
    icon: <PersonFrameIcon />,
    subItems: [
      { label: "Find Talents", href: "/sidenavigation--basis" },
      { label: "Saved Profiles", href: "/questions" },
      { label: "Meeting Request", href: "/app/meetings" },
    ],
    href: "/talents",
  },
  {
    key: "chatGPT",
    title: "ChatGPT",
    icon: <ChatIcon />,
    subItems: [
      { label: "Chat GPT 1", href: "/chatGPT1" },
      { label: "Chat GPT 2", href: "/chatGPT2" },
    ],
    href: "/chatGPT1",
  },
];
const links = [
  { label: "Notice", href: "/notifications", icon: <BellIcon /> },
  {
    label: "Campaigns",
    href: "/campaigns",
    icon: <MessageIcon />,
  },
  { label: "Wallet", href: "/wallet", icon: <WalletIcon /> },
  {
    label: "Data Integration",
    href: "/data",
    icon: <DataIcon />,
  },
  { label: "Settings", href: "/settings", icon: <SettingIcon /> },
];
/** custom handler */
const handleOpenNav = () => {
  setIsNavOpen(true);
  localStorage.setItem("isNavOpen", "true");
};
const handleCloseNav = () => {
  setIsNavOpen(false);
  localStorage.setItem("isNavOpen", "false");
};
const toggleMenu = (menuKey: string) => {
  setMenuStates((prev) =>
    Object.keys(prev).reduce(
      (newState, key) => ({
        ...newState,
        [key]: key === menuKey ? !prev[key] : false,
      }),
      {}
    )
  );
};

return (
  <div className="min-w-[800px] flex justify-center">
    <Button label="Side navigation open" onClick={handleOpenNav} />
    <SideNavigation
      {...args}
      leftNavOpen={isNavOpen}
      handleCloseNav={handleCloseNav}
      logoURL="https://i.pinimg.com/236x/30/15/40/301540f163d1397c150d8a6955a1d92a.jpg"
      logoName="Redrob"
      menusLayout={
        <>
          {menus.map((item) =>
            isNavOpen ? (
              <ListGroup
                key={item.key}
                menuTitle={item.title}
                menuIcon={item.icon}
                subListCount={item.subItems.length}
                open={menuStates[item.key]}
                onClick={() => toggleMenu(item.key)}
                subLists={
                  <div className="space-y-1">
                    {item.subItems.map((subItem) => (
                      <List
                        key={subItem.label}
                        title={subItem.label}
                        subList
                        href={subItem.href}
                        selected={"path=/story/sidenavigation--basis".includes(
                          subItem.href
                        )}
                      />
                    ))}
                  </div>
                }
              />
            ) : (
              <List
                key={item?.title}
                selected={menuStates[item.key]}
                endAdornment={
                  !isNavOpen ? (
                    <Tooltip label={item?.title} position="right">
                      {item?.icon}
                    </Tooltip>
                  ) : undefined
                }
                href={item?.href}
              />
            )
          )}
        </>
      }
      linkLayout={
        <>
          {links.map((item: LinkItems) => (
            <List
              key={item?.label}
              startAdornment={isNavOpen ? item?.icon : undefined}
              endAdornment={
                !isNavOpen ? (
                  <Tooltip label={item?.label} position="right">
                    {item?.icon}
                  </Tooltip>
                ) : undefined
              }
              title={isNavOpen ? item?.label : undefined}
              href={item?.href}
            />
          ))}
        </>
      }
      profileLayout={
        <>
          {isNavOpen ? (
            <div className="rounded flex gap-x-2 items-center">
              <Avatar
                shape="circle"
                src="https://i.pinimg.com/236x/30/15/40/301540f163d1397c150d8a6955a1d92a.jpg"
                alt="logo"
              />
              <div className="truncate">
                <span className="text-grayscale-700 text-caption-semibold">
                  Jane Doe
                </span>
                <p className="text-grayscale-500 text-caption-regular truncate">
                  jane.doe@example.com
                </p>
              </div>
              <ArrowLineRightIcon className="text-grayscale-600" />
            </div>
          ) : (
            <div>
              <Avatar
                shape="circle"
                src="https://i.pinimg.com/236x/30/15/40/301540f163d1397c150d8a6955a1d92a.jpg"
                alt="logo"
              />
            </div>
          )}
        </>
      }
    />
  </div>
);
        `,
      },
    },
  },
  render: args => {
    /** useState hooks */
    const [isNavOpen, setIsNavOpen] = useState(false);

    const [menuStates, setMenuStates] = useState<{ [key: string]: boolean }>({
      peopleSearch: true,
      chatGPT: false,
    });

    /** useEffect hooks */
    useEffect(() => {
      const nav = localStorage.getItem('isNavOpen');

      if (nav === null) {
        localStorage.setItem('isNavOpen', 'false');
        setIsNavOpen(false);
      } else {
        setIsNavOpen(nav === 'true');
      }
    }, []);
    /** const */
    const menus = [
      {
        key: 'peopleSearch',
        title: 'People Search',
        icon: <PersonFrameIcon />,
        subItems: [
          { label: 'Find Talents', href: '/sidenavigation--basis' },
          { label: 'Saved Profiles', href: '/questions' },
          { label: 'Meeting Request', href: '/app/meetings' },
        ],
        href: '/talents',
      },
      {
        key: 'chatGPT',
        title: 'ChatGPT',
        icon: <ChatIcon />,
        subItems: [
          { label: 'Chat GPT 1', href: '/chatGPT1' },
          { label: 'Chat GPT 2', href: '/chatGPT2' },
        ],
        href: '/chatGPT1',
      },
    ];
    const links = [
      { label: 'Notice', href: '/notifications', icon: <BellIcon /> },
      {
        label: 'Campaigns',
        href: '/campaigns',
        icon: <MessageIcon />,
      },
      { label: 'Wallet', href: '/wallet', icon: <WalletIcon /> },
      {
        label: 'Data Integration',
        href: '/data',
        icon: <DataIcon />,
      },
      { label: 'Settings', href: '/settings', icon: <SettingIcon /> },
    ];
    /** custom handler */
    const handleOpenNav = () => {
      setIsNavOpen(true);
      localStorage.setItem('isNavOpen', 'true');
    };
    const handleCloseNav = () => {
      setIsNavOpen(false);
      localStorage.setItem('isNavOpen', 'false');
    };
    const toggleMenu = (menuKey: string) => {
      setMenuStates(prev =>
        Object.keys(prev).reduce(
          (newState, key) => ({
            ...newState,
            [key]: key === menuKey ? !prev[key] : false,
          }),
          {}
        )
      );
    };

    return (
      <div className='min-w-[800px] flex justify-center'>
        <Button label='Side navigation open' onClick={handleOpenNav} />
        <SideNavigation
          {...args}
          leftNavOpen={isNavOpen}
          handleCloseNav={handleCloseNav}
          logoURL='https://i.pinimg.com/236x/30/15/40/301540f163d1397c150d8a6955a1d92a.jpg'
          logoName='Redrob'
          menusLayout={
            <>
              {menus.map(item =>
                isNavOpen ? (
                  <ListGroup
                    key={item.key}
                    menuTitle={item.title}
                    menuIcon={item.icon}
                    subListCount={item.subItems.length}
                    open={menuStates[item.key]}
                    onClick={() => toggleMenu(item.key)}
                    subLists={
                      <div className='space-y-1'>
                        {item.subItems.map(subItem => (
                          <List
                            key={subItem.label}
                            title={subItem.label}
                            subList
                            href={subItem.href}
                            selected={'path=/story/sidenavigation--basis'.includes(
                              subItem.href
                            )}
                          />
                        ))}
                      </div>
                    }
                  />
                ) : (
                  <List
                    key={item?.title}
                    selected={menuStates[item.key]}
                    endAdornment={
                      !isNavOpen ? (
                        <Tooltip label={item?.title} position='right'>
                          {item?.icon}
                        </Tooltip>
                      ) : undefined
                    }
                    href={item?.href}
                  />
                )
              )}
            </>
          }
          linkLayout={
            <>
              {links.map((item: LinkItems) => (
                <List
                  key={item?.label}
                  startAdornment={isNavOpen ? item?.icon : undefined}
                  endAdornment={
                    !isNavOpen ? (
                      <Tooltip label={item?.label} position='right'>
                        {item?.icon}
                      </Tooltip>
                    ) : undefined
                  }
                  title={isNavOpen ? item?.label : undefined}
                  href={item?.href}
                />
              ))}
            </>
          }
          profileLayout={
            <>
              {isNavOpen ? (
                <div className='rounded flex gap-x-2 items-center'>
                  <Avatar
                    shape='circle'
                    src='https://i.pinimg.com/236x/30/15/40/301540f163d1397c150d8a6955a1d92a.jpg'
                    alt='logo'
                  />
                  <div className='truncate'>
                    <span className='text-grayscale-700 text-caption-semibold'>
                      Jane Doe
                    </span>
                    <p className='text-grayscale-500 text-caption-regular truncate'>
                      jane.doe@example.com
                    </p>
                  </div>
                  <ArrowLineRightIcon className='text-grayscale-600' />
                </div>
              ) : (
                <div>
                  <Avatar
                    shape='circle'
                    src='https://i.pinimg.com/236x/30/15/40/301540f163d1397c150d8a6955a1d92a.jpg'
                    alt='logo'
                  />
                </div>
              )}
            </>
          }
        />
      </div>
    );
  },
};
