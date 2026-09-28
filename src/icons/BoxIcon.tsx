// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from ".";
import { BaseIcon } from "./BaseIcon";

export const BoxIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <rect
      x="7.5"
      y="10"
      width="5"
      height="1.25"
      rx="0.625"
      fill="currentColor"
    />
    <path
      d="M3.75 7.49994L16.25 7.5V16.25L3.75 16.2499L3.75 7.49994Z"
      stroke="currentColor"
      strokeWidth="1.2497"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 7.50003L17.5 7.5V3.75L2.5 3.75003L2.5 7.50003Z"
      stroke="currentColor"
      strokeWidth="1.2497"
      strokeLinejoin="round"
    />
  </BaseIcon>
);
