// Standard packages
import React, { FC } from "react";

// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const CheckCircleIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <BaseIcon {...props} viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5ZM14.1828 8.20081C14.4318 7.96176 14.4399 7.56611 14.2009 7.31711C13.9618 7.0681 13.5662 7.06003 13.3172 7.29907L9.0625 11.3836L6.68283 9.09907C6.43383 8.86003 6.03818 8.8681 5.79913 9.11711C5.56009 9.36611 5.56816 9.76176 5.81717 10.0008L8.62967 12.7008C8.87152 12.933 9.25348 12.933 9.49533 12.7008L14.1828 8.20081Z"
        fill="currentColor"
      />
    </BaseIcon>
  );
};
