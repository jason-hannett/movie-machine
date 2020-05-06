import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { logoutUser } from "../../Redux/reducer";
import axios from "axios";
import { connect } from "react-redux";
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

  const logout = () => {
    axios.get("/api/logout").then(() => {
      props.logoutUser();
      props.history.push("/");
    });
  };

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
      <p onClick={() => props.history.push("/")}>Movie Machine</p>
      <p onClick={toggleMenu}>Menu</p>
      {dropdownMenu}
      <p onClick={() => props.history.push('/auth')}>Login/Register</p>
      <span>
        {props.username ? (
          <div>
            <img src={props.user.image} height="15px" />
            <h3>{props.user.username}</h3>
            <button onClick={logout}>Logout</button>
          </div>
        ) : null}
      </span>
    </div>
  );
}

const mapStateToProps = (reduxState) => {
  return {
    user: reduxState,
  };
};

export default connect(mapStateToProps, { logoutUser })(withRouter(Nav));
