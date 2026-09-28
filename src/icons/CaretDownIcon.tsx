// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const CaretDownIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      d="M16.25 6.875L10 13.125L3.75 6.875"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
);
