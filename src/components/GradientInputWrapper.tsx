// Standard packages
import clsx from "clsx";
import React, { FC, ReactNode } from "react";

// Third-party packages

// Custom packages

// PropTypes
export type GradientInputWrapperProps = {
  children: ReactNode;
  disabled?: boolean;
};

const GradientInputWrapper: FC<GradientInputWrapperProps> = (
  props: GradientInputWrapperProps
) => {
  /** props - state */
  const { children, disabled } = props;

  return (
    <div
      className={clsx([
        "gradient-border-wrapper w-full",
        {
          "cursor-not-allowed": disabled,
        },
      ])}
    >
      <div className="gradient-border-input">{children}</div>
    </div>
  );
};

export default GradientInputWrapper;
