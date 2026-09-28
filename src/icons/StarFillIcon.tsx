// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const StarFillIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      d="M10 3.75L11.8541 7.97655L16.25 8.52458L13 11.6848L13.8627 16.25L10 13.9765L6.13729 16.25L7 11.6848L3.75 8.52458L8.1459 7.97655L10 3.75Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinejoin="round"
    />
  </BaseIcon>
);
