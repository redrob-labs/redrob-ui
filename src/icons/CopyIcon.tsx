// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const CopyIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      d="M3.125 5.625H14.375V16.875H3.125V5.625Z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.8716 14.9968C17.2168 14.9968 17.4966 14.717 17.4966 14.3718V3.125C17.4966 2.77982 17.2168 2.5 16.8716 2.5H5.62502C5.27985 2.5 5.00002 2.77982 5.00002 3.125V6.24843H6.25002V3.75H16.2466V13.7468H13.7484V14.9968H16.8716Z"
      fill="currentColor"
    />
  </BaseIcon>
);
