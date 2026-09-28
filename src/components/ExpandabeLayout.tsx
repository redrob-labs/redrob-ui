// Stadard packages
import React, { FC, ReactElement } from "react";
// Third-party packages
import clsx from "clsx";

// PropTypes
export type ExpandableLayoutProps = {
  /** Banner element */
  banner?: ReactElement;
  /** If 'true' banner opened */
  bannerOpen?: boolean;

  leftNav?: ReactElement;
  leftNavOpen?: boolean;
  children: ReactElement;
  panelOpen?: boolean;
  panel?: ReactElement;
};

const ExpandableLayout: FC<ExpandableLayoutProps> = (
  props: ExpandableLayoutProps
) => {
  /** props - state */
  const {
    bannerOpen,
    leftNavOpen,
    children,

    panelOpen,
  } = props;
  /** props - action */
  const {} = props;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="fixed transition-all duration-300"
        style={{
          left: leftNavOpen ? "236px" : "68px",
          right: panelOpen ? "500px" : "0",
          top: bannerOpen ? "64px" : "0",
          bottom: "0",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ExpandableLayout;
