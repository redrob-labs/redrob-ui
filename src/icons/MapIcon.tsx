// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const MapIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <g clipPath="url(#clip0_3599_626)">
      <path
        d="M3.125 6.25V16.25L7.5 13.75L12.5 16.25L16.875 13.75V3.75L12.5 6.25L7.5 3.75L3.125 6.25Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 3.75V13.75"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 6.25V16.25"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_3599_626">
        <rect
          width="15"
          height="15"
          fill="white"
          transform="translate(2.5 2.5)"
        />
      </clipPath>
    </defs>
  </BaseIcon>
);
