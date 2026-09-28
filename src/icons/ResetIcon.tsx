// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const ResetIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <BaseIcon {...props} viewBox="0 0 20 20">
      <path
        d="M10 4.375C10.3452 4.375 10.625 4.09518 10.625 3.75C10.625 3.40482 10.3452 3.125 10 3.125V4.375ZM15.625 10C15.625 13.1066 13.1066 15.625 10 15.625V16.875C13.797 16.875 16.875 13.797 16.875 10H15.625ZM10 15.625C6.8934 15.625 4.375 13.1066 4.375 10H3.125C3.125 13.797 6.20304 16.875 10 16.875V15.625ZM4.375 10C4.375 6.8934 6.8934 4.375 10 4.375V3.125C6.20304 3.125 3.125 6.20304 3.125 10H4.375ZM13.7205 5.78109C14.8893 6.8127 15.625 8.32005 15.625 10H16.875C16.875 7.94653 15.9739 6.10275 14.5477 4.84391L13.7205 5.78109Z"
        fill="currentColor"
      />
      <path
        d="M13.75 8.75V5H17.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
};
