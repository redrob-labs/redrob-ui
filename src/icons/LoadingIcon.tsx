// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";

export const LoadingIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    {...props}
  >
    <circle
      cx="50"
      cy="50"
      r="40"
      fill="none"
      stroke="#c1dded"
      strokeWidth="20"
    />

    <circle
      cx="50"
      cy="50"
      r="40"
      fill="none"
      stroke="#69a3cc"
      strokeWidth="20"
    >
      <animate
        attributeName="strokeDashoffset"
        dur="2s"
        from="0"
        to="502"
        repeatCount="indefinite"
      />
      <animate
        attributeName="strokeDasharray"
        dur="2s"
        values="150.6 100.4;1 250;150.6 100.4"
        keyTimes="0;0.5;1"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);
