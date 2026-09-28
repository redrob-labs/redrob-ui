// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const DownloadIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <BaseIcon {...props} viewBox="0 0 20 20">
      <path
        d="M6.25 8.75L4.375 8.75V15.625H15.625V8.75L13.75 8.75"
        stroke="currentColor"
        strokeWidth="1.2497"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 11.875L10 4.375"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 10.625L10 13.125L7.5 10.625"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
};
