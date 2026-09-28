// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const CalendarIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 4.32279C2.5 3.97769 2.77976 3.69794 3.12485 3.69794H16.8738C17.2189 3.69794 17.4986 3.97769 17.4986 4.32279V16.9254C17.4986 17.2705 17.2189 17.5502 16.8738 17.5502H3.12485C2.77976 17.5502 2.5 17.2705 2.5 16.9254V4.32279ZM3.7497 4.94764V16.3005H16.2489V4.94764H3.7497Z"
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
  </BaseIcon>
);
