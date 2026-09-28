// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const LockIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <BaseIcon {...props} viewBox="0 0 20 20">
      <rect
        x="3.75"
        y="7.5"
        width="12.5"
        height="8.75"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 1.875C8.27411 1.875 6.875 3.27411 6.875 5V7.5H8.125V5C8.125 3.96447 8.96447 3.125 10 3.125C11.0355 3.125 11.875 3.96447 11.875 5V7.5H13.125V5C13.125 3.27411 11.7259 1.875 10 1.875Z"
        fill="currentColor"
      />
      <circle cx="10" cy="11.25" r="1.25" fill="currentColor" />
      <path
        d="M9.375 13.75C9.375 14.0952 9.65482 14.375 10 14.375C10.3452 14.375 10.625 14.0952 10.625 13.75H9.375ZM9.375 11.25V13.75H10.625V11.25H9.375Z"
        fill="currentColor"
      />
    </BaseIcon>
  );
};
