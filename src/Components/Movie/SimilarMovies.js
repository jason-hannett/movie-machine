import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './SimilarMovies.scss';
import {withRouter} from 'react-router-dom';

function SimilarMovies(props){
    const [similarMovieList, setSimilarMovieList] = useState([]);

    console.log(props)
    useEffect(() => {
        axios.get(`/api/similar_movies/${props.id}`)
        .then((response) => {
            setSimilarMovieList(response.data)
        })
    }, [props.id])


    let displaySimilar = similarMovieList.slice(0,10).map((movie, index) => {
        return <div key={index} onClick={() => props.history.push(`/movie/${movie.id}`)}>
            <img className='similar-poster-image' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            {/* <p>{movie.title}</p> */}
        </div>
    })
    return(
        <div className='similar-list-container'>
            <h2>Similar Movies</h2>
            <section className='similar-list'>
                {displaySimilar}
            </section>
        </div>
    )
}

export default withRouter(SimilarMovies);