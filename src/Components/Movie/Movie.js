import React, {useState, useEffect} from "react";
import axios from 'axios'

function Movie(props) {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    axios.get(`/api/random-movie?id=${props.match.params.movieId}`)
    .then(res => {
      setMovie(res.data[0])
      
    })
  }, [])
  console.log(movie)
  return <div>
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='poster'/>
    <p>{movie.title}</p>
    <p>{movie.vote_average}</p>
    <p>{movie.overview}</p>

  </div>;
}

export default Movie;