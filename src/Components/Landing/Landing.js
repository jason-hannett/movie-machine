import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './Landing.scss'
import axios from 'axios'

function Landing(props) {
  const [popularMovies, setPopular] = useState([])
  const [topRated, setTopRated] = useState([])
  const [nowPlaying, setNowPlaying] = useState([])
  const [randomMovie, setRandom] = useState([])
  const [toggleRandom, setToggleRandom] = useState(false)

  useEffect(() => {
    axios.get(`/api/now-playing`)
    .then(response => {
      console.log(response)
      setNowPlaying(response.data.results)
      axios.get('/api/top-rated')
        .then(response => {
          console.log(response)
          setTopRated(response.data.results)
          axios.get('/api/popular')
            .then(response => {
              setPopular(response.data.results)
            })
        })
    })
    .catch(err => console.log(err))
  }, [])
  
  const handleToggle = () => {
    setToggleRandom(true)
  }

  const handleRandom = () => {
    axios.get('/api/random-movie')
        .then(res => {
          setRandom(res.data[0])
          handleToggle()
        })
  }

  console.log(popularMovies)
  console.log(topRated)
  console.log(nowPlaying)


  const mappedNP = nowPlaying.map((e, index) => {
    return (
      <div key={index} className='mapped-movie' onClick={() => {props.history.push(`/movie/${e.id}`)}}>
        <img src={`https://image.tmdb.org/t/p/w500${e.poster_path}`} alt={e.title}/>
        <div className='mapmovie-info'>
          <p>{e.vote_average}</p>
          <p>{e.title}</p>
          <button>+ Watchlist</button>
        </div>
      </div>
    )
  })

  const mappedTop = topRated.map((e, index) => {
    return (
      <div key={index} className='mapped-movie' onClick={() => {props.history.push(`/movie/${e.id}`)}}>
        <img src={`https://image.tmdb.org/t/p/w500${e.poster_path}`} alt={e.title}/>
        <div className='mapmovie-info'>
          <p>{e.vote_average}</p>
          <p>{e.title}</p>
          <button>+ Watchlist</button>
        </div>
      </div>
    )
  })

  const mappedPop = popularMovies.map((e, index) => {
    return (
      <div key={index} className='mapped-movie' onClick={() => {props.history.push(`/movie/${e.id}`)}}>
        <img src={`https://image.tmdb.org/t/p/w500${e.poster_path}`} alt={e.title}/>
        <div className='mapmovie-info'>
          <p>{e.vote_average}</p>
          <p>{e.title}</p>
          <button>+ Watchlist</button>
        </div>
      </div>
    )
  })

    return(
      <div className='landing-page'>

        <button onClick={() => handleRandom()}>Random Movie</button>
        {toggleRandom ?
                    <div className='random-movie'>
                      <img src={`https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`} alt='poster' onClick={() => {
                        props.history.push(`/movie/${randomMovie.id}`)
                      }}/>
                    
                      <p>Title: {randomMovie.title}</p>
                      <p>Rating: {randomMovie.vote_average}</p>
                      <p>Release Date: {randomMovie.release_date}</p>
                    </div>
                       :
                      null}

        <div className='movie-display'>
          <h2>Now Playing</h2>
          <div className='display-sections'>
            {mappedNP}
          </div>

          <h2>Top Rated</h2>
          <div className='display-sections'>
            {mappedTop}

          </div>

          <h2>Popular</h2>
          <div className='display-sections'>
            {mappedPop}

          </div>
        </div>


      </div>
    )
  }


export default Landing;
