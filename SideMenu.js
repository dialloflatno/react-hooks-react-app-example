// import React from "react"
import Logo from "./Logo"
import Search from "./Search"
import MenuLinks from "./MenuLinks"

function SideMenu() {
  return (
    <aside className="side-bar open">
      <h1>Spawtify</h1>
      <Logo />
      <MenuLinks />
      <Search />
      </aside>
  );
}

export default SideMenu;
