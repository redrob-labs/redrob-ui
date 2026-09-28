// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";

export const CategoryIconDesign: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1483_61631)">
      <rect
        width="17.1433"
        height="17.1433"
        rx="1.25"
        transform="matrix(0.882311 0.470666 -0.882311 0.470666 20.126 18.8633)"
        fill="#D0E3EF"
      />
      <rect
        width="17.1433"
        height="17.1433"
        rx="1.25"
        transform="matrix(0.882311 0.470666 -0.882311 0.470666 20.126 11.9297)"
        fill="#69A3CC"
      />
      <rect
        width="17.1433"
        height="17.1433"
        rx="1.25"
        transform="matrix(0.882311 0.470666 -0.882311 0.470666 20.126 5)"
        fill="#217BBB"
      />
    </g>
    <defs>
      <clipPath id="clip0_1483_61631">
        <rect width="40" height="40" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
