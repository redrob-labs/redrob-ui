// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";

export const TimerIcon: FC<IconsProps> = (props: IconsProps) => (
  <div className="flex justify-center items-center">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Small / Timer">
        <circle id="Ellipse 777" cx="8" cy="8.5" r="5" stroke="currentColor" />
        <path
          id="Vector 612"
          d="M10.667 2L13.2651 3.5"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          id="Vector 613"
          d="M5.26465 2L2.66657 3.5"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          id="Vector 611"
          d="M8 6V8"
          stroke="currentColor"
          strokeLinecap="round"
        />
      </g>
    </svg>
  </div>
);
