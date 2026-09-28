// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const FileIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <g clipPath="url(#clip0_2840_3193)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.12439 3.754C2.77929 3.754 2.49954 4.03376 2.49954 4.37885V15.6248C2.49954 15.9699 2.77929 16.2496 3.12439 16.2496H14.3519C14.4301 16.2526 14.5067 16.2407 14.5783 16.2161C14.6678 16.1855 14.75 16.1347 14.8181 16.0666C14.8916 15.9931 14.9449 15.9032 14.9744 15.8055L17.4624 8.96359C17.532 8.77198 17.5039 8.55843 17.3869 8.39144C17.2699 8.22445 17.0789 8.125 16.875 8.125H15.0001L14.9999 6.24992C14.9998 5.90485 14.7201 5.62515 14.375 5.62515H10.2079L7.87442 3.8786C7.76635 3.79771 7.63499 3.754 7.5 3.754H3.12439ZM15.0006 12.0756L15.0003 9.375H15.9827L15.0006 12.0756ZM13.7505 8.72527L13.7502 6.87485H10C9.86501 6.87485 9.73365 6.83114 9.62558 6.75025L7.29206 5.00371H3.74924V14.9999H13.75V8.75C13.75 8.74172 13.7502 8.73348 13.7505 8.72527Z"
        fill="currentColor"
      />
      <rect
        x="5"
        y="12.5"
        width="6.25"
        height="1.25"
        rx="0.625"
        fill="currentColor"
      />
      <rect
        x="5"
        y="10"
        width="3.75"
        height="1.25"
        rx="0.625"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_2840_3193">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </BaseIcon>
);
