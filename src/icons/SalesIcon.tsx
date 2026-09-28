// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const SalesIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      d="M3.125 3.125V16.875H16.875"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 10V16.25"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <path
      d="M11.25 7.5L11.25 16.25"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <path
      d="M15 5L15 16.25"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
  </BaseIcon>
);
