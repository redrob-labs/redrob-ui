// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const BookIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      d="M4.375 5.625C4.375 4.24429 5.49429 3.125 6.875 3.125H15.625V16.875H5.625C4.93464 16.875 4.375 16.3154 4.375 15.625V5.625Z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinejoin="round"
    />
    <path
      d="M6.25 6.25H11.25"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <path
      d="M6.25 8.75H13.75"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <path
      d="M4.375 15.3125C4.375 14.4496 5.07456 13.75 5.9375 13.75H15.625V16.875H5.9375C5.07456 16.875 4.375 16.1754 4.375 15.3125V15.3125Z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinejoin="round"
    />
  </BaseIcon>
);
