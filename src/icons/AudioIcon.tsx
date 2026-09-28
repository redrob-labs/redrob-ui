// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const AudioIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 8.75V6.25C12.5 4.86929 11.3807 3.75 10 3.75C8.61929 3.75 7.5 4.86929 7.5 6.25V8.75C7.5 10.1307 8.61929 11.25 10 11.25C11.3807 11.25 12.5 10.1307 12.5 8.75ZM10 2.5C7.92893 2.5 6.25 4.17893 6.25 6.25V8.75C6.25 10.8211 7.92893 12.5 10 12.5C12.0711 12.5 13.75 10.8211 13.75 8.75V6.25C13.75 4.17893 12.0711 2.5 10 2.5Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.65971 10C4.25402 10 3.94881 10.3733 4.07905 10.7576C4.91528 13.2245 7.25012 15 9.99964 15C12.7492 15 15.084 13.2245 15.9202 10.7576C16.0505 10.3733 15.7453 10 15.3396 10C15.0468 10 14.7952 10.2 14.6942 10.4749C13.9916 12.3864 12.1549 13.75 9.99964 13.75C7.84442 13.75 6.00768 12.3864 5.30513 10.4749C5.20412 10.2 4.95251 10 4.65971 10Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 13.75C10.3452 13.75 10.625 14.0298 10.625 14.375V16.875C10.625 17.2202 10.3452 17.5 10 17.5C9.65482 17.5 9.375 17.2202 9.375 16.875V14.375C9.375 14.0298 9.65482 13.75 10 13.75Z"
      fill="currentColor"
    />
  </BaseIcon>
);
