// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const CheckIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <BaseIcon {...props} viewBox="0 0 20 20">
      <path
        d="M3.75 9.25L8.4375 13.75L16.25 6.25"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
};
