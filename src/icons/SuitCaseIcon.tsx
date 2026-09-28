// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from ".";
import { BaseIcon } from "./BaseIcon";

export const SuitCaseIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      d="M3.75 11.25H16.25V16.25H3.75V11.25Z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinejoin="round"
    />
    <path
      d="M3.75 3.75H16.25V8.75H3.75V3.75Z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinejoin="round"
    />
  </BaseIcon>
);
