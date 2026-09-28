// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const PersonFrameIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.12683 14.9984C2.78165 14.9984 2.50183 14.7186 2.50183 14.3734V3.12657C2.50183 2.78139 2.78165 2.50157 3.12683 2.50157H14.3734C14.7186 2.50157 14.9984 2.78139 14.9984 3.12657V6.25H13.7484V3.75157H3.75183V13.7484H6.25V14.9984H3.12683Z"
      fill="currentColor"
    />
    <rect
      width="11.2466"
      height="11.2468"
      transform="matrix(1 0 0 -1 5.625 16.8718)"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinejoin="round"
    />
    <circle
      cx="11.25"
      cy="10"
      r="1.25"
      stroke="currentColor"
      strokeWidth="1.25"
    />
    <path
      d="M14.375 17.5V13.125H11.25H8.125V17.5"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinejoin="round"
    />
  </BaseIcon>
);
