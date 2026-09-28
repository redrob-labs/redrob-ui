// Standard packages
import React, { FC } from "react";

// Third-party packages
import clsx from "clsx";

// PropTypes
interface PointProps {
  /** Point background color */
  bgcolor: string;
}

const Point: FC<PointProps> = (props: PointProps) => {
  /** props - state */
  const { bgcolor } = props;

  /** consts */
  const rootClasses = clsx(
    "w-[16px]",
    "h-[16px]",
    "flex",
    "justify-center",
    "items-center"
  );

  const poitClasses = clsx(
    "block",
    "rounded-full",
    bgcolor,
    "w-[6px]",
    "h-[6px]"
  );

  return (
    <div className={rootClasses}>
      <span className={poitClasses}></span>
    </div>
  );
};
export default Point;
