// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";
import { BaseIcon } from "./BaseIcon";

export const PaymentIcon: FC<IconsProps> = (props: IconsProps) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <path
      d="M13.4512 10.0646C13.8398 9.55948 13.7453 8.835 13.2402 8.44641C12.7351 8.05781 12.0107 8.15225 11.6221 8.65735C11.2335 9.16244 11.3279 9.88692 11.833 10.2755C12.3381 10.6641 13.0626 10.5697 13.4512 10.0646Z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.4268 12.1038L10.4303 12.0992M14.6484 6.6165L14.652 6.61192"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.0611 4.9685L8.62419 3.04809L1.30273 12.3387L7.21491 16.9978L8.78264 15.0111"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="5.79834"
      y="11.7905"
      width="11.8287"
      height="7.52736"
      transform="rotate(-51.759 5.79834 11.7905)"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
);
