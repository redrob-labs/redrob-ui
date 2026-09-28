// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const XIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <BaseIcon {...props} viewBox="0 0 20 20">
      <path
        d="M5.58057 5.5806L14.4194 14.4194"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M5.58057 14.4194L14.4194 5.58057"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </BaseIcon>
  );
};
