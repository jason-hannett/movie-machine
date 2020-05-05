import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Menu from "./Menu";

function Nav(props) {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    if (!openMenu) {
      setOpenMenu(true);
    } else {
      setOpenMenu(false);
    }
  };

  console.log(props);

  let dropdownMenu;
  if (openMenu) {
    dropdownMenu = (
      <Menu
        visibility={openMenu}
        close={toggleMenu}
        dropdownMenu={"dropdown"}
      />
    );
  }

  return (
    <div className="main-nav">
      <p onClick={() => props.history.push('/')}>Movie Machine</p>
      <p onClick={toggleMenu}>Menu</p>
      {dropdownMenu}
      <Link to="/auth">
        <p>Login/Register</p>
      </Link>
    </div>
  );
}

export default withRouter(Nav);
