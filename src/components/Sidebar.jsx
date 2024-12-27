import React from "react";
import AppMenu from "../layouts/Menu";
import { getMenuItems } from "../helpers/menu";

const Sidebar = () => {
  return (
    <>
      <AppMenu menuItems={getMenuItems()} />
    </>
  );
};

export default Sidebar;
