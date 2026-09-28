// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const SearchIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <BaseIcon {...props} viewBox="0 0 20 20">
      <circle
        cx="9.375"
        cy="9.375"
        r="5"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M14.1919 13.3081L13.75 12.8661L12.8661 13.75L13.3081 14.1919L14.1919 13.3081ZM15.8081 16.6919C16.0521 16.936 16.4479 16.936 16.6919 16.6919C16.936 16.4479 16.936 16.0521 16.6919 15.8081L15.8081 16.6919ZM13.3081 14.1919L15.8081 16.6919L16.6919 15.8081L14.1919 13.3081L13.3081 14.1919Z"
        fill="currentColor"
      />
    </BaseIcon>
  );
};
