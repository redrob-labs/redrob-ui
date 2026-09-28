// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from ".";
import { BaseIcon } from "./BaseIcon";

export const TriangleRightIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      d="M16.25 10L6.25 3.75V16.25L16.25 10Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinejoin="round"
    />
  </BaseIcon>
);
