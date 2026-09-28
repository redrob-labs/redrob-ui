// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from ".";
import { BaseIcon } from "./BaseIcon";

export const SliderIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      d="M3.75 5.625H16.25"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <path
      d="M3.75 14.375H16.25"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <circle cx="6.875" cy="5.625" r="1.875" fill="currentColor" />
    <circle cx="13.125" cy="14.375" r="1.875" fill="currentColor" />
  </BaseIcon>
);
