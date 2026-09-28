// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";

export const CategoryIconSales: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1483_61634)">
      <path
        d="M15 12.5V9.375C15 8.33947 15.8395 7.5 16.875 7.5H23.125C24.1605 7.5 25 8.33947 25 9.375V12.5"
        stroke="#217BBB"
        strokeWidth="1.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 13.75C5 13.0596 5.55964 12.5 6.25 12.5H33.75C34.4404 12.5 35 13.0596 35 13.75V31.25C35 31.9404 34.4404 32.5 33.75 32.5H6.25C5.55964 32.5 5 31.9404 5 31.25V13.75Z"
        fill="#217BBB"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.59937 13.3305L13.3772 22.0805C13.6144 22.3473 13.9544 22.5 14.3114 22.5H20.0001H25.6887C26.0458 22.5 26.3858 22.3473 26.623 22.0805L34.4008 13.3305C34.5219 13.1943 34.6061 13.0447 34.6574 12.8902C34.4296 12.6499 34.1073 12.5 33.7501 12.5H6.25008C5.89283 12.5 5.57058 12.6499 5.34277 12.8902C5.39403 13.0447 5.47831 13.1943 5.59937 13.3305Z"
        fill="#D0E3EF"
      />
    </g>
    <defs>
      <clipPath id="clip0_1483_61634">
        <rect width="40" height="40" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
