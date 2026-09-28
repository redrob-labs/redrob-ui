// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const AssessmentIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <rect
      x="7.5"
      y="5"
      width="5.625"
      height="1.25"
      rx="0.625"
      fill="currentColor"
    />
    <rect
      x="5"
      y="5"
      width="1.25"
      height="1.25"
      rx="0.625"
      fill="currentColor"
    />
    <rect
      x="7.5"
      y="7.5"
      width="5.625"
      height="1.25"
      rx="0.625"
      fill="currentColor"
    />
    <rect
      x="5"
      y="7.5"
      width="1.25"
      height="1.25"
      rx="0.625"
      fill="currentColor"
    />
    <path
      d="M11.25 15.4342L16.6842 10L18.4955 11.8114L13.2425 17.2455H11.25V15.4342Z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.125 2.5C2.95924 2.5 2.80027 2.56585 2.68306 2.68306C2.56585 2.80027 2.5 2.95924 2.5 3.125V16.875C2.5 17.2202 2.77982 17.5 3.125 17.5H16.875C17.2202 17.5 17.5 17.2202 17.5 16.875V12.8413L16.25 14.1344V16.25H14.2049L13.2425 17.2455H11.25V16.25H3.75V3.75H16.25V10.4342L16.6842 10L17.5 10.8158V3.125C17.5 2.95924 17.4342 2.80027 17.3169 2.68306C17.1997 2.56585 17.0408 2.5 16.875 2.5H3.125Z"
      fill="currentColor"
    />
  </BaseIcon>
);
