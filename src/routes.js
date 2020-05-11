import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Auth from './Components/Auth/Auth';
import Comments from './Components/Comments/Comments';
import Movie from './Components/Movie/Movie';
import MovieList from './Components/MovieList/MovieList';
import UserMovieList from './Components/UserMovieList/UserMovieList';
import Browse from './Components/Browse/Browse';
import Genre from './Components/Browse/Genre';


export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/auth' component={Auth}/>
        <Route path='/auth-register' component={Auth}/>
        <Route path='/comments' component={Comments}/>
        <Route path='/movie/:movieId' component={Movie}/>
        <Route path='/movies/:list' component={MovieList}/>
        <Route path='/liked_movies/:user_id' component={UserMovieList}/>
        <Route path='/movies_genre/browse' component={Browse}/>
        <Route path='/movies_genre/:genreId' component={Genre}/>
    </Switch>
)