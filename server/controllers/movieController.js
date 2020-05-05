const axios = require("axios");

module.exports = {
  getPopularMovies: (req, res) => {
    let movieList = [];
    const {list} = req.query;
    console.log(list)
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${list}?api_key=b0905bacefecc34fb178a826419bdf12&language=en-US&page=1`
      )
      .then((response) => {
        movieList = [...response.data.results];
        res.status(200).send(movieList);
      });
  },
};
