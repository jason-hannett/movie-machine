import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Nav.scss";
import Close from './Close_Icon.png';

function Menu(props) {
  const [menuClass, setMenuClass] = useState(props.dropdownMenu);

  const closeHandler = () => {
    setMenuClass("dropdown close");
    setTimeout(() => {
      props.close();
    }, 1000);
  };
  return (
    <div className={menuClass}>
      <section className="top-links">
        <p
          onClick={async () => {
            await closeHandler();
            props.history.push("/");
          }}
        >
          MovieMachine
        </p>
        <img onClick={closeHandler} className='close-button' src={Close} alt='close button'/>
      </section>
      <section className="category-section">
        <span>
          <h2>Movies</h2>
          <Link to="/movies/popular">
            <p onClick={closeHandler}>Popular Movies</p>
          </Link>
          <Link to="/movies/now_playing">
            <p onClick={closeHandler}>In Theaters</p>
          </Link>
          <Link to="/movies/top_rated">
            <p onClick={closeHandler}>Top Rated</p>
          </Link>
          <Link to="/movies_genre/browse">
            <p onClick={closeHandler}>Browse by Genre</p>
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
