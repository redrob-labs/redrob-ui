// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";

export const CategoryIconMarketing: FC<IconsProps> = (props: IconsProps) => (
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
      y="16.25"
      width="7.5"
      height="17.5"
      rx="1.25"
      fill="#D0E3EF"
    />
    <rect
      x="16.25"
      y="11.25"
      width="7.5"
      height="22.5"
      rx="1.25"
      fill="#69A3CC"
    />
    <rect
      x="26.25"
      y="6.25"
      width="7.5"
      height="27.5"
      rx="1.25"
      fill="#217BBB"
    />
  </svg>
);
