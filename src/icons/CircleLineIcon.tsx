// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const CircleLineIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <circle
      cx="10"
      cy="10"
      r="5.625"
      stroke="currentColor"
      strokeWidth="1.25"
    />
  </BaseIcon>
);
