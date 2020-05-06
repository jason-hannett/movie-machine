import React from "react";

function DisplayMovie(props) {
  return (
    <div>
      <section className="display-card">
        <img
          src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
          alt={props.movie.title}
        />
        <p>{props.movie.title}</p>
      </section>
      <section>
        <p>{props.movie.vote_average}</p>
        
      </section>
    </div>
  );
}

export default DisplayMovie;
