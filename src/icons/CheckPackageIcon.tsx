// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const CheckPackageIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <BaseIcon {...props} viewBox="0 0 16 17">
      <circle cx="8" cy="8.5" r="8" fill="#69A3CC" />
      <path
        d="M4.57141 8.49665L6.85713 10.7824L11.4286 6.21094"
        stroke="white"
        strokeWidth="1.14286"
      />
    </BaseIcon>
  );
};
