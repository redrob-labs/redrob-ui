// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const DiamondIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <BaseIcon {...props} viewBox="0 0 20 20">
      <path
        d="M2.5 8.09783L10 16.25L17.5 8.09783L13.5 3.75H6.5L2.5 8.09783ZM2.5 8.09783L17.5 8.125"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="M10 16.25L13.75 8.125L10.625 3.75"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="M10 16.25L6.25 8.125L9.375 3.75"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
};
