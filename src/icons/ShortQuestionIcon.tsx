// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";

export const ShortQuestionIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M4.5 10H20.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4.5 14H12.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
};
