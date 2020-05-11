import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './SimilarMovies.scss';

function SimilarMovies(props){
    const [similarMovieList, setSimilarMovieList] = useState([]);

    console.log(props)
    useEffect(() => {
        axios.get(`/api/similar_movies/${props.id}`)
        .then((response) => {
            setSimilarMovieList(response.data)
        })
    }, [props.id])

    console.log(similarMovieList)

    let displaySimilar = similarMovieList.map((movie, index) => {
        return <div key={index}>
            <img className='similar-poster-image' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <p>{movie.title}</p>
        </div>
    })
    return(
        <div className='similar-list'>
            <h2>Similar Movies</h2>
            {displaySimilar}
        </div>
    )
}

export default SimilarMovies;