// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const DescIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 10">
    <path d="M10 7.5L15 2.5L5 2.5L10 7.5Z" fill="currentColor" />
  </BaseIcon>
);
