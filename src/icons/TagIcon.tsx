// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const TagIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      d="M4.13452 10.5622L10.3217 4.37502L15.625 4.37502L15.625 9.67832L9.43782 15.8655L4.13452 10.5622Z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.3653 7.51651C13.276 7.84992 12.9333 8.04779 12.5999 7.95845C12.2664 7.86911 12.0686 7.5264 12.1579 7.19298C12.2473 6.85957 12.59 6.6617 12.9234 6.75104C13.2568 6.84038 13.4547 7.18309 13.3653 7.51651Z"
      fill="currentColor"
    />
  </BaseIcon>
);
