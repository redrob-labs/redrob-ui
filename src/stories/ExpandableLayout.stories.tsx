import React, { useEffect, useState } from 'react';
// Third-party packages
import type { Meta, StoryObj } from '@storybook/react';

// Custom packages
import Avatar from '../components/Avatar';
import Button from '../components/Button';
import Card from '../components/Card';
import Drawer from '../components/Drawer';
import ExpandableLayout from '../components/ExpandabeLayout';
import List from '../components/List';
import ListGroup from '../components/ListGroup';
import SideNavigation, { LinkItems } from '../components/SideNavigation';
import AlertBanner from '../components/SubsicribeBanner';
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
  title: 'Layout/Expandable',
  component: ExpandableLayout,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: `
/** useState hooks */
const [isOpenBanner, setIsOpenBanner] = useState(true);
const [isNavOpen, setIsNavOpen] = useState(false);
const [isPanelOpen, setIsPanelOpen] = useState(false);

const [menuStates, setMenuStates] = useState<{ [key: string]: boolean }>({
  peopleSearch: true,
  chatGPT: false,
});

/** useEffect hooks */
useEffect(() => {
  const panel = localStorage.getItem("isPanelOpen");

  if (panel === null) {
    localStorage.setItem("isPanelOpen", "false");
    setIsPanelOpen(false);
  } else {
    setIsPanelOpen(panel === "true");
  }
}, []);
useEffect(() => {
  const nav = localStorage.getItem("isNavOpen");

  if (nav === null) {
    localStorage.setItem("isNavOpen", "false");
    setIsNavOpen(false);
  } else {
    setIsNavOpen(nav === "true");
  }
}, []);
useEffect(() => {
  const banner = localStorage.getItem("isOpenBanner");

  if (banner === null) {
    localStorage.setItem("isOpenBanner", "false");
    setIsOpenBanner(false);
  } else {
    setIsOpenBanner(banner === "true");
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
  {
    label: "Notice",
    href: "/notifications",
    icon: <BellIcon />,
  },
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
  {
    label: "Settings",
    href: "/settings",
    icon: <SettingIcon />,
  },
];
/** custom handler */
const handleCloseBanner = () => {
  localStorage.setItem("isBannerOpen", "false");
  setIsPanelOpen(false);
};

const handleOpenNav = () => {
  localStorage.setItem("isNavOpen", "true");
  setIsNavOpen(true);
};

const handleCloseNav = () => {
  localStorage.setItem("isNavOpen", "false");
  setIsNavOpen(false);
};

const handleOpenPanel = () => {
  localStorage.setItem("isPanelOpen", "true");
  setIsPanelOpen(true);
};

const handleClosePanel = () => {
  localStorage.setItem("isPanelOpen", "false");
  setIsPanelOpen(false);
};

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
  <div className="min-w-[800px] flex flex-col gap-4">
    <SideNavigation
      isBannerOpen={isOpenBanner}
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
            <div className="flex items-center justify-between">
              <div className="flex gap-x-2 items-center">
                <Avatar
                  shape="circle"
                  src="https://i.pinimg.com/236x/30/15/40/301540f163d1397c150d8a6955a1d92a.jpg"
                  alt="logo"
                />
                <div className="space-y-1 truncate">
                  <label className="text-caption-semibold">Jane Doe</label>
                  <p className="text-grayscale-600 text-caption-regular truncate">
                    jane.doe@example.com
                  </p>
                </div>
              </div>

              <ArrowLineRightIcon className="text-grayscale-600" />
            </div>
          ) : (
            <Avatar
              shape="circle"
              src="https://i.pinimg.com/236x/30/15/40/301540f163d1397c150d8a6955a1d92a.jpg"
              alt="logo"
            />
          )}
        </>
      }
    />
    <Drawer
      panelOpen={isPanelOpen}
      bannerOpen={isOpenBanner}
      onClose={handleClosePanel}
    >
      <div>
        rem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not
        only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s
        with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum. Why do we use it? It is
        a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution
        of letters, as opposed to using 'Content here, content here', making
        it look like readable English. Many desktop publishing packages and
        web page editors now use Lorem Ipsum as their default model text,
        and a search for 'lorem ipsum' will uncover many web sites still in
        their infancy. Various versions have evolved over the years,
        sometimes by accident, sometimes on purpose (injected humour and the
        like). Where does it come from? Contrary to popular belief, Lorem
        Ipsum is not simply random text. It has roots in a piece of
        classical Latin literature from 45 BC, making it over 2000 years
        old. Richard McClintock, a Latin professor at Hampden-Sydney College
        in Virginia, looked up one of the more obscure Latin words,
        consectetur, from a Lorem Ipsum passage, and going through the cites
        of the word in classical literature, discovered the undoubtable
        source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
        Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32.
      </div>
    </Drawer>
    <AlertBanner
      bannerOpen={isOpenBanner}
      label="Close"
      onGoSubscribe={handleCloseBanner}
    />
    <ExpandableLayout
      {...args}
      leftNavOpen={isNavOpen}
      panelOpen={isPanelOpen}
      bannerOpen={isOpenBanner}
    >
      <div className="h-full bg-white p-4">
        <Card background="gray" className="text-caption-regular">
          <Button label="open panel" onClick={handleOpenPanel} />
        </Card>
      </div>
    </ExpandableLayout>
  </div>
);
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    banner: {
      control: false,
    },
    leftNav: {
      control: false,
    },
    children: {
      control: false,
    },
    panel: {
      control: false,
    },
  },
} satisfies Meta<typeof ExpandableLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basis: Story = {
  args: {
    banner: <></>,
    bannerOpen: false,
    leftNav: <></>,
    leftNavOpen: false,
    children: <></>,
    panel: <></>,
    panelOpen: false,
  },
  render: args => {
    /** useState hooks */
    const [isOpenBanner, setIsOpenBanner] = useState(true);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    const [menuStates, setMenuStates] = useState<{ [key: string]: boolean }>({
      peopleSearch: true,
      chatGPT: false,
    });

    useEffect(() => {
      const panel = localStorage.getItem('isPanelOpen');

      if (panel === null) {
        localStorage.setItem('isPanelOpen', 'false');
        setIsPanelOpen(false);
      } else {
        setIsPanelOpen(panel === 'true');
      }
    }, []);
    useEffect(() => {
      const nav = localStorage.getItem('isNavOpen');

      if (nav === null) {
        localStorage.setItem('isNavOpen', 'false');
        setIsNavOpen(false);
      } else {
        setIsNavOpen(nav === 'true');
      }
    }, []);
    useEffect(() => {
      const banner = localStorage.getItem('isOpenBanner');

      if (banner === null) {
        localStorage.setItem('isOpenBanner', 'false');
        setIsOpenBanner(false);
      } else {
        setIsOpenBanner(banner === 'true');
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
      {
        label: 'Notice',
        href: '/notifications',
        icon: <BellIcon />,
      },
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
      {
        label: 'Settings',
        href: '/settings',
        icon: <SettingIcon />,
      },
    ];
    /** custom handler */
    const handleCloseBanner = () => {
      localStorage.setItem('isBannerOpen', 'false');
      setIsPanelOpen(false);
    };

    const handleOpenNav = () => {
      localStorage.setItem('isNavOpen', 'true');
      setIsNavOpen(true);
    };

    const handleCloseNav = () => {
      localStorage.setItem('isNavOpen', 'false');
      setIsNavOpen(false);
    };

    const handleOpenPanel = () => {
      localStorage.setItem('isPanelOpen', 'true');
      setIsPanelOpen(true);
    };

    const handleClosePanel = () => {
      localStorage.setItem('isPanelOpen', 'false');
      setIsPanelOpen(false);
    };

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
      <div className='min-w-[800px] flex flex-col gap-4'>
        <SideNavigation
          isBannerOpen={isOpenBanner}
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
                <div className='flex items-center justify-between'>
                  <div className='flex gap-x-2 items-center'>
                    <Avatar
                      shape='circle'
                      src='https://i.pinimg.com/236x/30/15/40/301540f163d1397c150d8a6955a1d92a.jpg'
                      alt='logo'
                    />
                    <div className='space-y-1 truncate'>
                      <label className='text-caption-semibold'>Jane Doe</label>
                      <p className='text-grayscale-600 text-caption-regular truncate'>
                        jane.doe@example.com
                      </p>
                    </div>
                  </div>

                  <ArrowLineRightIcon className='text-grayscale-600' />
                </div>
              ) : (
                <Avatar
                  shape='circle'
                  src='https://i.pinimg.com/236x/30/15/40/301540f163d1397c150d8a6955a1d92a.jpg'
                  alt='logo'
                />
              )}
            </>
          }
        />
        <Drawer
          panelOpen={isPanelOpen}
          bannerOpen={isOpenBanner}
          onClose={handleClosePanel}
        >
          <div>
            rem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Why do we use it? It is
            a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in
            their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the
            like). Where does it come from? Contrary to popular belief, Lorem
            Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years
            old. Richard McClintock, a Latin professor at Hampden-Sydney College
            in Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the cites
            of the word in classical literature, discovered the undoubtable
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
            Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
            Cicero, written in 45 BC. This book is a treatise on the theory of
            ethics, very popular during the Renaissance. The first line of Lorem
            Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
            1.10.32.
          </div>
        </Drawer>
        <AlertBanner
          bannerOpen={isOpenBanner}
          label='Close'
          onGoSubscribe={handleCloseBanner}
        />
        <ExpandableLayout
          {...args}
          leftNavOpen={isNavOpen}
          panelOpen={isPanelOpen}
          bannerOpen={isOpenBanner}
        >
          <div className='h-full bg-white p-4'>
            <Card background='gray' className='text-caption-regular'>
              <Button label='open panel' onClick={handleOpenPanel} />
            </Card>
          </div>
        </ExpandableLayout>
      </div>
    );
  },
};
