// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const HomeIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      d="M2.5 7.5L10 2.5L17.5 7.5"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.75 7.5V17.5H16.25V7.5"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <rect
      x="5.625"
      y="11.875"
      width="8.75"
      height="3.75"
      rx="1.875"
      stroke="currentColor"
      strokeWidth="1.25"
    />
  </BaseIcon>
);
