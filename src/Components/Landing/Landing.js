import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './Landing.scss'
import axios from 'axios'

function Landing(props) {
  console.log(props)
  const [movies, setMovies] = useState([])
  const [randomMovie, setRandom] = useState([])
  const [toggleRandom, setToggleRandom] = useState(false)

  useEffect(() => {
    axios.get(`/api/latest-movies`)
    .then(response => {
      setMovies(response.data)
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

  console.log(randomMovie)



    return(
      <div className='landing-page'>

        <button onClick={() => handleRandom()}>Random Movie</button>
        {toggleRandom ?
                    <div>
                      <img src={`https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`} alt='poster' onClick={() => {
                        props.history.push(`/movie/${randomMovie.id}`)
                      }}/>
                    
                      <p>Title: {randomMovie.title}</p>
                      <p>Release Date: {randomMovie.release_date}</p>
                    </div>
                       :
                      null}

        <div className='movie-display'>
          <p>Recommended</p>
          <div className='display-sections'>



          </div>

          <p>Test</p>
          <div className='display-sections'>
            

          </div>

          <p>Recommended Today</p>
          <div className='display-sections'>
            

          </div>
        </div>


      </div>
    )
  }


export default Landing;
