import React, { FC, ReactElement } from 'react';

import Avatar from '../components/Avatar';
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  AnswerLongIcon,
  AnswerShortIcon,
  ArrowLineRightIcon,
  ArrowVerticalDownIcon,
  ArrowVerticalUpIcon,
  AutoPilotIcon,
  BellIcon,
  BookIcon,
  BookmarkFillIcon,
  BookmarkLineIcon,
  BoxIcon,
  BrushIcon,
  BuildingIcon,
  CalendarCheckIcon,
  CalendarIcon,
  CaretDoubleLeftIcon,
  CaretDoubleRightIcon,
  CaretDownIcon,
  CaretLeftIcon,
  CaretRightIcon,
  CaretUpIcon,
  CartIcon,
  CheckCircleIcon,
  CheckDoubleIcon,
  CheckIcon,
  CircleFillIcon,
  CircleLineIcon,
  CodeBlockIcon,
  CodeIcon,
  CoinIcon,
  ColumnIcon,
  ComputerIcon,
  CopyIcon,
  CrownIcon,
  CubeIcon,
  DashBoardIcon,
  DataIcon,
  DeleteIcon,
  DiamondIcon,
  DividerIcon,
  DownloadIcon,
  DragHandleIcon,
  EditIcon,
  ErrorIcon,
  EyeOpenIcon,
  EyeSlashIcon,
  FileIcon,
  FilterIcon,
  FlagIcon,
  GraduationCapIcon,
  GraphIcon,
  HamburgerIcon,
  HashtagIcon,
  HomeIcon,
  ImageIcon,
  InformationIcon,
  KeyIcon,
  LightningIcon,
  LinkBreakIcon,
  LinkIcon,
  ListBulletIcon,
  ListNumberIcon,
  LockIcon,
  LogoBlackIcon,
  LogoIcon,
  MagicWandIcon,
  MailAddIcon,
  MailIcon,
  MailOpenIcon,
  MainLogoIcon,
  MapIcon,
  MapPinIcon,
  MarketIcon,
  MemoIcon,
  MenuIcon,
  MessageIcon,
  MobileIcon,
  NewTabIcon,
  NoteIcon,
  PauseIcon,
  PayIcon,
  PersonFillIcon,
  PersonFrameIcon,
  PersonLineIcon,
  PhoneIcon,
  PlayCircleIcon,
  PlusIcon,
  PushPinFillIcon,
  PushPinLineIcon,
  RadarIcon,
  RadioIcon,
  ResetIcon,
  ReverseIcon,
  RowIcon,
  SearchIcon,
  SendIcon,
  SettingIcon,
  ShareIcon,
  SkillTestIcon,
  SliderIcon,
  SpinnerIcon,
  StarFillIcon,
  StarFourDoubleIcon,
  StarFourIcon,
  StarHalfFillIcon,
  StarLineIcon,
  SuitCaseIcon,
  TableIcon,
  TagIcon,
  TargetIcon,
  TaskIcon,
  TeamFillIcon,
  TeamLineIcon,
  TemplateIcon,
  TextBoldIcon,
  TextHeaderOneIcon,
  TextHeaderTwoIcon,
  TextItalicIcon,
  TextUnderlineIcon,
  TrendDownIcon,
  TrendUpIcon,
  TriangleDownIcon,
  TriangleRightIcon,
  TriangleUpIcon,
  TrophyIcon,
  UploadIcon,
  VideoIcon,
  WalletIcon,
  WarningIcon,
  XIcon,
} from '../icons';
import Card from './Card';
import InformationTag from './InformationTag';
import StatusTag from './StatusTag';
import Tabs from './Tabs';

import ComingSoonImage from '../assets/comingSoon.png';
import EmailImage from '../assets/email.png';
import ErrorImage from '../assets/error.png';
import Error404Image from '../assets/error404.png';
import Error500Image from '../assets/error500.png';
import InProgressImage from '../assets/inProgress.png';
import LoadingImage from '../assets/loading.png';
import NoResultImage from '../assets/noResult.png';
import NotificationImage from '../assets/notification.png';
import PasswordImage from '../assets/password.png';
import SignUpImage from '../assets/signUp.png';
import SkillTestImage from '../assets/skillTest.png';
import SuccessImage from '../assets/success.png';
import TemplateImage from '../assets/template.png';
import { AudioIcon, AudioSlashIcon, VideoSlashIcon } from '../icons';
import WelcomeImage from '/src/assets/welcome.png';

type FoundationProps = {};

