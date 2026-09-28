// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const AutoSaveErrorIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.6878 5.66058C11.0168 5.24191 10.2241 5 9.375 5C7.15184 5 5.31597 6.65821 5.03676 8.80528C3.59208 9.08045 2.5 10.3502 2.5 11.875C2.5 12.6994 2.81921 13.4492 3.34076 14.0076L4.22551 13.1228C3.92975 12.7914 3.75 12.3542 3.75 11.875C3.75 10.9615 4.40453 10.1982 5.27065 10.0332L6.15962 9.86388L6.27632 8.96648C6.4756 7.43411 7.78801 6.25 9.375 6.25C9.87627 6.25 10.3502 6.36815 10.7703 6.5781L11.6878 5.66058ZM8.90165 13.75H14.375C15.4105 13.75 16.25 12.9105 16.25 11.875C16.25 10.8395 15.4105 10 14.375 10H13.7057H12.6517L13.9017 8.75H14.375C16.1009 8.75 17.5 10.1491 17.5 11.875C17.5 13.6009 16.1009 15 14.375 15H7.65165L8.90165 13.75Z"
      fill="currentColor"
    />
    <path
      d="M13.75 6.25L5 15"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
);
