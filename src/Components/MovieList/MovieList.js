import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import DisplayMovie from "./DisplayList";

function MovieList(props) {
  const [movieList, setMovieList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const previousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  function usePrevious(){
    const ref = useRef()
    useEffect(() => {
      ref.current = props.match.params.list
    })
    return ref.current
  }
console.log(movieList)

  const prevList = usePrevious();

  useEffect(() => {
    if(prevList !== props.match.params.list){
      axios
      .get(`/api/movies/?list=${props.match.params.list}&page=1`)
      .then((response) => {
        setMovieList(response.data);
        setPageNumber(1);
        window.scrollTo(0,0)
      });
    } else {
      axios
        .get(`/api/movies/?list=${props.match.params.list}&page=${pageNumber}`)
        .then((response) => {
          setMovieList(response.data);
          window.scrollTo(0,0)
        });
    }
  }, [props.match.params.list, pageNumber]);


  let displayList = movieList.map((movie, index) => {
    return <DisplayMovie key={index} movie={movie} />;
  });
  return (
    <div className='page'>
      {displayList}
      <button onClick={previousPage}>Previous Page</button>
      <p>{pageNumber}</p>
      <button onClick={() => setPageNumber(pageNumber + 1)}>Next Page</button>
    </div>
  );
}

export default MovieList;
