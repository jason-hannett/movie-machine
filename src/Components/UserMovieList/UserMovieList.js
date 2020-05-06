import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

function UserMovieList(props) {
  const [userMovieList, setUserMovieList] = useState([]);

  useEffect(() => {
    getUserMovieList()
  }, []);

  const getUserMovieList = () => {
    const { id } = props;
    axios.get(`/api/movies/${id}`).then((response) => {
      setUserMovieList(response.data);
    });
  };

  console.log(userMovieList)

  return <div>UserMovieList Component</div>;
}

const mapStateToProps = (reduxState) => {
  const { id } = reduxState;
  return {
    id,
  };
};

export default connect(mapStateToProps)(UserMovieList);
