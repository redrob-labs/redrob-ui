// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const ChatIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <g clipPath="url(#clip0_2843_3559)">
      <path
        d="M3.125 3.125V2.5C2.77982 2.5 2.5 2.77982 2.5 3.125H3.125ZM16.875 3.125H17.5C17.5 2.77982 17.2202 2.5 16.875 2.5V3.125ZM3.125 14.375H2.5C2.5 14.7202 2.77982 15 3.125 15V14.375ZM8 14.375L8.48804 13.9846C8.36944 13.8363 8.18986 13.75 8 13.75V14.375ZM10 16.875L9.51196 17.2654C9.63056 17.4137 9.81014 17.5 10 17.5C10.1899 17.5 10.3694 17.4137 10.488 17.2654L10 16.875ZM12 14.375V13.75C11.8101 13.75 11.6306 13.8363 11.512 13.9846L12 14.375ZM16.875 14.375V15C17.2202 15 17.5 14.7202 17.5 14.375H16.875ZM3.125 3.75H16.875V2.5H3.125V3.75ZM3.75 14.375V3.125H2.5V14.375H3.75ZM8 13.75H3.125V15H8V13.75ZM10.488 16.4846L8.48804 13.9846L7.51196 14.7654L9.51196 17.2654L10.488 16.4846ZM11.512 13.9846L9.51196 16.4846L10.488 17.2654L12.488 14.7654L11.512 13.9846ZM16.875 13.75H12V15H16.875V13.75ZM16.25 3.125V14.375H17.5V3.125H16.25Z"
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
      <clipPath id="clip0_2843_3559">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </BaseIcon>
);
