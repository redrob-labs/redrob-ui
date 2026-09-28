// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const LocationIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      d="M13 6.8C13 10.4 8 14 8 14C8 14 3 10.4 3 6.8C3 5.52696 3.52678 4.30606 4.46447 3.40589C5.40215 2.50571 6.67392 2 8 2C9.32608 2 10.5979 2.50571 11.5355 3.40589C12.4732 4.30606 13 5.52696 13 6.8Z"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M8 9C9.10457 9 10 8.10457 10 7C10 5.89543 9.10457 5 8 5C6.89543 5 6 5.89543 6 7C6 8.10457 6.89543 9 8 9Z"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </BaseIcon>
);
