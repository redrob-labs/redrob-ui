// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const DashBoardIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      d="M11.25 11.25H16.25V16.25H11.25V11.25Z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeMiterlimit="16"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.75 11.25H8.75V16.25H3.75V11.25Z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeMiterlimit="16"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.75 3.75H8.75V8.75H3.75V3.75Z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeMiterlimit="16"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.25 3.75H16.25V8.75H11.25V3.75Z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeMiterlimit="16"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
);
