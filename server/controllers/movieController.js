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
      })
      ;
  },

  getLatestMovies: (req, res) => {
    let movieList = []
    const {list} = req.query
    axios.get(
      `https://api.themoviedb.org/3/movie/latest?api_key=b0905bacefecc34fb178a826419bdf12&language=en-US`
    )
    .then((response) => {
      console.log(response.data)
      // movieList = [...response.data.results]
      res.status(200).send(response.data)
    })
    .catch(err => console.log(err))
  },

  randomMovie: (req, res) => {
    const randomMovie = []
    const random = Math.ceil(Math.random() * 151)

    if(req.query.id) {
      axios.get(`https://api.themoviedb.org/3/movie/${req.query.id}?api_key=b0905bacefecc34fb178a826419bdf12&language=en-US`)
      .then(response => {
        randomMovie.push(response.data)
        res.status(200).send(randomMovie)
      })
    } else {
      axios.get(`https://api.themoviedb.org/3/movie/${random}?api_key=b0905bacefecc34fb178a826419bdf12&language=en-US`)
      .then(response => {
        randomMovie.push(response.data)
        res.status(200).send(randomMovie)
      })
    }

  }
  
};
