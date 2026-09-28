// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const CodeBlockIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      d="M3.61865 7.5L1.25023 5L3.61865 2.5"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.38135 2.5L8.74977 5L6.38135 7.5"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.12598 9.9917L3.12598 16.8661L16.8744 16.8661L16.8744 3.11716L10.0002 3.11717"
      stroke="currentColor"
      strokeWidth="1.2497"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
);
