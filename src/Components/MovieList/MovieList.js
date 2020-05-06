import React, {useEffect, useState} from "react";
import axios from 'axios';
import DisplayMovie from './DisplayMovie';

function MovieList(props) {

    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
      axios.get(`/api/movies/?list=${props.match.params.list}`)
      .then(response => {
        setMovieList(response.data)
      })
    }, [props.match.params.list])

    console.log(movieList)

  let displayList = movieList.map((movie, index) => {return <DisplayMovie key={index} movie={movie}/>});
  return (
  <div>
    {displayList}
  </div>
  )
}

export default MovieList;