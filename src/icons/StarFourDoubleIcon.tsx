// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const StarFourDoubleIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.4012 13.8019V13.7991C16.7861 13.7344 13.8677 10.8155 13.8039 7.2002H13.802C13.7383 10.8168 10.818 13.7365 7.20117 13.7993V13.801C10.818 13.8638 13.7383 16.7836 13.802 20.4002H13.8039C13.868 16.7852 16.7863 13.8665 20.4012 13.8019Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.20045 10.8006C7.16631 8.82725 5.57296 7.23394 3.59961 7.19988V7.19948C5.57245 7.16553 7.16553 5.57315 7.20061 3.60059H7.20176C7.23683 5.5721 8.82823 7.16383 10.7996 7.19942V7.20178C8.82824 7.23738 7.23684 8.82909 7.20176 10.8006H7.20045Z"
      fill="currentColor"
    />
  </BaseIcon>
);
