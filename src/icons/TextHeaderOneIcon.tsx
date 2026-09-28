// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const TextHeaderOneIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      d="M12.4705 12.3999V4.47988L12.9865 5.04388H10.5745V3.99988H13.6585V12.3999H12.4705Z"
      fill="currentColor"
    />
    <path
      d="M8.02424 3.99988H9.22424V12.3999H8.02424V3.99988ZM3.20024 12.3999H2.00024V3.99988H3.20024V12.3999ZM8.13225 8.65588H3.08024V7.61188H8.13225V8.65588Z"
      fill="currentColor"
    />
  </BaseIcon>
);
