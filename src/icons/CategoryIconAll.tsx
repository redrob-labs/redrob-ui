// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";

export const CategoryIconAll: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="6.25"
      y="6.25"
      width="12.5"
      height="12.5"
      rx="1.25"
      fill="#D0E3EF"
    />
    <rect
      x="21.25"
      y="6.25"
      width="12.5"
      height="12.5"
      rx="1.25"
      fill="#217BBB"
    />
    <rect
      x="6.25"
      y="21.25"
      width="12.5"
      height="12.5"
      rx="1.25"
      fill="#217BBB"
    />
    <rect
      x="21.25"
      y="21.25"
      width="12.5"
      height="12.5"
      rx="1.25"
      fill="#217BBB"
    />
  </svg>
);
