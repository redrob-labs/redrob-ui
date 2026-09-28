// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const GraduationCapIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      d="M2.5 6.93576L10 3.75L17.5 6.93576L10 10L2.5 6.93576Z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinejoin="round"
    />
    <path
      d="M4.375 7.5V14.1152L10 16.875L15.625 14.1152V7.5"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinejoin="round"
    />
    <path
      d="M10.625 7.49908L13.75 8.75V17.4991"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
  </BaseIcon>
);
