import React from "react";
import {
  AssessmentIcon,
  BookIcon,
  DashBoardIcon,
  PersonFrameIcon,
  IntegrationsIcon,
  MessageIcon,
  BellIcon,
  SettingIcon,
} from "../icons";
import IconButton from "../components/IconButton";

export const dashboardBasicMenus = [
  {
    id: "dashboard",
    link: "/dashboard",
    icon: (
      <IconButton
        adornment={<DashBoardIcon />}
        name="dashboard"
        className="w-6 h-6 p-[2px] shrink-0"
      />
    ),
    label: "대시보드",
    subItems: [],
  },
  {
    id: "integrations",
    link: "/integrations",
    icon: (
      <IconButton
        adornment={<IntegrationsIcon />}
        name="integration"
        className="w-6 h-6 p-[2px] shrink-0"
      />
    ),
    label: "데이터 연동",
    subItems: [],
  },
  {
    id: "sequences",
    link: "/sequences",
    icon: (
      <IconButton
        adornment={<MessageIcon />}
        name="message"
        className="w-6 h-6 p-[2px] shrink-0"
      />
    ),
    label: "이메일 자동화",
    subItems: [],
  },
  {
    id: "notice",
    link: "/notice",
    icon: (
      <IconButton
        adornment={<BellIcon />}
        name="notice"
        className="w-6 h-6 p-[2px] shrink-0"
      />
    ),
    label: "알림",
    subItems: [],
  },
  {
    id: "org",
    link: "/org",
    icon: (
      <IconButton
        adornment={<SettingIcon />}
        name="org"
        className="w-6 h-6 p-[2px] shrink-0"
      />
    ),
    label: "설정",
    subItems: [],
  },
];
export const dashboardMainMenus = [
  {
    id: "talents",
    link: "/talents",
    icon: (
      <IconButton
        adornment={<PersonFrameIcon />}
        name="talents"
        className="w-6 h-6 p-[2px] shrink-0"
      />
    ),
    label: "글로벌 인재 검색",
    subItems: [
      // { id: 'talents', link: '/talents', label: '인재 검색 메인' },
      // {
      //   id: 'archived-talent',
      //   link: '/talents/archived',
      //   label: '보관한 인재',
      // },
    ],
  },
  // {
  //   id: 'global-payment',
  //   link: '/global-payment',
  //   icon: <PaymentIcon className='w-6 h-6 p-[2px] shrink-0' />,
  //   label: '글로벌 급여 관리',
  //   subItems: [],
  // },
  {
    id: "assess",
    link: "/assess",
    icon: (
      <IconButton
        adornment={<AssessmentIcon />}
        name="assess"
        className="w-6 h-6 p-[2px] shrink-0"
      />
    ),
    label: "채용 시험",
    subItems: [
      // { id: 'assess', link: '/assess', label: '채용시험 메인' },
      // {
      //   id: 'assess-questions',
      //   link: '/assess/questions',
      //   label: '문제 라이브러리',
      // },
      // {
      //   id: 'assess-templates',
      //   link: '/assess/templates',
      //   label: '템플릿 라이브러리',
      // },
      // {
      //   id: 'assess-list',
      //   link: '/assess/list',
      //   label: '우리 회사 채용시험',
      // },
    ],
  },
  // {
  //   id: 'freelancer',
  //   link: '/freelancer',
  //   icon: <PersonStrokeIcon className='w-6 h-6 p-[2px] shrink-0' />,
  //   label: '프리랜서 마켓',
  //   subItems: [],
  // },
  {
    id: "legal-labor",
    link: "/legal-labor",
    icon: (
      <IconButton
        adornment={<BookIcon />}
        name="legal-labor"
        className="w-6 h-6 p-[2px] shrink-0"
      />
    ),
    label: "법률/노무",
    subItems: [],
  },
];
