// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const AnswerLongIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <BaseIcon {...props} viewBox="0 0 20 20">
      <path
        d="M3.3335 11.6667H16.6668"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M3.3335 8.33333H16.6668"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path d="M3.3335 5H16.6668" stroke="currentColor" strokeWidth="1.25" />
      <path d="M3.3335 15H10.0002" stroke="currentColor" strokeWidth="1.25" />
    </BaseIcon>
  );
};
