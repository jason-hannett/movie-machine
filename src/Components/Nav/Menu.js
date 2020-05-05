import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Nav.css";

function Menu(props) {
  const [menuClass, setMenuClass] = useState(props.dropdownMenu);

  console.log(props);
  const closeHandler = () => {
    setMenuClass("dropdown close");
    setTimeout(() => {
      props.close();
    }, 1000);
  };
  return (
    <div className={menuClass}>
      <section className="top-links">
        <p onClick={async() => {
            await closeHandler()
            props.history.push('/')}}>MovieMachine</p>
        <p onClick={closeHandler}>Close</p>
      </section>
      <section className="category-section">
        <span>
          <h2>Movies</h2>
          <Link to="/movies/popular">
            <p onClick={closeHandler}>Popular Movies</p>
          </Link>
          <Link to="/movies/theaters">
            <p onClick={closeHandler}>In Theaters</p>
          </Link>
        </span>
        <span>
          <h2>TV Shows</h2>
        </span>
      </section>
    </div>
  );
}

export default withRouter(Menu);
