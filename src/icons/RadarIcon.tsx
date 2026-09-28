// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const RadarIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <circle
      cx="10"
      cy="10"
      r="6.875"
      stroke="currentColor"
      strokeWidth="1.25"
    />
    <circle
      cx="10"
      cy="10"
      r="4.375"
      stroke="currentColor"
      strokeWidth="1.25"
    />
    <circle
      cx="10"
      cy="10"
      r="1.875"
      stroke="currentColor"
      strokeWidth="1.25"
    />
    <path
      d="M11.25 8.75L15.5801 6.25"
      stroke="currentColor"
      strokeWidth="1.25"
    />
  </BaseIcon>
);
