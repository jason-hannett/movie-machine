import React from 'react';

function DisplayMovie(props){
    return(
        <div className='display-card'>
            <img src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} alt={props.movie.title} />
            <p>{props.movie.title}</p>
        </div>
    )
}

export default DisplayMovie;