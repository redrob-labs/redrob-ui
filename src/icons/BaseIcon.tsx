// Standard packages
import React, { FC, SVGProps } from "react";
// Third-party packages
import clsx from "clsx";
// PropTypes
export type BaseIconsProps = SVGProps<SVGSVGElement> & {
  /** class name */
  className?: string;
  /** Trigger when icon clicked */
  onClick?: () => void;
};

export const BaseIcon: FC<BaseIconsProps> = ({
  className,
  onClick,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={clsx([className])}
      fill="none"
      width="20"
      height="20"
      onClick={onClick}
      {...props}
    />
  );
};
