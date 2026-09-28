// Standard packages
import React, { FC, ReactElement } from "react";
// Third-party packages
// Custom packages

import ListMenu from "./ListMenu";

// PropTypes
export type ListGroupProps = {
  /** main menu title */
  menuTitle: string;
  /** main menu icon */
  menuIcon: ReactElement;
  /** if 'true' main menu open */
  open?: boolean;

  /** Trigger when main menu clicked */
  onClick: (...props: any) => void;
  /** sub menu list count */
  subListCount: number;
  /** sub menu lists */
  subLists: ReactElement;
};

export const ListGroup: FC<ListGroupProps> = (props: ListGroupProps) => {
  /** props - state */
  const {
    menuTitle,
    menuIcon,
    open = false,

    subLists,
    subListCount,
  } = props;
  /** props -action */
  const { onClick } = props;
  /** custom handler */

  return (
    <>
      <ListMenu
        title={menuTitle}
        startAdornment={menuIcon}
        menus={subListCount}
        open={open}
        onClick={() => onClick(menuTitle)}
      />
      {open && subLists}
    </>
  );
};

export default ListGroup;
