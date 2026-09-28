// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const TextItalicIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      d="M11.635 6.26L10.045 14.24H12.07L11.83 15.5H6.25L6.49 14.24H8.545L10.15 6.26H8.11L8.35 5H13.93L13.69 6.26H11.635Z"
      fill="currentColor"
    />
  </BaseIcon>
);
