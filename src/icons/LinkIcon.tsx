// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const LinkIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      d="M8.05762 11.9423L12.4998 7.49359"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.1394 13.4112L9.24287 15.3078C8.94408 15.6066 8.58937 15.8436 8.19899 16.0053C7.80861 16.167 7.3902 16.2502 6.96765 16.2502C6.11427 16.2502 5.29585 15.9112 4.69243 15.3078C4.089 14.7044 3.75 13.8859 3.75 13.0326C3.75 12.1792 4.089 11.3608 4.69243 10.7574L6.589 8.86078"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.4108 11.1394L15.3074 9.24287C15.9108 8.63944 16.2498 7.82102 16.2498 6.96765C16.2498 6.11427 15.9108 5.29585 15.3074 4.69243C14.7039 4.089 13.8855 3.75 13.0321 3.75C12.1788 3.75 11.3604 4.089 10.7569 4.69243L8.86035 6.589"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
);
