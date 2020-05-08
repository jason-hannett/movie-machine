import React, {useState, useEffect} from "react";
import axios from 'axios'
import './Movie.scss'

function Movie(props) {
  const [movie, setMovie] = useState([])
  const [trailer, setTrailer] = useState([])

  useEffect(() => {
    axios.get(`/api/random-movie?id=${props.match.params.movieId}`)
    .then(res => {
      setMovie(res.data[0])
      axios.get(`/api/trailer/${props.match.params.movieId}`)
        .then(res => {
          setTrailer(res.data.results[0])
        })
      
    })
  }, [])
  console.log(trailer)
  return <div className='movie-display'>

    <iframe width='1280' height='695'
     src={`https://www.youtube.com/embed/${trailer.key}`} controls>
       
    </iframe>

    <div className='movie-info'>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='poster'/>
      <div className='title-rating'>
        <p id='title'>{movie.title}</p>
        <p id='rating'>{movie.vote_average}</p>
      </div>

      <div className='desc'>
        <p>{movie.overview}</p>
      </div>
    </div>

  </div>;
}

export default Movie;