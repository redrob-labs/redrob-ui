// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const MapPinIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      d="M16.25 8.5C16.25 13 10 17.5 10 17.5C10 17.5 3.75 13 3.75 8.5C3.75 6.9087 4.40848 5.38258 5.58058 4.25736C6.75269 3.13214 8.3424 2.5 10 2.5C11.6576 2.5 13.2473 3.13214 14.4194 4.25736C15.5915 5.38258 16.25 6.9087 16.25 8.5Z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <path
      d="M10 11.25C11.3807 11.25 12.5 10.1307 12.5 8.75C12.5 7.36929 11.3807 6.25 10 6.25C8.61929 6.25 7.5 7.36929 7.5 8.75C7.5 10.1307 8.61929 11.25 10 11.25Z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
  </BaseIcon>
);
