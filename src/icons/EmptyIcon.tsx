// Standard packages
import React, { FC } from "react";
// Custom packages
import { IconsProps } from "../icons";

export const EmptyIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width="151"
      height="104"
      viewBox="0 0 151 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M58.5005 31C58.5005 26.5817 62.0822 23 66.5005 23H106.5C110.919 23 114.5 26.5817 114.5 31L114.994 40H117.945C122.757 40 126.48 44.2175 125.883 48.9923L119.007 104H118.5H12.5005C8.08221 104 4.50049 100.418 4.50049 96L0.500488 43C0.500488 38.5817 4.08221 35 8.50049 35H54.5005C56.7096 35 58.5005 33.2091 58.5005 31Z"
        fill="white"
      />
      <path
        d="M66.5005 23C62.0822 23 58.5005 26.5817 58.5005 31C58.5005 33.2091 56.7096 35 54.5005 35H8.50049C4.08221 35 0.500488 38.5817 0.500488 43L4.50049 96C4.50049 100.418 8.08221 104 12.5005 104H118.5L114.5 31C114.5 26.5817 110.919 23 106.5 23H66.5005Z"
        fill="#69A3CC"
        fillOpacity="0.08"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M114.994 40H117.945C122.757 40 126.48 44.2175 125.883 48.9923L119.007 104H118.501L114.994 40Z"
        fill="#69A3CC"
        fillOpacity="0.24"
      />
      <g filter="url(#filter0_b_1610_51425)">
        <circle
          cx="109.5"
          cy="32"
          r="27.5"
          fill="white"
          fillOpacity="0.16"
          stroke="#EB896A"
          strokeWidth="9"
        />
        <path d="M126.5 49L147.5 70" stroke="#EB896A" strokeWidth="8" />
      </g>
      <defs>
        <filter
          id="filter0_b_1610_51425"
          x="75.5005"
          y="-2"
          width="76.8284"
          height="76.8281"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="1" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1610_51425"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1610_51425"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
