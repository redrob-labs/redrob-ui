// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const CrownIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      d="M4.75 14.375L3.75 6.875L7.5 8.75L10 3.75L12.5 8.75L16.25 6.875L15 16.25H5L4.75 14.375ZM4.75 14.375H15.625"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinejoin="round"
    />
    <circle
      cx="10"
      cy="11.25"
      r="0.625"
      stroke="currentColor"
      strokeWidth="1.25"
    />
  </BaseIcon>
);
