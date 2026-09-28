// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const ListBulletIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      d="M7 5H16"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <path
      d="M7 10H16"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <path
      d="M7 15H16"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <circle cx="3.75" cy="5" r="0.75" fill="currentColor" />
    <circle cx="3.75" cy="10" r="0.75" fill="currentColor" />
    <circle cx="3.75" cy="15" r="0.75" fill="currentColor" />
  </BaseIcon>
);
