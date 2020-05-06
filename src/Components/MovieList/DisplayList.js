import React from "react";
import addIcon from "./add_icon.png";
import "./DisplayList.scss";

function DisplayMovie(props) {
  return (
    <div className='main-page'>
      <div className="display-card">
        <section className="poster-title">
          <img
            className='poster-image'
            src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
            alt={props.movie.title}
          />
          <p>{props.movie.title}</p>
        </section>
        <section className="rating-add">
          <p>{props.movie.vote_average}</p>
          <img className="add-icon" src={addIcon} alt="add movie icon" />
        </section>
      </div>
    </div>
  );
}

export default DisplayMovie;
