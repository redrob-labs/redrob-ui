// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const HashtagIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      d="M10.9361 17.5L12.8759 2.5H14.9286L12.9887 17.5H10.9361ZM2.5 13.8571V11.9071H16.7556V13.8571H2.5ZM5.07143 17.5L7.03383 2.5H9.08647L7.12406 17.5H5.07143ZM3.26692 8.09286V6.14286H17.4774L17.5 8.09286H3.26692Z"
      fill="currentColor"
    />
  </BaseIcon>
);
