// Standard packages
import React, { FC } from "react";
// Third-party packages
import clsx from "clsx";
// Custom packages
import Avatar, { AvatarProps } from "./Avatar";

// PropTypes
export type GroupAvatarProps = {
  /** List of avatar items */
  avatars: AvatarProps[];
  /** Maximum number of avatars to display */
  maxCount?: number;
  /** Additional class names */
  className?: string;
  /** Avatar size: small (16px) | medium (32px) | large (48px) | x-large (64px) */
  size?: "small" | "medium" | "large" | "x-large";
};

const GroupAvatar: FC<GroupAvatarProps> = (props: GroupAvatarProps) => {
  const { avatars, maxCount = 5, className, size = "medium" } = props;

  const displayedAvatars = avatars.slice(0, maxCount).reverse();

  return (
    <div className={clsx("flex items-center", className)}>
      {displayedAvatars.map((avatar, index) => (
        <div
          key={index}
          className={clsx("relative", {
            "-ml-[8px]": index !== 0 && size === "small",
            "-ml-[16px]": index !== 0 && size === "medium",
            "-ml-[24px]": index !== 0 && size === "large",
            "-ml-[32px]": index !== 0 && size === "x-large",
          })}
          style={{ zIndex: index + 1 }}
        >
          <Avatar {...avatar} size={size} />
        </div>
      ))}
    </div>
  );
};

export default GroupAvatar;
