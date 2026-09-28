// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from ".";
import { BaseIcon } from "./BaseIcon";

export const RowIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      d="M8.75 3.75L8.75 16.25L3.75 16.25L3.75 3.75L8.75 3.75Z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinejoin="round"
    />
    <path
      d="M16.25 3.75L16.25 16.25L11.25 16.25L11.25 3.75L16.25 3.75Z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinejoin="round"
    />
  </BaseIcon>
);
