// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const PersonLineIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <BaseIcon {...props} viewBox="0 0 20 20">
      <circle
        cx="10"
        cy="6.25"
        r="3.125"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M10 11.25C6.54822 11.25 3.75 13.4232 3.75 16.875H16.25C16.25 13.4232 13.4518 11.25 10 11.25Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </BaseIcon>
  );
};
