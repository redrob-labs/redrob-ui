// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const RadioIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <BaseIcon {...props} viewBox="0 0 20 20">
      <circle
        cx="12"
        cy="12"
        r="8.75"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="5" fill="currentColor" />
    </BaseIcon>
  );
};
