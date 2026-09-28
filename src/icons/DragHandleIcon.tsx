// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const DragHandleIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <BaseIcon {...props} viewBox="0 0 20 20">
      <circle cx="12.5" cy="10" r="1.25" fill="currentColor" />
      <circle cx="7.5" cy="10" r="1.25" fill="currentColor" />
      <circle cx="12.5" cy="15" r="1.25" fill="currentColor" />
      <circle cx="7.5" cy="15" r="1.25" fill="currentColor" />
      <circle cx="12.5" cy="5" r="1.25" fill="currentColor" />
      <circle cx="7.5" cy="5" r="1.25" fill="currentColor" />
    </BaseIcon>
  );
};
