// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const TriangleUpIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      d="M10 5L16.25 15H3.75L10 5Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinejoin="round"
    />
  </BaseIcon>
);
