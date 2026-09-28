// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const BookmarkFillIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      d="M15 3.75H5V16.25L10 12.5L15 16.25V3.75Z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinejoin="round"
    />
    <path d="M15 3.75H5V16.25L10 12.5L15 16.25V3.75Z" fill="currentColor" />
  </BaseIcon>
);
