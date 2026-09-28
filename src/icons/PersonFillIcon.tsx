// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const PersonFillIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <BaseIcon {...props} viewBox="0 0 20 20">
      <circle cx="10" cy="6.25" r="3.75" fill="currentColor" />
      <path
        d="M10 11.25C6.97348 11.25 4.44941 13.4012 3.87341 16.258C3.73696 16.9347 4.30964 17.5 5 17.5H15C15.6904 17.5 16.263 16.9347 16.1266 16.258C15.5506 13.4012 13.0265 11.25 10 11.25Z"
        fill="currentColor"
      />
    </BaseIcon>
  );
};
