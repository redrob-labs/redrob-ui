// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const LightningIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      d="M2.5 10.625L11.5 1.25L10.75 8.125L17.5 9.375L8.5 18.75L9.25 11.875L2.5 10.625Z"
      fill="currentColor"
    />
  </BaseIcon>
);
