import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Trashcan from "./trashcan.png";
import './UserMovieList.scss';

function UserMovieList(props) {
  const [userMovieInfo, setUserMovieInfo] = useState([]);

  const getUserMovieList = () => {
    const { id } = props;
    axios.get(`/api/movies/${id}`).then((response) => {
      setUserMovieInfo(response.data);
    });
  };

  useEffect(() => {
    getUserMovieList();
  }, []);



  const handleDeleteMovie = (movie_id) => {
    axios.delete(`/api/liked_movies/${movie_id}/?user_id=${props.id}`)
    .then(response => {
      getUserMovieList()
    })
  }

  let mappedMovieInfo = userMovieInfo.map((movie, index) => {
    return (
      <div className='main-container' key={index}>
        <div  className="display-card">
          <section className="poster-title">
            <img
              className="poster-image"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </section>
          <section className="rating-add">
            <p>{movie.vote_average}</p>
            <img className="trash-icon" src={Trashcan} alt="trashcan" onClick={() => handleDeleteMovie(movie.id)}/>
          </section>
        </div>
      </div>
    );
  });
  return <div className='page'>{mappedMovieInfo}</div>;
}

const mapStateToProps = (reduxState) => {
  const { id } = reduxState;
  return {
    id,
  };
};

export default connect(mapStateToProps)(UserMovieList);
