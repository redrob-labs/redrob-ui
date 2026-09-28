// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const TargetIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <circle
      cx="10"
      cy="10"
      r="6.875"
      stroke="currentColor"
      strokeWidth="1.25"
    />
    <path
      d="M13.75 9.375C13.4048 9.375 13.125 9.65482 13.125 10C13.125 10.3452 13.4048 10.625 13.75 10.625V9.375ZM16.25 9.375H13.75V10.625H16.25V9.375Z"
      fill="currentColor"
    />
    <path
      d="M6.25 9.375C6.59518 9.375 6.875 9.65482 6.875 10C6.875 10.3452 6.59518 10.625 6.25 10.625V9.375ZM3.75 9.375H6.25V10.625H3.75V9.375Z"
      fill="currentColor"
    />
    <path
      d="M10.625 13.75C10.625 13.4048 10.3452 13.125 10 13.125C9.65482 13.125 9.375 13.4048 9.375 13.75H10.625ZM10.625 16.25V13.75H9.375V16.25H10.625Z"
      fill="currentColor"
    />
    <path
      d="M10.625 6.25C10.625 6.59518 10.3452 6.875 10 6.875C9.65482 6.875 9.375 6.59518 9.375 6.25H10.625ZM10.625 3.75002V6.25H9.375V3.75002H10.625Z"
      fill="currentColor"
    />
  </BaseIcon>
);
