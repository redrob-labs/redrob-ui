// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";

export const LogoIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Horizontal Logo">
      <g id="Logomark">
        <g id="Logomark_2">
          <path
            id="Union"
            d="M18.5455 1.94054L18.5455 11.9538C18.5206 8.36009 15.5997 5.45454 12.0002 5.45454C8.38526 5.45454 5.45476 8.38503 5.45476 12L5.45454 23.9999H0L1.29955e-06 11.9999C2.58889e-05 5.37255 5.37281 0 12.0002 0C14.4149 0 16.6631 0.713241 18.5455 1.94054Z"
            fill="#FBF8F7"
          />
          <path
            id="Union_2"
            d="M18.5457 12C18.5457 15.6149 15.6154 18.5454 12.0005 18.5454C8.39405 18.5454 5.46885 15.6287 5.45508 12.0255L5.45508 22.0594C7.33749 23.2867 9.58569 24 12.0005 24C18.6279 24 24.0005 18.6274 24.0005 12L24.0003 3.40421e-07L18.5457 0L18.5457 12Z"
            fill="#69A3CC"
          />
        </g>
      </g>
    </g>
  </svg>
);
