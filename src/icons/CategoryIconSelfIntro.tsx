// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";

export const CategoryIconSelfIntro: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1483_61649)">
      <rect x="6" y="9" width="28" height="19" rx="1.25" fill="#D0E3EF" />
      <circle cx="14.5" cy="18.5" r="1.5" fill="#217BBB" />
      <circle cx="20.5" cy="18.5" r="1.5" fill="#217BBB" />
      <circle cx="26.5" cy="18.5" r="1.5" fill="#217BBB" />
      <path
        d="M22 31.2453V27H30L24.0731 32.186C23.2649 32.8932 22 32.3192 22 31.2453Z"
        fill="#D0E3EF"
      />
    </g>
    <defs>
      <clipPath id="clip0_1483_61649">
        <rect width="40" height="40" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
