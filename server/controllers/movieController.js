const axios = require("axios");

module.exports = {
  getMoviesList: (req, res) => {
    let movieList = [];
    const { list } = req.query;
    const { page } = req.query;
    // console.log(list)
    // console.log(page)
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${list}?api_key=b0905bacefecc34fb178a826419bdf12&language=en-US&page=${page}`
      )
      .then((response) => {
        // console.log(response.data)
        movieList = [...response.data.results];
        res.status(200).send(movieList);
      })
      .catch((err) => res.status(500).send(err));
  },
  addUserMovieList: (req, res) => {
    const db = req.app.get("db");
    const { user_id } = req.params,
      { movie_id } = req.body;
    // console.log(req.params)
    // console.log(req.body)

    db.movies
      .add_user_movie(user_id, movie_id)
      .then(res.sendStatus(200))
      .catch((err) => res.status(500).send(err));
  },
  getUserMovieList: async (req, res) => {
    const db = req.app.get("db");
    const { user_id } = req.params;

    let movieIdArr = await db.movies.get_user_movies(user_id)
     let likedMovies = movieIdArr.map((element) => axios.get(
          `https://api.themoviedb.org/3/movie/${element.movie_id}?api_key=b0905bacefecc34fb178a826419bdf12&language=en-US`
          ).then((a) => {
            return a.data
          })
          .catch((err) => res.status(404).send(err))
          )
          const results = await Promise.all(likedMovies)
          console.log(results)
          res.status(200).send(results)
  },
  deleteUserMovie: (req, res) => {
    const db = req.app.get("db");
    const { user_id } = req.query;
    const { movie_id } = req.params;

    db.movies
      .delete_user_movie(user_id, movie_id)
      .then((list) => res.status(200).send(list))
      .catch((err) => res.status(500).send(err));
  },
};
