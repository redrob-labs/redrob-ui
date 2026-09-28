// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const CalendarCheckIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 4.32285C2.5 3.97775 2.77976 3.698 3.12485 3.698H16.8738C17.2189 3.698 17.4986 3.97775 17.4986 4.32285V16.9255C17.4986 17.2705 17.2189 17.5503 16.8738 17.5503H3.12485C2.77976 17.5503 2.5 17.2705 2.5 16.9255V4.32285ZM3.7497 4.9477V16.3006H16.2489V4.9477H3.7497Z"
      fill="currentColor"
    />
    <path
      d="M7.5 3.125V5.625"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <path
      d="M12.5 3.125V5.625"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <path
      d="M3.75 7.5H17.5"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinejoin="round"
    />
    <path
      d="M7.26562 11.5469L9.31641 13.5156L12.7344 10.2344"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
);
