// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const MenuIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <circle cx="10" cy="10" r="1.25" fill="currentColor" />
    <circle cx="10" cy="15" r="1.25" fill="currentColor" />
    <circle cx="10" cy="5" r="1.25" fill="currentColor" />
  </BaseIcon>
);
