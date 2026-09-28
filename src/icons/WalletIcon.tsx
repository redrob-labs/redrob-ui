// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const WalletIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      d="M2.5 6.25H17.5V16.25H2.5V3.75H17.5"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 10H13.75V12.5H17.5"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
);
