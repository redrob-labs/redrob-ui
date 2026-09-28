// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const StarFourIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.0017 2.5C10.0742 6.60877 13.3913 9.92606 17.5 9.99878V10.0013C13.3913 10.074 10.0742 13.3912 10.0017 17.5H9.99947C9.92697 13.3909 6.60923 10.0734 2.5 10.0012V9.99876C6.60929 9.9267 9.92709 6.60918 9.99959 2.5H10.0017Z"
      fill="currentColor"
    />
  </BaseIcon>
);
