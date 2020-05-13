require('dotenv').config()

const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
      authCtrl = require('./controllers/authController'),
      movieCtrl = require('./controllers/movieController'),
      port = SERVER_PORT,
      app = express();

app.use(express.json())

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60}
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('db connected')
})

//auth endpoints 
app.post('/api/register', authCtrl.register)
app.post('/api/login', authCtrl.login)
app.get('/api/logout', authCtrl.logout)

//movie list endpoints
app.get('/api/latest-movies', movieCtrl.getLatestMovies)
app.get('/api/random-movie', movieCtrl.randomMovie)

app.get('/api/movies', movieCtrl.getMoviesList)
app.get('/api/popular', movieCtrl.getPopular)
app.get('/api/top-rated', movieCtrl.getTopRated)
app.get('/api/now-playing', movieCtrl.getNowPlaying)
app.get('/api/random-movie', movieCtrl.randomMovie)
app.get('/api/trailer/:id', movieCtrl.getTrailer)
app.get('/api/suggested/movies/:user_id', movieCtrl.getMovieSuggestion)

app.post('/api/movies/:user_id', movieCtrl.addUserMovieList)
app.get('/api/user/movies/:user_id', movieCtrl.getUserMovieList)
app.get('/api/movies', movieCtrl.getMoviesList)
app.get('/api/genre', movieCtrl.getGenreList)
app.get('/api/similar_movies/:movie_id', movieCtrl.getSimilarMovies)
app.delete('/api/liked_movies/:movie_id', movieCtrl.deleteUserMovie)

app.listen(port, () => console.log(`Server running on port ${port}`))