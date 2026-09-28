// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const NewTabIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      d="M9.99993 3.75H3.75V16.25H16.25V10"
      stroke="currentColor"
      strokeWidth="1.2497"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.25 3.75L8.75 11.25"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <path
      d="M12.5 3.75H16.25V7.5"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
);
