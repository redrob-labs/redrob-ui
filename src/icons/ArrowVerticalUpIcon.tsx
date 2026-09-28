// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";

export const ArrowVerticalUpIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
  >
    <path d="M5 0.5L0 5.5H10L5 0.5Z" fill="currentColor" />
  </svg>
);
