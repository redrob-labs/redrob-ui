// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const TrophyIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <BaseIcon {...props} viewBox="0 0 20 20">
      <path
        d="M5 2.5H15V7.5C15 10.2614 12.7614 12.5 10 12.5V12.5C7.23858 12.5 5 10.2614 5 7.5V2.5Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="M15 5H17.5V7.5C17.5 8.19036 16.9404 8.75 16.25 8.75H15V5Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 5H5V8.75H3.75C3.05964 8.75 2.5 8.19036 2.5 7.5V5Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <rect
        x="8.75"
        y="12.5"
        width="2.5"
        height="2.5"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M12.5 15H7.5L6.25 16.875H13.75L12.5 15Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
};
