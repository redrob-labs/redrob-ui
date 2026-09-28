// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const MobileIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      d="M5.625 3.75C5.625 3.40482 5.90482 3.125 6.25 3.125H13.75C14.0952 3.125 14.375 3.40482 14.375 3.75V16.25C14.375 16.5952 14.0952 16.875 13.75 16.875H6.25C5.90482 16.875 5.625 16.5952 5.625 16.25V3.75Z"
      stroke="currentColor"
      strokeWidth="1.25"
    />
    <path d="M5 13.75H15" stroke="currentColor" strokeWidth="1.25" />
    <path
      d="M10.625 5.625C10.625 5.97018 10.3452 6.25 10 6.25C9.65482 6.25 9.375 5.97018 9.375 5.625C9.375 5.27982 9.65482 5 10 5C10.3452 5 10.625 5.27982 10.625 5.625Z"
      fill="currentColor"
    />
  </BaseIcon>
);
