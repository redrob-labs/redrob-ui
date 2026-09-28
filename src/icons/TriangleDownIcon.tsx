// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from ".";
import { BaseIcon } from "./BaseIcon";

export const TriangleDownIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      d="M10 15L3.75 5L16.25 5L10 15Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinejoin="round"
    />
  </BaseIcon>
);
