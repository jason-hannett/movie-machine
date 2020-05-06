const axios = require("axios");

module.exports = {
  getMoviesList: (req, res) => {
    let movieList = [];
    const {list} = req.query;
    const {page} = req.query
    console.log(list)
    console.log(page)
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${list}?api_key=b0905bacefecc34fb178a826419bdf12&language=en-US&page=${page}`
      )
      .then((response) => {
        movieList = [...response.data.results];
        res.status(200).send(movieList);
      })
      .catch((err) => res.status(500).send(err));
  },
};
