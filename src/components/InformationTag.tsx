/** Standard hooks */
import React, { FC } from "react";
/** Third-party hooks */

/** Custom hooks */
import Tag from "./Tag";
import { HashtagIcon } from "../icons/HashtagIcon";
import { GraphIcon } from "../icons/GraphIcon";
import { BuildingIcon } from "../icons/BuildingIcon";
import { GraduationCapIcon } from "../icons/GraduationCapIcon";

// PropTypes
type InformationTagProp = {
  /** tag 컬러 */
  variant?: "grayscaleInfo" | "primaryInfo" | "secondaryInfo" | "accentInfo";
  /** status text */
  text: string;
};

const InformationTag: FC<InformationTagProp> = (props: InformationTagProp) => {
  /** props - state */
  const { variant = "grayscaleInfo", text } = props;
  return (
    <Tag
      variant={variant}
      text={text}
      startAdornment={
        variant === "grayscaleInfo" ? (
          <HashtagIcon className="w-4 h-4" />
        ) : variant === "primaryInfo" ? (
          <GraphIcon className="w-4 h-4" />
        ) : variant === "secondaryInfo" ? (
          <BuildingIcon className="w-4 h-4" />
        ) : variant === "accentInfo" ? (
          <GraduationCapIcon className="w-4 h-4" />
        ) : (
          ""
        )
      }
    />
  );
};

export default InformationTag;
