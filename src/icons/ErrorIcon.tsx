// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const ErrorIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.25 10C16.25 13.4518 13.4518 16.25 10 16.25C8.49921 16.25 7.12196 15.721 6.04454 14.8393L14.8393 6.04454C15.721 7.12196 16.25 8.49921 16.25 10ZM5.16066 13.9555L13.9555 5.16066C12.878 4.27898 11.5008 3.75 10 3.75C6.54822 3.75 3.75 6.54822 3.75 10C3.75 11.5008 4.27898 12.878 5.16066 13.9555ZM17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
      fill="currentColor"
    />
  </BaseIcon>
);
