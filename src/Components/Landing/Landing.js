import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./Landing.scss";
import axios from "axios";
import { withRouter } from "react-router-dom";

function Landing(props) {
  console.log(props);
  const [movies, setMovies] = useState([]);
  const [popularMovies, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [randomMovie, setRandom] = useState([]);
  const [toggleRandom, setToggleRandom] = useState(false);
  const [recommendedList, setRecommendedList] = useState([]);

  useEffect(() => {
    getSuggestions();
    axios
      .get(`/api/latest-movies`)
      .then((response) => {
        setMovies(response.data);
        axios.get(`/api/now-playing`).then((response) => {
          console.log(response);
          setNowPlaying(response.data.results);
          axios.get("/api/top-rated").then((response) => {
            console.log(response);
            setTopRated(response.data.results);
            axios.get("/api/popular").then((response) => {
              setPopular(response.data.results);
            });
          });
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleToggle = () => {
    setToggleRandom(true);
  };

  const handleRandom = () => {
    axios.get("/api/random-movie").then((res) => {
      setRandom(res.data[0]);
      handleToggle();
    });
  };

  const getSuggestions = () => {
    const user_id = props.id;
    axios.get(`/api/suggested/movies/${user_id}`).then((response) => {
      setRecommendedList(response.data);
    });
  };

  console.log(recommendedList);

  // console.log(randomMovie)
  // console.log(popularMovies)
  // console.log(topRated)
  // console.log(nowPlaying)

  const handleAddLikedMovie = (user_id, movieId) => {
    // console.log(movieId)
    if (!props.id) {
      props.history.push("/auth");
    } else {
      axios
        .post(`/api/movies/${user_id}`, { movie_id: movieId })
        .then((res) => {
          console.log("success");
          console.log(res.data);
        });
    }
  };

  const mappedRecommended = recommendedList.slice(3,11).map((movie, index) => {
    return (
      <div key={index} className='mapped-movie'>
      <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          onClick={() => props.history.push(`/movie/${movie.id}`)}
          alt={movie.title}
        />
      </div>
    );
  });

  const mappedNP = nowPlaying.map((e, index) => {
    return (
      <div key={index} className="mapped-movie">
        <img
          src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
          alt={e.title}
          onClick={() => {
            props.history.push(`/movie/${e.id}`);
          }}
        />
        <div className="mapmovie-info">
          <p>{e.vote_average}</p>
          <p
            onClick={() => {
              props.history.push(`/movie/${e.id}`);
            }}
          >
            {e.title}
          </p>
          <button onClick={() => handleAddLikedMovie(props.id, e.id)}>
            + Watchlist
          </button>
        </div>
      </div>
    );
  });

  const mappedTop = topRated.map((e, index) => {
    return (
      <div key={index} className="mapped-movie">
        <img
          src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
          alt={e.title}
          onClick={() => {
            props.history.push(`/movie/${e.id}`);
          }}
        />
        <div className="mapmovie-info">
          <p>{e.vote_average}</p>
          <p
            onClick={() => {
              props.history.push(`/movie/${e.id}`);
            }}
          >
            {e.title}
          </p>
          <button
            type="topRated"
            onClick={() => handleAddLikedMovie(props.id, e.id)}
          >
            + Watchlist
          </button>
        </div>
      </div>
    );
  });

  const mappedPop = popularMovies.map((e, index) => {
    return (
      <div key={index} className="mapped-movie">
        <img
          src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
          alt={e.title}
          onClick={() => {
            props.history.push(`/movie/${e.id}`);
          }}
        />
        <div className="mapmovie-info">
          <p>{e.vote_average}</p>
          <p
            onClick={() => {
              props.history.push(`/movie/${e.id}`);
            }}
          >
            {e.title}
          </p>
          <button onClick={() => handleAddLikedMovie(props.id, e.id)}>
            + Watchlist
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="landing-page">
      <button onClick={() => handleRandom()}>Random Movie</button>
      {toggleRandom ? (
        <div className="random-movie">
          <img
            src={`https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`}
            alt="poster"
            onClick={() => {
              props.history.push(`/movie/${randomMovie.id}`);
            }}
          />

          <p>Title: {randomMovie.title}</p>
          <p>Rating: {randomMovie.vote_average}</p>
          <p>Release Date: {randomMovie.release_date}</p>
        </div>
      ) : null}

      <div className="movie-display">
        <p>Recommended</p>
        <div className="display-sections"></div>
        <p>Test</p>
        <div className="display-sections"></div>
        <p>Recommended Today</p>
        <div className="display-sections">{mappedRecommended}</div>
        <h2>Now Playing</h2>
        <div className="display-sections">{mappedNP}</div>
        <h2>Top Rated</h2>
        <div className="display-sections">{mappedTop}</div>
        <h2>Popular</h2>
        <div className="display-sections">{mappedPop}</div>
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

export default connect(mapStateToProps)(withRouter(Landing));
