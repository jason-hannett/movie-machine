import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Trashcan from "./trashcan.png";
import Star from "./star.png";
import "./UserMovieList.scss";
import { withRouter } from "react-router-dom";

function UserMovieList(props) {
  const [userMovieInfo, setUserMovieInfo] = useState([]);

  const getUserMovieList = () => {
    const { id } = props;
    axios.get(`/api/user/movies/${id}`).then((response) => {
      setUserMovieInfo(response.data);
    });
  };

  useEffect(() => {
    getUserMovieList();
  }, []);

  const handleDeleteMovie = (movie_id) => {
    axios
      .delete(`/api/liked_movies/${movie_id}/?user_id=${props.id}`)
      .then((response) => {
        getUserMovieList();
      });
  };

  let mappedMovieInfo = userMovieInfo.map((movie, index) => {
    return (
      <div className="main-container">
        <div className="watchlist-display-card" key={index}>
          <section className="watchlist-poster-title">
            <img
              className="poster-image"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              onClick={() => props.history.push(`/movie/${movie.id}`)}
            />
            <section className='title-overview'>
              <p
                className="title"
                onClick={() => props.history.push(`/movie/${movie.id}`)}
              >
                {movie.title}
              </p>
              <p className="release-date">({movie.release_date})</p>
              <p className="overview">{movie.overview}</p>
            </section>
          </section>
          <section className="rating-add">
            <img className="star" src={Star} alt="star" />
            <p>{movie.vote_average}</p>
            <img
              className="trash-icon"
              src={Trashcan}
              alt="trashcan"
              onClick={() => handleDeleteMovie(movie.id)}
            />
          </section>
        </div>
      </div>
    );
  });
  return <div className="page">{mappedMovieInfo}</div>;
}

const mapStateToProps = (reduxState) => {
  const { id } = reduxState;
  return {
    id,
  };
};

export default connect(mapStateToProps)(withRouter(UserMovieList));
