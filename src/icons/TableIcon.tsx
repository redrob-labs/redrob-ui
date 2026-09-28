// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const TableIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <BaseIcon {...props} viewBox="0 0 20 20">
      <path
        d="M3.75002 3.74879L16.25 3.74877L16.25 16.2499L3.75 16.2499L3.75002 3.74879Z"
        stroke="currentColor"
        strokeWidth="1.2497"
        strokeLinejoin="round"
      />
      <path
        d="M16.875 7.5L3.125 7.5"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path d="M10 16.25L10 3.75" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M16.875 12.5L3.125 12.5"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </BaseIcon>
  );
};
