import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { logoutUser } from "../../redux/reducer";
import axios from "axios";
import { connect } from "react-redux";
import Menu from "./Menu";
import Camera from "./CameraIcon.png";
import Gears from "./Gears.png";
import MenuIcon from "./Menu.png";
import Search from "./Search.png";

function Nav(props) {
  const [openMenu, setOpenMenu] = useState(false);
  const [searchInput, setSearchInput] = useState("");

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

  const watchlistHandler = () => {
    if (!props.username) {
      props.history.push("/auth");
    } else {
      props.history.push(`/liked_movies/${props.id}`);
    }
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

 const enterPressed = (event) => {
    var code = event.keyCode || event.which;
    if (code === 13) {
      props.history.push(`/search/movies/${searchInput}`)
    }
 }

  // console.log(props)

  return (
    <div className="main-nav">
      <div className="logo-menu">
        <section className="logo" onClick={() => props.history.push("/")}>
          <section className="icons">
            <img className="gears-logo" src={Gears} alt="Gears Logo" />
            <img className="camera-logo" src={Camera} alt="Camera Logo" />
          </section>
          <p>Movie Machine</p>
        </section>
        <section className="menu" onClick={toggleMenu}>
          <img className="menu-icon" src={MenuIcon} alt="Menu icon" />
          <p>Menu</p>
        </section>
      </div>
      {dropdownMenu}
      <div className="search-container">
        <input
          id="search-field"
          className="search-field"
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyPress={enterPressed}
          value={searchInput}
          placeholder="Search Movies by Title"
        ></input>
        <div
          id="search-button"
          className="search-icon-border"
          onClick={() => props.history.push(`/search/movies/${searchInput}`)}
        >
          <img className="search-icon" src={Search} alt="Magnifying glass" />
        </div>
      </div>
      <div className="watchlist-login">
        <div onClick={watchlistHandler}>
          <p>Watchlist</p>
        </div>
        <span>
          {!props.username ? (
            <div>
              <p onClick={() => props.history.push("/auth")}>Sign In</p>
            </div>
          ) : null}
        </span>
        <span>
          {props.username ? (
            <div className="profile" onClick={logout}>
              <img
                className="profile-pic"
                src={props.image}
                height="15px"
                alt="user profile"
              />
              <p>Logout</p>
            </div>
          ) : null}
        </span>
      </div>
    </div>
  );
}

const mapStateToProps = (reduxState) => {
  const { username, image, id } = reduxState;
  return {
    username,
    image,
    id,
  };
};

export default connect(mapStateToProps, { logoutUser })(withRouter(Nav));
