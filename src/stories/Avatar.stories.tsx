// Standard packages
import React from 'react';

// Third-party packages
import type { Meta, StoryObj } from '@storybook/react';

// Custom packages
import AboutMeImage from '../assets/aboutme.png';
import AngellistImage from '../assets/angellist.png';
import CruncBaseImage from '../assets/crunchbase.png';
import FacebookImage from '../assets/facebook.png';
import GithubImage from '../assets/github.png';
import IndiaImage from '../assets/india.png';
import KoreaImage from '../assets/korea.png';
import LinkedInImage from '../assets/linkedin.png';
import QuoraImage from '../assets/quora.png';
import TwitterImage from '../assets/twitter.png';
import UsImage from '../assets/us.png';
import Avatar from '../components/Avatar';
import GroupAvatar from '../components/GroupAvatar';
import { AssessmentIcon } from '../icons';
const meta = {
  title: 'Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: `
/** image avatar */
<Avatar 
alt={"avatar"}
src={"https://i.pinimg.com/236x/30/15/40/301540f163d1397c150d8a6955a1d92a.jpg"} />
/** icon, reverse, info avatar */
<Avatar 
alt={"avatar"}
variant={"accent-icon-reverse"}
icon={<AssessmentIcon />} />
/** group avatar */
<GroupAvatar size={"small"} avatars={avatars} />
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    style: {
      control: false,
    },
    className: {
      control: false,
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basis: Story = {
  argTypes: {
    variant: {
      control: false,
    },
    icon: {
      control: false,
    },
  },
  args: {
    alt: 'avatar',
    src: 'https://i.pinimg.com/236x/30/15/40/301540f163d1397c150d8a6955a1d92a.jpg',
  },
  render: args => {
    return <Avatar {...args} />;
  },
};

export const BasisGroup: Story = {
  argTypes: {
    shape: {
      control: false,
    },
    variant: {
      control: false,
    },
    icon: {
      control: false,
    },
  },
  args: {
    src: 'https://i.pravatar.cc/100?img=1', // 단일 아바타
    alt: 'avatar',
  },
  render: args => {
    const avatars = [
      {
        src: 'https://i.pravatar.cc/100?img=1',
        alt: 'User 1',
        size: 'medium' as const,
        shape: 'circle' as const,
      },
      {
        src: 'https://i.pravatar.cc/100?img=2',
        alt: 'User 2',
        size: 'medium' as const,
        shape: 'circle' as const,
      },
      {
        src: 'https://i.pravatar.cc/100?img=3',
        alt: 'User 3',
        size: 'medium' as const,
        shape: 'circle' as const,
      },
      {
        src: 'https://i.pravatar.cc/100?img=4',
        alt: 'User 4',
        size: 'medium' as const,
        shape: 'circle' as const,
      },
      {
        src: 'https://i.pravatar.cc/100?img=5',
        alt: 'User 5',
        size: 'medium' as const,
        shape: 'circle' as const,
      },
    ];
    return (
      <div className='flex flex-col items-center space-y-4'>
        <GroupAvatar {...args} size='small' avatars={avatars} />
        <GroupAvatar {...args} avatars={avatars} />
        <GroupAvatar {...args} size='large' avatars={avatars} />
        <GroupAvatar {...args} size='x-large' avatars={avatars} />
      </div>
    );
  },
};

export const Icon: Story = {
  argTypes: {
    alt: {
      control: false,
    },

    src: {
      control: false,
    },
  },
  args: {
    alt: 'avatar',
    variant: 'accent-icon',
    icon: <AssessmentIcon />,
  },
  render: args => {
    return <Avatar {...args} />;
  },
};

export const Reverse: Story = {
  argTypes: {
    alt: {
      control: false,
    },

    src: {
      control: false,
    },
  },
  args: {
    alt: 'avatar',
    variant: 'accent-icon-reverse',
    icon: <AssessmentIcon />,
  },
  render: args => {
    return <Avatar {...args} />;
  },
};

export const Info: Story = {
  argTypes: {
    alt: {
      control: false,
    },

    src: {
      control: false,
    },
  },
  args: {
    alt: 'avatar',
    variant: 'decorative-1-gradient',
    icon: <AssessmentIcon />,
  },
  render: args => {
    return <Avatar {...args} />;
  },
};

export const Flag: Story = {
  argTypes: {
    alt: {
      control: false,
    },

    src: {
      control: false,
    },
  },
  args: {
    alt: 'avatar',
    src: '../assets/us.png',
  },
  render: args => {
    return (
      <div className='flex-col '>
        <div className='flex gap-x-4 items-center'>
          <label className='text-label-semibold'>Aboutme</label>
          <Avatar {...args} src={AboutMeImage} size='small' />
        </div>
        <div className='flex gap-x-4 items-center'>
          <label className='text-label-semibold'>Angellist</label>
          <Avatar {...args} src={AngellistImage} size='small' />
        </div>
        <div className='flex gap-x-4 items-center'>
          <label className='text-label-semibold'>CrunchBase</label>
          <Avatar {...args} src={CruncBaseImage} size='small' />
        </div>
        <div className='flex gap-x-4 items-center'>
          <label className='text-label-semibold'>Facebook</label>
          <Avatar {...args} src={FacebookImage} size='small' />
        </div>
        <div className='flex gap-x-4 items-center'>
          <label className='text-label-semibold'>Github</label>
          <Avatar {...args} src={GithubImage} size='small' />
        </div>
        <div className='flex gap-x-4 items-center'>
          <label className='text-label-semibold'>Linkedin</label>
          <Avatar {...args} src={LinkedInImage} size='small' />
        </div>
        <div className='flex gap-x-4 items-center'>
          <label className='text-label-semibold'>Quora</label>
          <Avatar {...args} src={QuoraImage} size='small' />
        </div>
        <div className='flex gap-x-4 items-center'>
          <label className='text-label-semibold'>Twitter</label>
          <Avatar {...args} src={TwitterImage} size='small' />
        </div>
        <div className='flex gap-x-4 items-center'>
          <label className='text-label-semibold'>Korea</label>
          <Avatar {...args} src={KoreaImage} size='small' shape='circle' />
        </div>
        <div className='flex gap-x-4 items-center'>
          <label className='text-label-semibold'>Us</label>
          <Avatar {...args} src={UsImage} size='small' shape='circle' />
        </div>
        <div className='flex gap-x-4 items-center'>
          <label className='text-label-semibold'>India</label>
          <Avatar {...args} src={IndiaImage} size='small' shape='circle' />
        </div>
      </div>
    );
  },
};
