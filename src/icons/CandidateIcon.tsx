// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const CandidateIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.12695 14.9984C2.78178 14.9984 2.50195 14.7185 2.50195 14.3734V3.12656C2.50195 2.78138 2.78178 2.50156 3.12695 2.50156H14.3735C14.7187 2.50156 14.9985 2.78138 14.9985 3.12656V6.24998H13.7485V3.75156H3.75195V13.7484H6.25012V14.9984H3.12695Z"
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
