import React, {useState, useEffect, useRef} from "react";
import { connect } from "react-redux";
import DisplayMovie from "../MovieList/DisplayList";
import axios from 'axios';
// import { setSearchArr } from "../../redux/reducer";


function Search(props) {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchArr, setSearchArr] = useState([]);

  console.log(props)

  const previousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  function usePrevious() {
      const ref = useRef();
      useEffect(() => {
          ref.current = props.match.params.query;
      });
      return ref.current
  }

  const prevQuery = usePrevious();

  useEffect(() => {
      if(prevQuery !== props.match.params.query){
          axios.get(`/api/search/?string=${props.match.params.query}&page=1`)
          .then((response) => {
              setSearchArr(response.data)
              setPageNumber(1);
              window.scrollTo(0,0)
          });
      } else {
          axios.get(`/api/search/?string=${props.match.params.query}&page=${pageNumber}`)
          .then((response) => {
              setSearchArr(response.data)
              window.scrollTo(0,0)
          })
      }
  }, [props.match.params.query, pageNumber])


  let displaySearch = searchArr.map((movie, index) => {
    return <DisplayMovie key={index} movie={movie} />;
  });
  return (
    <div>
      {displaySearch}
      <section className="page-buttons">
        <button onClick={previousPage}>Previous Page</button>
        <p className="page-number">{pageNumber}</p>
        <button onClick={() => setPageNumber(pageNumber + 1)}>Next Page</button>
      </section>
    </div>
  );
}

const mapStateToProps = (reduxState) => {
  const { searchArr } = reduxState;
  return {
    searchArr,
  };
};

export default connect(mapStateToProps)(Search);
