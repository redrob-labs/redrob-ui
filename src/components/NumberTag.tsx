/** Standard hooks */
import React, { FC } from "react";
/** Third-party hooks */

/** Custom hooks */
import Tag from "./Tag";
import { PersonFillIcon } from "../icons/PersonFillIcon";
import { TriangleUpIcon } from "../icons/TriangleUpIcon";
import { TriangleDownIcon } from "../icons/TriangleDownIcon";

// PropTypes
type NumberTagProp = {
  /** tag 컬러 */
  variant?: "personNumber" | "increaseNumber" | "decreaseNumber";
  /** status text */
  text: number;
};

const NumberTag: FC<NumberTagProp> = (props: NumberTagProp) => {
  /** props - state */
  const { variant = "personNumber", text } = props;
  return (
    <Tag
      variant={variant}
      text={text}
      startAdornment={
        variant === "personNumber" ? (
          <PersonFillIcon className="w-4 h-4" />
        ) : variant === "increaseNumber" ? (
          <TriangleUpIcon className="w-4 h-4" />
        ) : variant === "decreaseNumber" ? (
          <TriangleDownIcon className="w-4 h-4" />
        ) : (
          ""
        )
      }
    />
  );
};

export default NumberTag;
