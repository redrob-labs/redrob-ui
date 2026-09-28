/** Standard hooks */
import React, { FC } from "react";
/** Third-party hooks */

/** Custom hooks */
import Tag from "./Tag";

// PropTypes
type StatusTagProp = {
  /** tag 컬러 */
  variant?:
    | "grayscaleStatus"
    | "infoStatus"
    | "processStatus"
    | "successStatus"
    | "errorStatus";
  /** status text */
  text: string;
};

const StatusTag: FC<StatusTagProp> = (props: StatusTagProp) => {
  /** props - state */
  const { variant = "grayscaleStatus", text } = props;
  return <Tag variant={variant} text={text} />;
};

export default StatusTag;
