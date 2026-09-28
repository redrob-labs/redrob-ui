// Standard packages
import React, { FC } from "react";

// PropTypes
type SkeletonProps = {
  /** class name */
  className?: string;
  /** skeleton number */
  num: number;
};

const Skeleton: FC<SkeletonProps> = (props: Readonly<SkeletonProps>) => {
  /** props - state */
  const { num, className } = props;

  return (
    <div className={className}>
      {Array(num)
        .fill(0)
        .map((_, index) => (
          <div key={index.toString()}>
            <div className="flex flex-col bg-white w-full items-center p-2 gap-y-2">
              <div className="flex flex-row gap-1 w-full">
                <p className="w-1/2 bg-gray-200 h-5 rounded-full animate-pulse"></p>
              </div>
              <div className="w-full bg-gray-200 h-5 rounded-full animate-pulse"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Skeleton;
