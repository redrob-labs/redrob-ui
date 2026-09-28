// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const TextUnderlineIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <BaseIcon {...props} viewBox="0 0 20 20">
      <path
        d="M9.67486 14.37C8.29486 14.37 7.20986 13.975 6.41986 13.185C5.62986 12.395 5.23486 11.24 5.23486 9.72V3.75H6.73486V9.66C6.73486 10.83 6.98986 11.685 7.49986 12.225C8.01986 12.765 8.74986 13.035 9.68986 13.035C10.6399 13.035 11.3699 12.765 11.8799 12.225C12.3999 11.685 12.6599 10.83 12.6599 9.66V3.75H14.1149V9.72C14.1149 11.24 13.7199 12.395 12.9299 13.185C12.1499 13.975 11.0649 14.37 9.67486 14.37Z"
        fill="currentColor"
      />
      <path
        d="M5 16.25H15"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="square"
      />
    </BaseIcon>
  );
};
