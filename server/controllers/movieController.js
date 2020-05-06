const axios = require("axios");

module.exports = {
  getMoviesList: (req, res) => {
    let movieList = [];
    const {list} = req.query;
    const {page} = req.query
    // console.log(list)
    // console.log(page)
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
  addUserMovieList: (req, res) => {
    const db = req.app.get('db');
    const {user_id} = req.params,
    {movie_id} = req.body;
    // console.log(req.params)
    // console.log(req.body)

    db.movies.add_user_movie(user_id, movie_id)
    .then(res.sendStatus(200))
    .catch((err) => res.status(500).send(err))
  },
  getUserMovieList: (req, res) => {
    const db = req.app.get('db');
    const {user_id} = req.params
    
    console.log(req.params)
    db.movies.get_user_movies.sql(user_id)
    .then((list) => res.status(200).send(list))
    .catch((err) => res.status(500).send(err))
  }
};