const Foundation: FC<FoundationProps> = () => {
  const iconArrays = [
    {
      label: 'HamburgerIcon',
      iconM: <HamburgerIcon />,
      iconS: <HamburgerIcon className='w-4 h-4' />,
      iconL: <HamburgerIcon className='w-6 h-6' />,
    },
    {
      label: 'CaretLeftIcon',
      iconM: <CaretLeftIcon />,
      iconS: <CaretLeftIcon className='w-4 h-4' />,
      iconL: <CaretLeftIcon className='w-6 h-6' />,
    },
    {
      label: 'CaretRightIcon',
      iconM: <CaretRightIcon />,
      iconS: <CaretRightIcon className='w-4 h-4' />,
      iconL: <CaretRightIcon className='w-6 h-6' />,
    },
    {
      label: 'CaretDownIcon',
      iconM: <CaretDownIcon />,
      iconS: <CaretDownIcon className='w-4 h-4' />,
      iconL: <CaretDownIcon className='w-6 h-6' />,
    },
    {
      label: 'CaretUpIcon',
      iconM: <CaretUpIcon />,
      iconS: <CaretUpIcon className='w-4 h-4' />,
      iconL: <CaretUpIcon className='w-6 h-6' />,
    },
    {
      label: 'PlusIcon',
      iconM: <PlusIcon />,
      iconS: <PlusIcon className='w-4 h-4' />,
      iconL: <PlusIcon className='w-6 h-6' />,
    },
    {
      label: 'XIcon',
      iconM: <XIcon />,
      iconS: <XIcon className='w-4 h-4' />,
      iconL: <XIcon className='w-6 h-6' />,
    },
    {
      label: 'CheckIcon',
      iconM: <CheckIcon />,
      iconS: <CheckIcon className='w-4 h-4' />,
      iconL: <CheckIcon className='w-6 h-6' />,
    },
    {
      label: 'CheckDoubleIcon',
      iconM: <CheckDoubleIcon />,
      iconS: <CheckDoubleIcon className='w-4 h-4' />,
      iconL: <CheckDoubleIcon className='w-6 h-6' />,
    },
    {
      label: 'CheckCircleIcon',
      iconM: <CheckCircleIcon />,
      iconS: <CheckCircleIcon className='w-4 h-4' />,
      iconL: <CheckCircleIcon className='w-6 h-6' />,
    },
    {
      label: 'SearchIcon',
      iconM: <SearchIcon />,
      iconS: <SearchIcon className='w-4 h-4' />,
      iconL: <SearchIcon className='w-6 h-6' />,
    },
    {
      label: 'DeleteIcon',
      iconM: <DeleteIcon />,
      iconS: <DeleteIcon className='w-4 h-4' />,
      iconL: <DeleteIcon className='w-6 h-6' />,
    },
    {
      label: 'PersonLineIcon',
      iconM: <PersonLineIcon />,
      iconS: <PersonLineIcon className='w-4 h-4' />,
      iconL: <PersonLineIcon className='w-6 h-6' />,
    },
    {
      label: 'PersonFillIcon',
      iconM: <PersonFillIcon />,
      iconS: <PersonFillIcon className='w-4 h-4' />,
      iconL: <PersonFillIcon className='w-6 h-6' />,
    },
    {
      label: 'PersonFrameIcon',
      iconM: <PersonFrameIcon />,
      iconS: <PersonFrameIcon className='w-4 h-4' />,
      iconL: <PersonFrameIcon className='w-6 h-6' />,
    },
    {
      label: 'TeamLineIcon',
      iconM: <TeamLineIcon />,
      iconS: <TeamLineIcon className='w-4 h-4' />,
      iconL: <TeamLineIcon className='w-6 h-6' />,
    },
    {
      label: 'TeamFillIcon',
      iconM: <TeamFillIcon />,
      iconS: <TeamFillIcon className='w-4 h-4' />,
      iconL: <TeamFillIcon className='w-6 h-6' />,
    },
    {
      label: 'HomeIcon',
      iconM: <HomeIcon />,
      iconS: <HomeIcon className='w-4 h-4' />,
      iconL: <HomeIcon className='w-6 h-6' />,
    },
    {
      label: 'CalendarIcon',
      iconM: <CalendarIcon />,
      iconS: <CalendarIcon className='w-4 h-4' />,
      iconL: <CalendarIcon className='w-6 h-6' />,
    },
    {
      label: 'CalendarCheckIcon',
      iconM: <CalendarCheckIcon />,
      iconS: <CalendarCheckIcon className='w-4 h-4' />,
      iconL: <CalendarCheckIcon className='w-6 h-6' />,
    },
    {
      label: 'ArrowLineRightIcon',
      iconM: <ArrowLineRightIcon />,
      iconS: <ArrowLineRightIcon className='w-4 h-4' />,
      iconL: <ArrowLineRightIcon className='w-6 h-6' />,
    },
    {
      label: 'CaretDoubleLeftIcon',
      iconM: <CaretDoubleLeftIcon />,
      iconS: <CaretDoubleLeftIcon className='w-4 h-4' />,
      iconL: <CaretDoubleLeftIcon className='w-6 h-6' />,
    },
    {
      label: 'CaretDoubleRightIcon',
      iconM: <CaretDoubleRightIcon />,
      iconS: <CaretDoubleRightIcon className='w-4 h-4' />,
      iconL: <CaretDoubleRightIcon className='w-6 h-6' />,
    },
    {
      label: 'ColumnIcon',
      iconM: <ColumnIcon />,
      iconS: <ColumnIcon className='w-4 h-4' />,
      iconL: <ColumnIcon className='w-6 h-6' />,
    },
    {
      label: 'RowIcon',
      iconM: <RowIcon />,
      iconS: <RowIcon className='w-4 h-4' />,
      iconL: <RowIcon className='w-6 h-6' />,
    },
    {
      label: 'ResetIcon',
      iconM: <ResetIcon />,
      iconS: <ResetIcon className='w-4 h-4' />,
      iconL: <ResetIcon className='w-6 h-6' />,
    },
    {
      label: 'CopyIcon',
      iconM: <CopyIcon />,
      iconS: <CopyIcon className='w-4 h-4' />,
      iconL: <CopyIcon className='w-6 h-6' />,
    },
    {
      label: 'InformationIcon',
      iconM: <InformationIcon />,
      iconS: <InformationIcon className='w-4 h-4' />,
      iconL: <InformationIcon className='w-6 h-6' />,
    },
    {
      label: 'MagicWandIcon',
      iconM: <MagicWandIcon />,
      iconS: <MagicWandIcon className='w-4 h-4' />,
      iconL: <MagicWandIcon className='w-6 h-6' />,
    },
    {
      label: 'TemplateIcon',
      iconM: <TemplateIcon />,
      iconS: <TemplateIcon className='w-4 h-4' />,
      iconL: <TemplateIcon className='w-6 h-6' />,
    },
    {
      label: 'EditIcon',
      iconM: <EditIcon />,
      iconS: <EditIcon className='w-4 h-4' />,
      iconL: <EditIcon className='w-6 h-6' />,
    },
    {
      label: 'FilterIcon',
      iconM: <FilterIcon />,
      iconS: <FilterIcon className='w-4 h-4' />,
      iconL: <FilterIcon className='w-6 h-6' />,
    },
    {
      label: 'ShareIcon',
      iconM: <ShareIcon />,
      iconS: <ShareIcon className='w-4 h-4' />,
      iconL: <ShareIcon className='w-6 h-6' />,
    },
    {
      label: 'NewTabIcon',
      iconM: <NewTabIcon />,
      iconS: <NewTabIcon className='w-4 h-4' />,
      iconL: <NewTabIcon className='w-6 h-6' />,
    },
    {
      label: 'PushPinLineIcon',
      iconM: <PushPinLineIcon />,
      iconS: <PushPinLineIcon className='w-4 h-4' />,
      iconL: <PushPinLineIcon className='w-6 h-6' />,
    },
    {
      label: 'PushPinFillIcon',
      iconM: <PushPinFillIcon />,
      iconS: <PushPinFillIcon className='w-4 h-4' />,
      iconL: <PushPinFillIcon className='w-6 h-6' />,
    },
    {
      label: 'BookmarkLineIcon',
      iconM: <BookmarkLineIcon />,
      iconS: <BookmarkLineIcon className='w-4 h-4' />,
      iconL: <BookmarkLineIcon className='w-6 h-6' />,
    },
    {
      label: 'BookmarkFillIcon',
      iconM: <BookmarkFillIcon />,
      iconS: <BookmarkFillIcon className='w-4 h-4' />,
      iconL: <BookmarkFillIcon className='w-6 h-6' />,
    },
    {
      label: 'ArrowVerticalUpIcon',
      iconM: <ArrowVerticalUpIcon />,
      iconS: <ArrowVerticalUpIcon className='w-4 h-4' />,
      iconL: <ArrowVerticalUpIcon className='w-6 h-6' />,
    },
    {
      label: 'ArrowVerticalDownIcon',
      iconM: <ArrowVerticalDownIcon />,
      iconS: <ArrowVerticalDownIcon className='w-4 h-4' />,
      iconL: <ArrowVerticalDownIcon className='w-6 h-6' />,
    },
    {
      label: 'SkillTestIcon',
      iconM: <SkillTestIcon />,
      iconS: <SkillTestIcon className='w-4 h-4' />,
      iconL: <SkillTestIcon className='w-6 h-6' />,
    },
    {
      label: 'NoteIcon',
      iconM: <NoteIcon />,
      iconS: <NoteIcon className='w-4 h-4' />,
      iconL: <NoteIcon className='w-6 h-6' />,
    },
    {
      label: 'FileIcon',
      iconM: <FileIcon />,
      iconS: <FileIcon className='w-4 h-4' />,
      iconL: <FileIcon className='w-6 h-6' />,
    },
    {
      label: 'SuitCaseIcon',
      iconM: <SuitCaseIcon />,
      iconS: <SuitCaseIcon className='w-4 h-4' />,
      iconL: <SuitCaseIcon className='w-6 h-6' />,
    },
    {
      label: 'GraphIcon',
      iconM: <GraphIcon />,
      iconS: <GraphIcon className='w-4 h-4' />,
      iconL: <GraphIcon className='w-6 h-6' />,
    },
    {
      label: 'TargetIcon',
      iconM: <TargetIcon />,
      iconS: <TargetIcon className='w-4 h-4' />,
      iconL: <TargetIcon className='w-6 h-6' />,
    },
    {
      label: 'MarketIcon',
      iconM: <MarketIcon />,
      iconS: <MarketIcon className='w-4 h-4' />,
      iconL: <MarketIcon className='w-6 h-6' />,
    },
    {
      label: 'MessageIcon',
      iconM: <MessageIcon />,
      iconS: <MessageIcon className='w-4 h-4' />,
      iconL: <MessageIcon className='w-6 h-6' />,
    },
    {
      label: 'MailIcon',
      iconM: <MailIcon />,
      iconS: <MailIcon className='w-4 h-4' />,
      iconL: <MailIcon className='w-6 h-6' />,
    },
    {
      label: 'MailOpenIcon',
      iconM: <MailOpenIcon />,
      iconS: <MailOpenIcon className='w-4 h-4' />,
      iconL: <MailOpenIcon className='w-6 h-6' />,
    },
    {
      label: 'MailAddIcon',
      iconM: <MailAddIcon />,
      iconS: <MailAddIcon className='w-4 h-4' />,
      iconL: <MailAddIcon className='w-6 h-6' />,
    },
    {
      label: 'StarFourIcon',
      iconM: <StarFourIcon />,
      iconS: <StarFourIcon className='w-4 h-4' />,
      iconL: <StarFourIcon className='w-6 h-6' />,
    },
    {
      label: 'StarFourDoubleIcon',
      iconM: <StarFourDoubleIcon />,
      iconS: <StarFourDoubleIcon className='w-4 h-4' />,
      iconL: <StarFourDoubleIcon className='w-6 h-6' />,
    },
    {
      label: 'BookIcon',
      iconM: <BookIcon />,
      iconS: <BookIcon className='w-4 h-4' />,
      iconL: <BookIcon className='w-6 h-6' />,
    },
    {
      label: 'MapPinIcon',
      iconM: <MapPinIcon />,
      iconS: <MapPinIcon className='w-4 h-4' />,
      iconL: <MapPinIcon className='w-6 h-6' />,
    },
    {
      label: 'WalletIcon',
      iconM: <WalletIcon />,
      iconS: <WalletIcon className='w-4 h-4' />,
      iconL: <WalletIcon className='w-6 h-6' />,
    },
    {
      label: 'EyeOpenIcon',
      iconM: <EyeOpenIcon />,
      iconS: <EyeOpenIcon className='w-4 h-4' />,
      iconL: <EyeOpenIcon className='w-6 h-6' />,
    },
    {
      label: 'EyeSlashIcon',
      iconM: <EyeSlashIcon />,
      iconS: <EyeSlashIcon className='w-4 h-4' />,
      iconL: <EyeSlashIcon className='w-6 h-6' />,
    },
    {
      label: 'MobileIcon',
      iconM: <MobileIcon />,
      iconS: <MobileIcon className='w-4 h-4' />,
      iconL: <MobileIcon className='w-6 h-6' />,
    },
    {
      label: 'PhoneIcon',
      iconM: <PhoneIcon />,
      iconS: <PhoneIcon className='w-4 h-4' />,
      iconL: <PhoneIcon className='w-6 h-6' />,
    },
    {
      label: 'LinkIcon',
      iconM: <LinkIcon />,
      iconS: <LinkIcon className='w-4 h-4' />,
      iconL: <LinkIcon className='w-6 h-6' />,
    },
    {
      label: 'LinkBreakIcon',
      iconM: <LinkBreakIcon />,
      iconS: <LinkBreakIcon className='w-4 h-4' />,
      iconL: <LinkBreakIcon className='w-6 h-6' />,
    },
    {
      label: 'StarLineIcon',
      iconM: <StarLineIcon />,
      iconS: <StarLineIcon className='w-4 h-4' />,
      iconL: <StarLineIcon className='w-6 h-6' />,
    },
    {
      label: 'StarFillIcon',
      iconM: <StarFillIcon />,
      iconS: <StarFillIcon className='w-4 h-4' />,
      iconL: <StarFillIcon className='w-6 h-6' />,
    },
    {
      label: 'StarHalfFillIcon',
      iconM: <StarHalfFillIcon />,
      iconS: <StarHalfFillIcon className='w-4 h-4' />,
      iconL: <StarHalfFillIcon className='w-6 h-6' />,
    },
    {
      label: 'PlayCircleIcon',
      iconM: <PlayCircleIcon />,
      iconS: <PlayCircleIcon className='w-4 h-4' />,
      iconL: <PlayCircleIcon className='w-6 h-6' />,
    },
    {
      label: 'PauseIcon',
      iconM: <PauseIcon />,
      iconS: <PauseIcon className='w-4 h-4' />,
      iconL: <PauseIcon className='w-6 h-6' />,
    },
    {
      label: 'TriangleRightIcon',
      iconM: <TriangleRightIcon />,
      iconS: <TriangleRightIcon className='w-4 h-4' />,
      iconL: <TriangleRightIcon className='w-6 h-6' />,
    },
    {
      label: 'TriangleUpIcon',
      iconM: <TriangleUpIcon />,
      iconS: <TriangleUpIcon className='w-4 h-4' />,
      iconL: <TriangleUpIcon className='w-6 h-6' />,
    },
    {
      label: 'TriangleDownIcon',
      iconM: <TriangleDownIcon />,
      iconS: <TriangleDownIcon className='w-4 h-4' />,
      iconL: <TriangleDownIcon className='w-6 h-6' />,
    },
    {
      label: 'SendIcon',
      iconM: <SendIcon />,
      iconS: <SendIcon className='w-4 h-4' />,
      iconL: <SendIcon className='w-6 h-6' />,
    },
    {
      label: 'BellIcon',
      iconM: <BellIcon />,
      iconS: <BellIcon className='w-4 h-4' />,
      iconL: <BellIcon className='w-6 h-6' />,
    },
    {
      label: 'MemoIcon',
      iconM: <MemoIcon />,
      iconS: <MemoIcon className='w-4 h-4' />,
      iconL: <MemoIcon className='w-6 h-6' />,
    },
    {
      label: 'DashBoardIcon',
      iconM: <DashBoardIcon />,
      iconS: <DashBoardIcon className='w-4 h-4' />,
      iconL: <DashBoardIcon className='w-6 h-6' />,
    },
    {
      label: 'ErrorIcon',
      iconM: <ErrorIcon />,
      iconS: <ErrorIcon className='w-4 h-4' />,
      iconL: <ErrorIcon className='w-6 h-6' />,
    },
    {
      label: 'TaskIcon',
      iconM: <TaskIcon />,
      iconS: <TaskIcon className='w-4 h-4' />,
      iconL: <TaskIcon className='w-6 h-6' />,
    },
    {
      label: 'PayIcon',
      iconM: <PayIcon />,
      iconS: <PayIcon className='w-4 h-4' />,
      iconL: <PayIcon className='w-6 h-6' />,
    },
    {
      label: 'ComputerIcon',
      iconM: <ComputerIcon />,
      iconS: <ComputerIcon className='w-4 h-4' />,
      iconL: <ComputerIcon className='w-6 h-6' />,
    },
    {
      label: 'RadioIcon',
      iconM: <RadioIcon />,
      iconS: <RadioIcon className='w-4 h-4' />,
      iconL: <RadioIcon className='w-6 h-6' />,
    },
    {
      label: 'MapIcon',
      iconM: <MapIcon />,
      iconS: <MapIcon className='w-4 h-4' />,
      iconL: <MapIcon className='w-6 h-6' />,
    },
    {
      label: 'ImageIcon',
      iconM: <ImageIcon />,
      iconS: <ImageIcon className='w-4 h-4' />,
      iconL: <ImageIcon className='w-6 h-6' />,
    },
    {
      label: 'VideoIcon',
      iconM: <VideoIcon />,
      iconS: <VideoIcon className='w-4 h-4' />,
      iconL: <VideoIcon className='w-6 h-6' />,
    },
    {
      label: 'VideoSlashIcon',
      iconM: <VideoSlashIcon />,
      iconS: <VideoSlashIcon className='w-4 h-4' />,
      iconL: <VideoSlashIcon className='w-6 h-6' />,
    },
    {
      label: 'AudioIcon',
      iconM: <AudioIcon />,
      iconS: <AudioIcon className='w-4 h-4' />,
      iconL: <AudioIcon className='w-6 h-6' />,
    },
    {
      label: 'AudioSlashIcon',
      iconM: <AudioSlashIcon />,
      iconS: <AudioSlashIcon className='w-4 h-4' />,
      iconL: <AudioSlashIcon className='w-6 h-6' />,
    },
    {
      label: 'GraduationCapIcon',
      iconM: <GraduationCapIcon />,
      iconS: <GraduationCapIcon className='w-4 h-4' />,
      iconL: <GraduationCapIcon className='w-6 h-6' />,
    },
    {
      label: 'TrophyIcon',
      iconM: <TrophyIcon />,
      iconS: <TrophyIcon className='w-4 h-4' />,
      iconL: <TrophyIcon className='w-6 h-6' />,
    },
    {
      label: 'BrushIcon',
      iconM: <BrushIcon />,
      iconS: <BrushIcon className='w-4 h-4' />,
      iconL: <BrushIcon className='w-6 h-6' />,
    },
    {
      label: 'FlagIcon',
      iconM: <FlagIcon />,
      iconS: <FlagIcon className='w-4 h-4' />,
      iconL: <FlagIcon className='w-6 h-6' />,
    },
    {
      label: 'TableIcon',
      iconM: <TableIcon />,
      iconS: <TableIcon className='w-4 h-4' />,
      iconL: <TableIcon className='w-6 h-6' />,
    },
    {
      label: 'TrendUpIcon',
      iconM: <TrendUpIcon />,
      iconS: <TrendUpIcon className='w-4 h-4' />,
      iconL: <TrendUpIcon className='w-6 h-6' />,
    },
    {
      label: 'TrendDownIcon',
      iconM: <TrendDownIcon />,
      iconS: <TrendDownIcon className='w-4 h-4' />,
      iconL: <TrendDownIcon className='w-6 h-6' />,
    },
    {
      label: 'BuildingIcon',
      iconM: <BuildingIcon />,
      iconS: <BuildingIcon className='w-4 h-4' />,
      iconL: <BuildingIcon className='w-6 h-6' />,
    },
    {
      label: 'AlignLeftIcon',
      iconM: <AlignLeftIcon />,
      iconS: <AlignLeftIcon className='w-4 h-4' />,
      iconL: <AlignLeftIcon className='w-6 h-6' />,
    },
    {
      label: 'AlignCenterIcon',
      iconM: <AlignCenterIcon />,
      iconS: <AlignCenterIcon className='w-4 h-4' />,
      iconL: <AlignCenterIcon className='w-6 h-6' />,
    },
    {
      label: 'AlignRightIcon',
      iconM: <AlignRightIcon />,
      iconS: <AlignRightIcon className='w-4 h-4' />,
      iconL: <AlignRightIcon className='w-6 h-6' />,
    },
    {
      label: 'CodeIcon',
      iconM: <CodeIcon />,
      iconS: <CodeIcon className='w-4 h-4' />,
      iconL: <CodeIcon className='w-6 h-6' />,
    },
    {
      label: 'CodeBlockIcon',
      iconM: <CodeBlockIcon />,
      iconS: <CodeBlockIcon className='w-4 h-4' />,
      iconL: <CodeBlockIcon className='w-6 h-6' />,
    },
    {
      label: 'ListBulletIcon',
      iconM: <ListBulletIcon />,
      iconS: <ListBulletIcon className='w-4 h-4' />,
      iconL: <ListBulletIcon className='w-6 h-6' />,
    },
    {
      label: 'ListNumberIcon',
      iconM: <ListNumberIcon />,
      iconS: <ListNumberIcon className='w-4 h-4' />,
      iconL: <ListNumberIcon className='w-6 h-6' />,
    },
    {
      label: 'DividerIcon',
      iconM: <DividerIcon />,
      iconS: <DividerIcon className='w-4 h-4' />,
      iconL: <DividerIcon className='w-6 h-6' />,
    },
    {
      label: 'TextHeaderOneIcon',
      iconM: <TextHeaderOneIcon />,
      iconS: <TextHeaderOneIcon className='w-4 h-4' />,
      iconL: <TextHeaderOneIcon className='w-6 h-6' />,
    },
    {
      label: 'TextHeaderTwoIcon',
      iconM: <TextHeaderTwoIcon />,
      iconS: <TextHeaderTwoIcon className='w-4 h-4' />,
      iconL: <TextHeaderTwoIcon className='w-6 h-6' />,
    },
    {
      label: 'TextBoldIcon',
      iconM: <TextBoldIcon />,
      iconS: <TextBoldIcon className='w-4 h-4' />,
      iconL: <TextBoldIcon className='w-6 h-6' />,
    },
    {
      label: 'TextItalicIcon',
      iconM: <TextItalicIcon />,
      iconS: <TextItalicIcon className='w-4 h-4' />,
      iconL: <TextItalicIcon className='w-6 h-6' />,
    },
    {
      label: 'TextUnderlineIcon',
      iconM: <TextUnderlineIcon />,
      iconS: <TextUnderlineIcon className='w-4 h-4' />,
      iconL: <TextUnderlineIcon className='w-6 h-6' />,
    },
    {
      label: 'AnswerLongIcon',
      iconM: <AnswerLongIcon />,
      iconS: <AnswerLongIcon className='w-4 h-4' />,
      iconL: <AnswerLongIcon className='w-6 h-6' />,
    },
    {
      label: 'AnswerShortIcon',
      iconM: <AnswerShortIcon />,
      iconS: <AnswerShortIcon className='w-4 h-4' />,
      iconL: <AnswerShortIcon className='w-6 h-6' />,
    },
    {
      label: 'UploadIcon',
      iconM: <UploadIcon />,
      iconS: <UploadIcon className='w-4 h-4' />,
      iconL: <UploadIcon className='w-6 h-6' />,
    },
    {
      label: 'DownloadIcon',
      iconM: <DownloadIcon />,
      iconS: <DownloadIcon className='w-4 h-4' />,
      iconL: <DownloadIcon className='w-6 h-6' />,
    },
    {
      label: 'BoxIcon',
      iconM: <BoxIcon />,
      iconS: <BoxIcon className='w-4 h-4' />,
      iconL: <BoxIcon className='w-6 h-6' />,
    },
    {
      label: 'CartIcon',
      iconM: <CartIcon />,
      iconS: <CartIcon className='w-4 h-4' />,
      iconL: <CartIcon className='w-6 h-6' />,
    },
    {
      label: 'MenuIcon',
      iconM: <MenuIcon />,
      iconS: <MenuIcon className='w-4 h-4' />,
      iconL: <MenuIcon className='w-6 h-6' />,
    },
    {
      label: 'DragHandleIcon',
      iconM: <DragHandleIcon />,
      iconS: <DragHandleIcon className='w-4 h-4' />,
      iconL: <DragHandleIcon className='w-6 h-6' />,
    },
    {
      label: 'DataIcon',
      iconM: <DataIcon />,
      iconS: <DataIcon className='w-4 h-4' />,
      iconL: <DataIcon className='w-6 h-6' />,
    },
    {
      label: 'SpinnerIcon',
      iconM: <SpinnerIcon />,
      iconS: <SpinnerIcon className='w-4 h-4' />,
      iconL: <SpinnerIcon className='w-6 h-6' />,
    },
    {
      label: 'HashtagIcon',
      iconM: <HashtagIcon />,
      iconS: <HashtagIcon className='w-4 h-4' />,
      iconL: <HashtagIcon className='w-6 h-6' />,
    },
    {
      label: 'LightningIcon',
      iconM: <LightningIcon />,
      iconS: <LightningIcon className='w-4 h-4' />,
      iconL: <LightningIcon className='w-6 h-6' />,
    },
    {
      label: 'CoinIcon',
      iconM: <CoinIcon />,
      iconS: <CoinIcon className='w-4 h-4' />,
      iconL: <CoinIcon className='w-6 h-6' />,
    },
    {
      label: 'TagIcon',
      iconM: <TagIcon />,
      iconS: <TagIcon className='w-4 h-4' />,
      iconL: <TagIcon className='w-6 h-6' />,
    },
    {
      label: 'KeyIcon',
      iconM: <KeyIcon />,
      iconS: <KeyIcon className='w-4 h-4' />,
      iconL: <KeyIcon className='w-6 h-6' />,
    },
    {
      label: 'LockIcon',
      iconM: <LockIcon />,
      iconS: <LockIcon className='w-4 h-4' />,
      iconL: <LockIcon className='w-6 h-6' />,
    },
    {
      label: 'CubeIcon',
      iconM: <CubeIcon />,
      iconS: <CubeIcon className='w-4 h-4' />,
      iconL: <CubeIcon className='w-6 h-6' />,
    },
    {
      label: 'DiamondIcon',
      iconM: <DiamondIcon />,
      iconS: <DiamondIcon className='w-4 h-4' />,
      iconL: <DiamondIcon className='w-6 h-6' />,
    },
    {
      label: 'CrownIcon',
      iconM: <CrownIcon />,
      iconS: <CrownIcon className='w-4 h-4' />,
      iconL: <CrownIcon className='w-6 h-6' />,
    },
    {
      label: 'RadarIcon',
      iconM: <RadarIcon />,
      iconS: <RadarIcon className='w-4 h-4' />,
      iconL: <RadarIcon className='w-6 h-6' />,
    },
    {
      label: 'SettingIcon',
      iconM: <SettingIcon />,
      iconS: <SettingIcon className='w-4 h-4' />,
      iconL: <SettingIcon className='w-6 h-6' />,
    },
    {
      label: 'WarningIcon',
      iconM: <WarningIcon />,
      iconS: <WarningIcon className='w-4 h-4' />,
      iconL: <WarningIcon className='w-6 h-6' />,
    },
    {
      label: 'CircleLineIcon',
      iconM: <CircleLineIcon />,
      iconS: <CircleLineIcon className='w-4 h-4' />,
      iconL: <CircleLineIcon className='w-6 h-6' />,
    },
    {
      label: 'CircleFillIcon',
      iconM: <CircleFillIcon />,
      iconS: <CircleFillIcon className='w-4 h-4' />,
      iconL: <CircleFillIcon className='w-6 h-6' />,
    },
    {
      label: 'ReverseIcon',
      iconM: <ReverseIcon />,
      iconS: <ReverseIcon className='w-4 h-4' />,
      iconL: <ReverseIcon className='w-6 h-6' />,
    },
    {
      label: 'SliderIcon',
      iconM: <SliderIcon />,
      iconS: <SliderIcon className='w-4 h-4' />,
      iconL: <SliderIcon className='w-6 h-6' />,
    },
    {
      label: 'AutoPilotIcon',
      iconM: <AutoPilotIcon />,
      iconS: <AutoPilotIcon className='w-4 h-4' />,
      iconL: <AutoPilotIcon className='w-6 h-6' />,
    },
  ];
  const renderArrays = (el: {
    label: string;
    iconM: ReactElement;
    iconS: ReactElement;
    iconL: ReactElement;
  }) => (
    <div key={el.label}>
      <div className='flex flex-col items-center'>
        <span className='text-primary-300 pb-2'>{el.label}</span>
        <div className='flex flex-col gap-y-1 items-center'>
          {el.iconS}
          {el.iconM}
          {el.iconL}
        </div>
      </div>
    </div>
  );

  return (
    <div className='w-[800px] h-[500px]'>
      <Tabs
        defaultValue='typography'
        tabs={[
          {
            value: 'typography',
            label: <label>Typography</label>,
            content: (
              <div>
                <label className='text-caption-semibold pb-2 block'>
                  Desktop
                </label>
                <div className='space-y-2'>
                  <Card background='gray' className='text-caption-regular'>
                    <>
                      <InformationTag text='header' />
                      <h1 className='text-h1-bold'>text-h1-bold</h1>
                      <h2 className='text-h2-bold'>text-h2-bold</h2>
                      <h3 className='text-h3-bold'>text-h3-bold</h3>
                      <h4 className='text-h4-bold'>text-h4-bold</h4>
                    </>
                  </Card>
                  <Card background='gray' className='text-caption-regular'>
                    <>
                      <InformationTag text='body' />
                      <p className='text-body-regular'>text-body-regular</p>
                      <p className='text-body-semibold'>text-body-semibold</p>
                      <p className='text-body-bold'>text-body-bold</p>
                    </>
                  </Card>
                  <Card background='gray' className='text-caption-regular'>
                    <>
                      <InformationTag text='label' />
                      <p className='text-label-regular'>text-label-regular</p>
                      <p className='text-label-medium'>text-label-medium</p>
                      <p className='text-label-semibold'>text-label-semibold</p>
                    </>
                  </Card>
                  <Card background='gray' className='text-caption-regular'>
                    <>
                      <InformationTag text='caption' />
                      <p className='text-caption-regular'>
                        text-caption-regular
                      </p>
                      <p className='text-caption-medium'>text-caption-medium</p>
                      <p className='text-caption-semibold'>
                        text-caption-semibold
                      </p>
                    </>
                  </Card>
                  <Card background='gray' className='text-caption-regular'>
                    <>
                      <InformationTag text='button' />
                      <p className='text-buttonS-semibold'>
                        text-buttonS-semibold
                      </p>
                      <p className='text-buttonM-semibold'>
                        text-buttonM-semibold
                      </p>
                      <p className='text-buttonL-semibold'>
                        text-buttonL-semibold
                      </p>
                    </>
                  </Card>
                </div>
                <label className='text-caption-semibold py-2 block'>
                  Mobile
                </label>
                <div className='space-y-2'>
                  <Card background='gray' className='text-caption-regular'>
                    <>
                      <InformationTag text='header' />
                      <h1 className='text-h1-bold-mobile'>
                        text-h1-bold-mobile
                      </h1>
                      <h2 className='text-h2-bold-mobile'>
                        text-h2-bold-mobile
                      </h2>
                      <h3 className='text-h3-bold-mobile'>
                        text-h3-bold-mobile
                      </h3>
                      <h4 className='text-h4-bold-mobile'>
                        text-h4-bold-mobile
                      </h4>
                    </>
                  </Card>
                  <Card background='gray' className='text-caption-regular'>
                    <>
                      <InformationTag text='body' />
                      <p className='text-body-regular-mobile'>
                        text-body-regular-mobile
                      </p>
                      <p className='text-body-semibold-mobile'>
                        text-body-semibold-mobile
                      </p>
                      <p className='text-body-bold-mobile'>
                        text-body-bold-mobile
                      </p>
                    </>
                  </Card>
                </div>
              </div>
            ),
          },
          {
            value: 'color',
            label: <label>Color</label>,
            content: (
              <div className='space-y-2'>
                <label className='text-caption-semibold pb-2 block'>
                  Color <br />
                  Usage: text-primary-50/bg-secondary-200
                </label>
                <Card outline className='text-caption-regular'>
                  <>
                    <StatusTag variant='infoStatus' text='Primary(Moonstone)' />
                    <div className='flex gap-x-4 pt-4'>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='w-6 h-6 bg-primary-50 rounded-full border' />
                        <label className='text-label-semibold'>50</label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='w-6 h-6 bg-primary-100 rounded-full border' />
                        <label className='text-label-semibold'>100</label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='w-6 h-6 bg-primary-200 rounded-full border' />
                        <label className='text-label-semibold'>200★</label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='w-6 h-6 bg-primary-300 rounded-full border' />
                        <label className='text-label-semibold'>300</label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='w-6 h-6 bg-primary-400 rounded-full border' />
                        <label className='text-label-semibold'>400</label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='w-6 h-6 bg-primary-500 rounded-full border' />
                        <label className='text-label-semibold'>500</label>
                      </div>
                    </div>
                  </>
                </Card>
                <Card outline className='text-caption-regular'>
                  <>
                    <StatusTag variant='successStatus' text='Secondary(Lime)' />
                    <div className='flex gap-x-4 pt-4'>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='w-6 h-6 bg-secondary-50 rounded-full border' />
                        <label className='text-label-semibold'>50</label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='w-6 h-6 bg-secondary-100 rounded-full border' />
                        <label className='text-label-semibold'>100</label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='w-6 h-6 bg-secondary-200 rounded-full border' />
                        <label className='text-label-semibold'>200★</label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='w-6 h-6 bg-secondary-300 rounded-full border' />
                        <label className='text-label-semibold'>300</label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='w-6 h-6 bg-secondary-400 rounded-full border' />
                        <label className='text-label-semibold'>400</label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='w-6 h-6 bg-secondary-500 rounded-full border' />
                        <label className='text-label-semibold'>500</label>
                      </div>
                    </div>
                  </>
                </Card>
                <Card outline className='text-caption-regular'>
                  <>
                    <StatusTag variant='errorStatus' text='Accent(Salmon)' />
                    <div className='flex gap-x-4 pt-4'>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='w-6 h-6 bg-accent-50 rounded-full border' />
                        <label className='text-label-semibold'>50</label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='w-6 h-6 bg-accent-100 rounded-full border' />
                        <label className='text-label-semibold'>100</label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='w-6 h-6 bg-accent-200 rounded-full border' />
                        <label className='text-label-semibold'>200★</label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='w-6 h-6 bg-accent-300 rounded-full border' />
                        <label className='text-label-semibold'>300</label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='w-6 h-6 bg-accent-400 rounded-full border' />
                        <label className='text-label-semibold'>400</label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='w-6 h-6 bg-accent-500 rounded-full border' />
                        <label className='text-label-semibold'>500</label>
                      </div>
                    </div>
                  </>
                </Card>
                <Card outline className='text-caption-regular'>
                  <>
                    <StatusTag text='Grayscale' />
                    <div className='flex gap-x-4 pt-4'>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='w-6 h-6 bg-white rounded-full border' />
                        <label className='text-label-semibold'>white</label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='w-6 h-6 bg-grayscale-100 rounded-full border' />
                        <label className='text-label-semibold'>100</label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='w-6 h-6 bg-grayscale-200 rounded-full border' />
                        <label className='text-label-semibold'>200</label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='w-6 h-6 bg-grayscale-300 rounded-full border' />
                        <label className='text-label-semibold'>300</label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='w-6 h-6 bg-grayscale-400 rounded-full border' />
                        <label className='text-label-semibold'>400</label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='w-6 h-6 bg-grayscale-500 rounded-full border' />
                        <label className='text-label-semibold'>500</label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='w-6 h-6 bg-grayscale-600 rounded-full border' />
                        <label className='text-label-semibold'>600</label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='w-6 h-6 bg-grayscale-700 rounded-full border' />
                        <label className='text-label-semibold'>700</label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='w-6 h-6 bg-grayscale-800 rounded-full border' />
                        <label className='text-label-semibold'>800</label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='w-6 h-6 bg-grayscale-900 rounded-full border' />
                        <label className='text-label-semibold'>900</label>
                      </div>
                    </div>
                  </>
                </Card>
                <Card outline className='text-caption-regular'>
                  <>
                    <StatusTag text='Semantic' />
                    <div className='flex gap-x-4 pt-4'>
                      <div className='w-16 space-y-2 flex flex-col items-center'>
                        <div className='w-6 h-6 bg-semantic-success rounded-full border' />
                        <label className='text-label-semibold'>success</label>
                      </div>
                      <div className='w-16 space-y-2 flex flex-col items-center'>
                        <div className='w-6 h-6 bg-semantic-error rounded-full border' />
                        <label className='text-label-semibold'>error</label>
                      </div>
                      <div className='w-16 space-y-2 flex flex-col items-center'>
                        <div className='w-6 h-6 bg-semantic-info rounded-full border' />
                        <label className='text-label-semibold'>info</label>
                      </div>
                      <div className='w-16 space-y-2 flex flex-col items-center'>
                        <div className='w-6 h-6 bg-semantic-processing rounded-full border' />
                        <label className='text-label-semibold'>
                          processing
                        </label>
                      </div>
                      <div className='w-16 space-y-2 flex flex-col items-center'>
                        <div className='w-6 h-6 bg-semantic-decorative rounded-full border' />
                        <label className='text-label-semibold'>
                          decorative
                        </label>
                      </div>
                    </div>
                  </>
                </Card>
                <Card outline className='text-caption-regular'>
                  <>
                    <StatusTag text='Gradient' />
                    <div className='flex gap-x-4 pt-4'>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='w-20 h-6 bg-decorative-1 rounded-full border' />
                        <label className='text-label-semibold'>
                          Decoative1
                        </label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='w-20 h-6 bg-decorative-2 rounded-full border' />
                        <label className='text-label-semibold'>
                          Decoative2
                        </label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='w-20 h-6 bg-decorative-3 rounded-full border' />
                        <label className='text-label-semibold'>
                          Decoative3
                        </label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='w-20 h-6 bg-decorative-1 rounded-full border' />
                        <label className='text-label-semibold'>AI</label>
                      </div>
                    </div>
                  </>
                </Card>
                <label className='text-caption-semibold py-2 block'>
                  <br />
                  Usage: bg-grayscale-800 bg-opacity-8 / bg-white bg-opacity-16
                </label>
                <Card outline className='text-caption-regular'>
                  <>
                    <StatusTag text='grayscale-800' />
                    <div className='flex gap-x-4 pt-4'>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='relative'>
                          <Avatar
                            shape='rounded'
                            src='https://i.pinimg.com/236x/30/15/40/301540f163d1397c150d8a6955a1d92a.jpg'
                            alt='logo'
                          />
                          <div className='bg-grayscale-800 bg-opacity-8 absolute top-0 left-0 w-full h-full rounded' />
                        </div>
                        <label className='text-label-semibold'>8%</label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='relative'>
                          <Avatar
                            shape='rounded'
                            src='https://i.pinimg.com/236x/30/15/40/301540f163d1397c150d8a6955a1d92a.jpg'
                            alt='logo'
                          />
                          <div className='bg-grayscale-800 bg-opacity-16 absolute top-0 left-0 w-full h-full rounded' />
                        </div>
                        <label className='text-label-semibold'>16%</label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='relative'>
                          <Avatar
                            shape='rounded'
                            src='https://i.pinimg.com/236x/30/15/40/301540f163d1397c150d8a6955a1d92a.jpg'
                            alt='logo'
                          />
                          <div className='bg-grayscale-800 bg-opacity-24 absolute top-0 left-0 w-full h-full rounded' />
                        </div>
                        <label className='text-label-semibold'>24%</label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='relative'>
                          <Avatar
                            shape='rounded'
                            src='https://i.pinimg.com/236x/30/15/40/301540f163d1397c150d8a6955a1d92a.jpg'
                            alt='logo'
                          />
                          <div className='bg-grayscale-800 bg-opacity-40 absolute top-0 left-0 w-full h-full rounded' />
                        </div>
                        <label className='text-label-semibold'>40%</label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='relative'>
                          <Avatar
                            shape='rounded'
                            src='https://i.pinimg.com/236x/30/15/40/301540f163d1397c150d8a6955a1d92a.jpg'
                            alt='logo'
                          />
                          <div className='bg-grayscale-800 bg-opacity-56 absolute top-0 left-0 w-full h-full rounded' />
                        </div>
                        <label className='text-label-semibold'>56%</label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='relative'>
                          <Avatar
                            shape='rounded'
                            src='https://i.pinimg.com/236x/30/15/40/301540f163d1397c150d8a6955a1d92a.jpg'
                            alt='logo'
                          />
                          <div className='bg-grayscale-800 bg-opacity-80 absolute top-0 left-0 w-full h-full rounded' />
                        </div>
                        <label className='text-label-semibold'>80%</label>
                      </div>
                    </div>
                  </>
                </Card>
                <Card outline className='text-caption-regular'>
                  <>
                    <StatusTag text='White' />
                    <div className='flex gap-x-4 pt-4'>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='relative'>
                          <Avatar
                            shape='rounded'
                            src='https://i.pinimg.com/236x/30/15/40/301540f163d1397c150d8a6955a1d92a.jpg'
                            alt='logo'
                          />
                          <div className='bg-white bg-opacity-8 absolute top-0 left-0 w-full h-full rounded' />
                        </div>
                        <label className='text-label-semibold'>8%</label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='relative'>
                          <Avatar
                            shape='rounded'
                            src='https://i.pinimg.com/236x/30/15/40/301540f163d1397c150d8a6955a1d92a.jpg'
                            alt='logo'
                          />
                          <div className='bg-white bg-opacity-16 absolute top-0 left-0 w-full h-full rounded' />
                        </div>
                        <label className='text-label-semibold'>16%</label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='relative'>
                          <Avatar
                            shape='rounded'
                            src='https://i.pinimg.com/236x/30/15/40/301540f163d1397c150d8a6955a1d92a.jpg'
                            alt='logo'
                          />
                          <div className='bg-white bg-opacity-24 absolute top-0 left-0 w-full h-full rounded' />
                        </div>
                        <label className='text-label-semibold'>24%</label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='relative'>
                          <Avatar
                            shape='rounded'
                            src='https://i.pinimg.com/236x/30/15/40/301540f163d1397c150d8a6955a1d92a.jpg'
                            alt='logo'
                          />
                          <div className='bg-white bg-opacity-40 absolute top-0 left-0 w-full h-full rounded' />
                        </div>
                        <label className='text-label-semibold'>40%</label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='relative'>
                          <Avatar
                            shape='rounded'
                            src='https://i.pinimg.com/236x/30/15/40/301540f163d1397c150d8a6955a1d92a.jpg'
                            alt='logo'
                          />
                          <div className='bg-white bg-opacity-56 absolute top-0 left-0 w-full h-full rounded' />
                        </div>
                        <label className='text-label-semibold'>56%</label>
                      </div>
                      <div className='space-y-2 flex flex-col items-center'>
                        <div className='relative'>
                          <Avatar
                            shape='rounded'
                            src='https://i.pinimg.com/236x/30/15/40/301540f163d1397c150d8a6955a1d92a.jpg'
                            alt='logo'
                          />
                          <div className='bg-white bg-opacity-80 absolute top-0 left-0 w-full h-full rounded' />
                        </div>
                        <label className='text-label-semibold'>80%</label>
                      </div>
                    </div>
                  </>
                </Card>
              </div>
            ),
          },
          {
            value: 'icons',
            label: <div>Icons</div>,
            content: (
              <>
                <label className='text-caption-semibold py-2 block'>
                  {`Usage: <IconButton
              adornment={<DeleteIcon />}
              size="small"
              name="delete"/> `}
                  <br />
                  Size: small | medium | large
                </label>
                <Card
                  outline
                  elevation={false}
                  className='text-caption-regular'
                >
                  <>
                    <div className='flex flex-col gap-y-2 pb-4'>
                      <span className='text-primary-300 pb-2'>LogoIcon</span>
                      <LogoIcon />
                      <span className='text-primary-300 pb-2'>
                        LogoBlackIcon
                      </span>
                      <LogoBlackIcon />
                      <span className='text-primary-300 pb-2'>
                        MainLogoIcon
                      </span>
                      <MainLogoIcon />
                    </div>
                    <div className='space-y-4'>
                      <div className='grid grid-cols-6 gap-y-4'>
                        {iconArrays?.map(renderArrays)}
                      </div>
                    </div>
                  </>
                </Card>
              </>
            ),
          },
          {
            value: 'elevation',
            label: <div>Elevation</div>,
            content: (
              <>
                <label className='text-caption-semibold py-2 block'>
                  <br />
                  Usage: shadow-sm / shadow-md / shadow-lg
                </label>
                <div className='grid grid-cols-4 gap-x-4'>
                  <div className='space-y-2'>
                    <div className='h-20 border border-grayscale-200 rounded' />
                    <label className='text-caption-semibold'>Level 0</label>
                  </div>
                  <div className='space-y-2'>
                    <div className='h-20 border border-grayscale-200 rounded shadow-sm' />
                    <label className='text-caption-semibold'>Level 1</label>
                  </div>
                  <div className='space-y-2'>
                    <div className='h-20 border border-grayscale-200 rounded shadow-md' />
                    <label className='text-caption-semibold'>Level 2</label>
                  </div>
                  <div className='space-y-2'>
                    <div className='h-20 border border-grayscale-200 rounded shadow-lg' />
                    <label className='text-caption-semibold'>Level 3</label>
                  </div>
                </div>
              </>
            ),
          },
          {
            value: 'illustration',
            label: <div>Illustration</div>,
            content: (
              <>
                <label className='text-label-semibold pb-10 block'>
                  @redrob-labs/ui/dist/assets/
                </label>
                <div className='grid grid-cols-4 gap-4'>
                  <div className='text-center'>
                    <img src={WelcomeImage} alt='welcome' />
                    <label className='text-label-semibold'>welcome.png</label>
                  </div>
                  <div className='text-center'>
                    <img src={EmailImage} alt='email' />
                    <label className='text-label-semibold'>email.png</label>
                  </div>
                  <div className='text-center'>
                    <img src={PasswordImage} alt='password' />
                    <label className='text-label-semibold'>password.png</label>
                  </div>
                  <div className='text-center'>
                    <img src={Error500Image} alt='error500' />
                    <label className='text-label-semibold'>error500.png</label>
                  </div>
                  <div className='text-center'>
                    <img src={Error404Image} alt='error404' />
                    <label className='text-label-semibold'>error404.png</label>
                  </div>
                  <div className='text-center'>
                    <img src={ComingSoonImage} alt='comingSoon' />
                    <label className='text-label-semibold'>
                      comingSoon.png
                    </label>
                  </div>
                  <div className='text-center'>
                    <img src={NoResultImage} alt='noResult' />
                    <label className='text-label-semibold'>noResult.png</label>
                  </div>
                  <div className='text-center'>
                    <img src={SuccessImage} alt='success' />
                    <label className='text-label-semibold'>success.png</label>
                  </div>
                  <div className='text-center'>
                    <img src={ErrorImage} alt='error' />
                    <label className='text-label-semibold'>error.png</label>
                  </div>
                  <div className='text-center'>
                    <img src={SkillTestImage} alt='skillTest' />
                    <label className='text-label-semibold'>skillTest.png</label>
                  </div>
                  <div className='text-center'>
                    <img src={SignUpImage} alt='signUp' />
                    <label className='text-label-semibold'>signUp.png</label>
                  </div>
                  <div className='text-center'>
                    <img src={TemplateImage} alt='template' />
                    <label className='text-label-semibold'>template.png</label>
                  </div>
                  <div className='text-center'>
                    <img src={LoadingImage} alt='loading' />
                    <label className='text-label-semibold'>loading.png</label>
                  </div>
                  <div className='text-center'>
                    <img src={InProgressImage} alt='inProgress' />
                    <label className='text-label-semibold'>
                      inProgress.png
                    </label>
                  </div>
                  <div className='text-center'>
                    <img src={NotificationImage} alt='notification' />
                    <label className='text-label-semibold'>
                      notification.png
                    </label>
                  </div>
                </div>
              </>
            ),
          },
        ]}
      />
    </div>
  );
};

export default Foundation;
