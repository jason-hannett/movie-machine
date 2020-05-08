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
      .catch((err) => res.status(500).send(err))
  },
  getNowPlaying: (req, res) => {
    axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=b0905bacefecc34fb178a826419bdf12&language=en-US&page=1`
    )
    .then((response) => {
      console.log(response.data.results)
      res.status(200).send(response.data)
    })
    .catch(err => console.log(err))
  },

  getTopRated: (req, res) => {
    axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=b0905bacefecc34fb178a826419bdf12&language=en-US&page=1`
    )
    .then((response) => {
      res.status(200).send(response.data)
    })
    .catch(err => console.log(err))
  },

  getPopular: (req, res) => {
    axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=b0905bacefecc34fb178a826419bdf12&language=en-US&page=1`
    )
    .then((response) => {
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

  },

  getTrailer: (req, res) => {
    const {id} = req.params
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=b0905bacefecc34fb178a826419bdf12&language=en-US`)
    .then(response => {
      res.status(200).send(response.data)
    })
    .catch(err => console.log(err))
  }
};
