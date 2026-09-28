/** Standard hooks */
import React, { FC } from "react";
/** Third-party hooks */

/** Custom hooks */
import Tag from "./Tag";
import { CheckCircleIcon, SpinnerIcon } from "../icons";

// PropTypes
type AutoCompleteTagProp = {
  /** if 'true' the light's on */
  checked: boolean;
  /** AutoCompleteTag text */
  text: string;
};

const AutoCompleteTag: FC<AutoCompleteTagProp> = (
  props: AutoCompleteTagProp
) => {
  /** props - state */
  const { checked, text } = props;
  return (
    <Tag
      variant={checked ? "successAuto" : "grayscaleAuto"}
      startAdornment={
        checked ? (
          <CheckCircleIcon className="w-4 h-4" />
        ) : (
          <SpinnerIcon className="w-4 h-4" />
        )
      }
      text={text}
    />
  );
};

export default AutoCompleteTag;
