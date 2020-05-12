import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import './Landing.scss'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

function Landing(props) {
  const [popularMovies, setPopular] = useState([])
  const [topRated, setTopRated] = useState([])
  const [nowPlaying, setNowPlaying] = useState([])
  const [randomMovie, setRandom] = useState([])
  const [toggleRandom, setToggleRandom] = useState(false)

  useEffect(() => {
    axios.get(`/api/now-playing`)
    .then(response => {
      setNowPlaying(response.data.results)
      axios.get('/api/top-rated')
        .then(response => {
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

  const handleAddLikedMovie = (user_id, movieId) => {
    // console.log(movieId)
    if(!props.id){
      props.history.push('/auth')
    } else {
    axios.post(`/api/movies/${user_id}`, {movie_id: movieId})
      .then(res => {
        console.log('success')
        console.log(res.data)
      })
    }
  }



  const mappedNP = nowPlaying.map((e, index) => {
    return (
      <div key={index} className='mapped-movie'>
        <img src={`https://image.tmdb.org/t/p/w500${e.poster_path}`} alt={e.title} onClick={() => {props.history.push(`/movie/${e.id}`)}}/>
        <div className='mapmovie-info'>
          <p>{e.vote_average}</p>
          <p onClick={() => {props.history.push(`/movie/${e.id}`)}}>{e.title}</p>
          <button onClick={() => handleAddLikedMovie(props.id, e.id)}>+ Watchlist</button>
        </div>
      </div>
    )
  })

  const mappedTop = topRated.map((e, index) => {
    return (
      <div key={index} className='mapped-movie'>
        <img src={`https://image.tmdb.org/t/p/w500${e.poster_path}`} alt={e.title} onClick={() => {props.history.push(`/movie/${e.id}`)}}/>
        <div className='mapmovie-info'>
          <p>{e.vote_average}</p>
          <p onClick={() => {props.history.push(`/movie/${e.id}`)}}>{e.title}</p>
          <button type='topRated' onClick={() => handleAddLikedMovie(props.id, e.id)}>+ Watchlist</button>
        </div>
      </div>
    )
  })

  const mappedPop = popularMovies.map((e, index) => {
    return (
      <div key={index} className='mapped-movie'>
        <img src={`https://image.tmdb.org/t/p/w500${e.poster_path}`} alt={e.title} onClick={() => {props.history.push(`/movie/${e.id}`)}}/>
        <div className='mapmovie-info'>
          <p>{e.vote_average}</p>
          <p onClick={() => {props.history.push(`/movie/${e.id}`)}}>{e.title}</p>
          <button onClick={() => handleAddLikedMovie(props.id, e.id)}>+ Watchlist</button>
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

  const mapStateToProps = (reduxState) => {
    const { id } = reduxState;
    return {
      id,
    }
  };


export default connect(mapStateToProps)(withRouter(Landing));
