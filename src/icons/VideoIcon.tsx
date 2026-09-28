// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const VideoIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <BaseIcon {...props} viewBox="0 0 20 20">
      <path
        d="M4 18L16 18L16 15.2735L16 6L4 6L4 18Z"
        stroke="currentColor"
        strokeWidth="1.49965"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 8L16 8.88889V15.1111L20 16V8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="13" cy="9" r="1" fill="currentColor" />
    </BaseIcon>
  );
};
