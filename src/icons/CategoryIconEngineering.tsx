// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";

export const CategoryIconEngineering: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 11.25H35V32.5C35 33.1904 34.4404 33.75 33.75 33.75H6.25C5.55964 33.75 5 33.1904 5 32.5V11.25Z"
      fill="#D0E3EF"
    />
    <path
      d="M15 17.5L10 22.5L15 27.5"
      stroke="#217BBB"
      strokeWidth="1.875"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25 17.5L30 22.5L25 27.5"
      stroke="#217BBB"
      strokeWidth="1.875"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.5 17.5L17.5 27.5"
      stroke="#217BBB"
      strokeWidth="1.875"
      strokeLinecap="round"
    />
    <path
      d="M5 7.5C5 6.80964 5.55964 6.25 6.25 6.25H33.75C34.4404 6.25 35 6.80964 35 7.5V11.25H5V7.5Z"
      fill="#217BBB"
    />
  </svg>
);
