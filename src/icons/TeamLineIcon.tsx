// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const TeamLineIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      d="M9.50012 7.49998C9.50012 8.60455 8.60469 9.49998 7.50012 9.49998C6.39556 9.49998 5.50013 8.60455 5.50013 7.49998C5.50013 6.39542 6.39556 5.49999 7.50012 5.49999C8.60469 5.49999 9.50012 6.39542 9.50012 7.49998Z"
      stroke="currentColor"
      strokeWidth="1.25001"
    />
    <path
      d="M11.875 15.5001H3.125C3.125 13.0838 5.08375 11.1251 7.5 11.1251C8.55385 11.1251 9.52068 11.4977 10.2759 12.1183C10.4271 12.2425 10.5697 12.3767 10.7029 12.5198C10.7884 12.6116 10.8699 12.707 10.9473 12.8059"
      stroke="currentColor"
      strokeWidth="1.25001"
    />
    <path
      d="M15.0002 9.24995C15.0002 10.0093 14.3846 10.6249 13.6252 10.6249C12.8658 10.6249 12.2502 10.0093 12.2502 9.24995C12.2502 8.49057 12.8658 7.87496 13.6252 7.87496C14.3846 7.87496 15.0002 8.49057 15.0002 9.24995Z"
      stroke="currentColor"
      strokeWidth="1.25001"
    />
    <path
      d="M13.5417 12.1667C11.7008 12.1667 10.2084 13.6591 10.2084 15.5H16.8751C16.8751 13.6591 15.3827 12.1667 13.5417 12.1667Z"
      stroke="currentColor"
      strokeWidth="1.25001"
    />
  </BaseIcon>
);
