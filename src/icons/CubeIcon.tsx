// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const CubeIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <BaseIcon {...props} viewBox="0 0 20 20">
      <path
        d="M3.75 5.76087L10 3.15218L16.25 5.76087L10 8.36957L3.75 5.76087Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="M10 8.36956L16.25 5.76086V14.2391L10 16.8478V8.36956Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="M10 8.36956L3.75 5.76086V14.2391L10 16.8478V8.36956Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
};
