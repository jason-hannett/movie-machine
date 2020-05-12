import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { logoutUser } from "../../redux/reducer";
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

  const watchlistHandler = () => {
    if(!props.username){
      props.history.push('/auth')
    } else {
      props.history.push(`/liked_movies/${props.id}`)
    }
  }

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

  // console.log(props)


  return (
    <div className="main-nav">
      <p onClick={() => props.history.push("/")}>Movie Machine</p>
      <p onClick={toggleMenu}>Menu</p>
      {dropdownMenu}
      <p onClick={watchlistHandler}>Watchlist</p>
      <span>
      {!props.username ? (
        <p onClick={() => props.history.push('/auth')}>Login/Register</p>
      ) : null}
      </span>
      <span>
        {props.username ? (
          <div>
            <img src={props.image} height="15px" alt='user profile' />
            <h3>{props.username}</h3>
            <button onClick={logout}>Logout</button>
          </div>
        ) : null}
      </span>
    </div>
  );
}

const mapStateToProps = (reduxState) => {
  const {username, image, id} = reduxState;
  return {
    username,
    image,
    id
  };
};

export default connect(mapStateToProps, { logoutUser })(withRouter(Nav));
