// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const TemplateIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.00049 2.49402C2.00049 2.21795 2.22429 1.99414 2.50037 1.99414H13.4995C13.7756 1.99414 13.9994 2.21795 13.9994 2.49402V13.4928C13.9994 13.7689 13.7756 13.9927 13.4995 13.9927H2.50037C2.22429 13.9927 2.00049 13.7689 2.00049 13.4928V2.49402ZM3.00025 2.9939V12.9929H12.9996V2.9939H3.00025Z"
      fill="currentColor"
    />
    <path d="M2 6L13 6.0001" stroke="currentColor" />
    <path d="M6 6L6 14" stroke="currentColor" />
    <path d="M3 9H6" stroke="currentColor" />
  </BaseIcon>
);
