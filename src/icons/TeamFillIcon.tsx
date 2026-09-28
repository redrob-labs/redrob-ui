// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const TeamFillIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <BaseIcon {...props} viewBox="0 0 20 20">
      <path
        d="M9.50012 7.49998C9.50012 8.60455 8.60469 9.49998 7.50012 9.49998C6.39555 9.49998 5.50012 8.60455 5.50012 7.49998C5.50012 6.39542 6.39555 5.49998 7.50012 5.49998C8.60469 5.49998 9.50012 6.39542 9.50012 7.49998Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M7.5 11.125C5.08375 11.125 3.125 13.0838 3.125 15.5H11.875L10.9951 12.9447C10.9635 12.8528 10.9173 12.7663 10.8549 12.6918C10.8057 12.6331 10.755 12.5757 10.7029 12.5197C10.5697 12.3766 10.4271 12.2425 10.2759 12.1183C9.52068 11.4976 8.55385 11.125 7.5 11.125Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M14.9999 9.25002C14.9999 10.0094 14.3843 10.625 13.6249 10.625C12.8655 10.625 12.2499 10.0094 12.2499 9.25002C12.2499 8.49062 12.8655 7.87502 13.6249 7.87502C14.3843 7.87502 14.9999 8.49062 14.9999 9.25002Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M13.5417 12.1667C11.7008 12.1667 10.2084 13.6591 10.2084 15.5H16.8751C16.8751 13.6591 15.3827 12.1667 13.5417 12.1667Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </BaseIcon>
  );
};
