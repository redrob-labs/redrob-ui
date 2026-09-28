// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const EssayIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <BaseIcon {...props} viewBox="0 0 20 20">
      <path d="M4 14H20" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 10H20" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 18H12" stroke="currentColor" strokeWidth="1.5" />
    </BaseIcon>
  );
};
