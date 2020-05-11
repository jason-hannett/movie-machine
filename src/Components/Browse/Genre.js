import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import DisplayMovie from "../MovieList/DisplayList";

function Genre(props) {
  const [genreMovieList, setGenreMovieList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  console.log(pageNumber);

  const previousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  function usePrevious() {
    const ref = useRef();
    useEffect(() => {
      ref.current = props.match.params.genreId;
    });
    return ref.current;
  }

  const prevList = usePrevious();

  useEffect(() => {
    if (prevList !== props.match.params.genreId) {
      axios
        .get(`/api/genre/?genre=${props.match.params.genreId}&page=1`)
        .then((response) => {
          setGenreMovieList(response.data);
          setPageNumber(1);
          window.scrollTo(0, 0);
        });
    } else {
      axios
        .get(
          `/api/genre/?genre=${props.match.params.genreId}&page=${pageNumber}`
        )
        .then((response) => {
          setGenreMovieList(response.data);
          window.scrollTo(0, 0);
        });
    }
  }, [props.match.params.genreId, pageNumber]);

  let displayList = genreMovieList.map((movie, index) => {
    return <DisplayMovie key={index} movie={movie} />;
  });

  return (
    <div className='page'>
      {displayList}
      <section className='page-buttons'>
        <button onClick={previousPage}>Previous Page</button>
        <p className='page-number'>{pageNumber}</p>
        <button onClick={() => setPageNumber(pageNumber + 1)}>Next Page</button>
      </section>
    </div>
  );
}

export default Genre;
