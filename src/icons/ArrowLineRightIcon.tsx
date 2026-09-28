// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const ArrowLineRightIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      d="M16.8745 3.12553L16.8745 16.8745"
      stroke="currentColor"
      strokeWidth="1.2497"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.4995 9.99945L3.12451 9.99945"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.37451 5.62445L13.7495 9.99945L9.37451 14.3744"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
);
