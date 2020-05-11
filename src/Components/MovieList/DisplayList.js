import React from "react";
import "./DisplayList.scss";
import axios from "axios";
import { connect } from "react-redux";
import Star from "../UserMovieList/star.png";
import { withRouter } from "react-router-dom";

function DisplayMovie(props) {
  const handleAddLikedMovie = (user_id) => {
    // console.log(props.movie.id);
    axios.post(`/api/movies/${user_id}`, { movie_id: props.movie.id });
  };

  return (
    <div className="main-page">
      <div className="display-card">
        <section className="poster-title">
            <img
              className="poster-image"
              src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
              alt={props.movie.title}
              onClick={() => props.history.push(`/movie/${props.movie.id}`)}
            />
          <section className='title-overview'>
            <p
              className="title"
              onClick={() => props.history.push(`/movie/${props.movie.id}`)}
            >
              {props.movie.title}
            </p>
            <p className='realase-date'>{props.movie.release_date}</p>
            <p className="overview">{props.movie.overview}</p>
          </section>
        </section>
        <section className="rating-add">
          <img className="star" src={Star} alt="star" />
          <p>{props.movie.vote_average}</p>
          <button
            onClick={() => handleAddLikedMovie(props.id)}
            className="add-button"
          >
            + Watchlist
          </button>
        </section>
      </div>
    </div>
  );
}

const mapStateToProps = (reduxState) => {
  const { id } = reduxState;
  return {
    id,
  };
};

export default connect(mapStateToProps)(withRouter(DisplayMovie));
