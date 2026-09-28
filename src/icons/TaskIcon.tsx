// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const TaskIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <BaseIcon {...props} viewBox="0 0 20 20">
      <path
        d="M12.4595 3.75L5.51136 3.75C5.37574 3.75 5.24567 3.81585 5.14977 3.93306C5.05387 4.05027 5 4.20924 5 4.375L5 16.875C5 17.0408 5.05388 17.1997 5.14977 17.3169C5.24567 17.4342 5.37574 17.5 5.51136 17.5L15.7386 17.5C15.8743 17.5 16.0043 17.4342 16.1002 17.3169C16.1961 17.1997 16.25 17.0408 16.25 16.875L16.25 8.38281C16.2502 8.30166 16.2374 8.22124 16.2121 8.14617C16.1869 8.0711 16.1498 8.00284 16.103 7.94531L12.8175 3.92969C12.7704 3.87245 12.7146 3.82711 12.6531 3.79628C12.5917 3.76544 12.5259 3.74972 12.4595 3.75V3.75Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.2057 8.12454L12.6709 8.12454L12.6709 3.80423"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="7.5"
        y="10"
        width="1.5625"
        height="1.5625"
        rx="0.78125"
        fill="currentColor"
      />
      <rect
        x="9.6875"
        y="10.1562"
        width="3.75"
        height="1.25"
        rx="0.625"
        fill="currentColor"
      />
      <rect
        x="7.5"
        y="12.5"
        width="1.5625"
        height="1.5625"
        rx="0.78125"
        fill="currentColor"
      />
      <rect
        x="9.6875"
        y="12.6562"
        width="5"
        height="1.25"
        rx="0.625"
        fill="currentColor"
      />
    </BaseIcon>
  );
};
