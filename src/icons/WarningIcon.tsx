// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const WarningIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <BaseIcon {...props} viewBox="0 0 20 20">
      <path
        d="M2.2479 15.9377L9.45863 3.43905C9.69915 3.02215 10.3008 3.02215 10.5414 3.43905L17.7521 15.9377C17.9925 16.3543 17.6918 16.875 17.2107 16.875L2.78926 16.875C2.30823 16.875 2.00751 16.3543 2.2479 15.9377Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M10.625 14.375C10.625 14.0298 10.3452 13.75 10 13.75C9.65482 13.75 9.375 14.0298 9.375 14.375C9.375 14.7202 9.65482 15 10 15C10.3452 15 10.625 14.7202 10.625 14.375Z"
        fill="currentColor"
      />
      <path d="M9.375 12.5H10.625V8.125H9.375V12.5Z" fill="currentColor" />
    </BaseIcon>
  );
};
