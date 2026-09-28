// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const EyeSlashIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <BaseIcon {...props} viewBox="0 0 20 20">
      <path
        d="M8.23319 8.23334C7.98757 8.46221 7.79056 8.73821 7.65392 9.04488C7.51729 9.35154 7.44381 9.68259 7.43789 10.0183C7.43197 10.3539 7.49372 10.6874 7.61945 10.9987C7.74519 11.31 7.93234 11.5927 8.16973 11.8301C8.40713 12.0675 8.68991 12.2547 9.0012 12.3804C9.3125 12.5061 9.64593 12.5679 9.9816 12.562C10.3173 12.5561 10.6483 12.4826 10.955 12.3459C11.2617 12.2093 11.5377 12.0123 11.7665 11.7667"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeMiterlimit="16"
        strokeLinejoin="round"
      />
      <path
        d="M8.75 5.06198C9.0771 5.02131 9.40639 5.00061 9.73603 5C15.1708 5 17.5 10.4236 17.5 10.4236C17.1529 11.1651 16.7176 11.8623 16.2034 12.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeMiterlimit="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.86988 6.25C4.41612 7.20665 3.25283 8.52066 2.5 10.0565C2.5 10.0565 4.69298 15 9.80994 15C11.2105 15.0036 12.581 14.6081 13.75 13.863"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeMiterlimit="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.75 3.75L16.25 16.25"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeMiterlimit="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
};
