// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const AscIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 10">
    <path d="M10 2.5L5 7.5H15L10 2.5Z" fill="currentColor" />
  </BaseIcon>
);
