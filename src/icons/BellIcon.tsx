// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const BellIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      d="M15.8335 15L4.16683 15L5.00016 12.5L5.00016 10V10C5.00016 7.23858 7.23874 5 10.0002 5V5C12.7616 5 15.0002 7.23858 15.0002 10V10L15.0002 12.5L15.8335 15Z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 15C7.5 15.383 7.56466 15.3456 7.6903 15.6995C7.81594 16.0534 8.00009 16.3749 8.23223 16.6457C8.46438 16.9166 8.73998 17.1314 9.04329 17.278C9.34661 17.4246 9.6717 17.5 10 17.5C10.3283 17.5 10.6534 17.4246 10.9567 17.278C11.26 17.1314 11.5356 16.9166 11.7678 16.6457C11.9999 16.3749 12.1841 16.0534 12.3097 15.6995C12.4353 15.3456 12.5 15.383 12.5 15L10 15L7.5 15Z"
      stroke="currentColor"
      strokeWidth="1.25"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.4439 5C11.5857 4.75486 11.6668 4.47024 11.6668 4.16667C11.6668 3.24619 10.9206 2.5 10.0002 2.5C9.07969 2.5 8.3335 3.24619 8.3335 4.16667C8.3335 4.47024 8.41466 4.75486 8.55647 5H11.4439Z"
      fill="currentColor"
    />
  </BaseIcon>
);
