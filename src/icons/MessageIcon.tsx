// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const MessageIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <g clipPath="url(#clip0_9072_5895)">
      <path
        d="M3.125 3.75V3.125C2.77982 3.125 2.5 3.40482 2.5 3.75H3.125ZM16.875 3.75H17.5C17.5 3.40482 17.2202 3.125 16.875 3.125V3.75ZM3.125 15H2.5C2.5 15.3452 2.77982 15.625 3.125 15.625V15ZM8.5 15L8.98804 14.6096C8.86944 14.4613 8.68986 14.375 8.5 14.375V15ZM10 16.875L9.51196 17.2654C9.63056 17.4137 9.81014 17.5 10 17.5C10.1899 17.5 10.3694 17.4137 10.488 17.2654L10 16.875ZM11.5 15V14.375C11.3101 14.375 11.1306 14.4613 11.012 14.6096L11.5 15ZM16.875 15V15.625C17.2202 15.625 17.5 15.3452 17.5 15H16.875ZM3.125 4.375H16.875V3.125H3.125V4.375ZM3.75 15V3.75H2.5V15H3.75ZM8.5 14.375H3.125V15.625H8.5V14.375ZM10.488 16.4846L8.98804 14.6096L8.01196 15.3904L9.51196 17.2654L10.488 16.4846ZM11.012 14.6096L9.51196 16.4846L10.488 17.2654L11.988 15.3904L11.012 14.6096ZM16.875 14.375H11.5V15.625H16.875V14.375ZM16.25 3.75V15H17.5V3.75H16.25Z"
        fill="currentColor"
      />
      <path
        d="M6.875 6.25H13.125"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M6.875 8.75H13.125"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_9072_5895">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </BaseIcon>
);
