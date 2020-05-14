import React, {Component} from 'react' 
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {setUserInfo} from '../../redux/reducer'
import axios from 'axios'

class Auth extends Component{

    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: '',
            image: '',
            movie_category_1: '',
            movie_category_2: '',
            movie_category_3: ''
        }
    }

    register = () => {
        axios.post('/api/register', this.state)
        .then(response => {
            const {user_id, username, image} = response.data
            this.props.setUserInfo(user_id, username, image)
            this.props.history.push('/')
        })
        .catch(err => console.log(err))
    }

    login = () => {
        const {username, password} = this.state
        axios.post('/api/login', {username, password})
        .then(response => {
            const {user_id, username, image} = response.data
            this.props.setUserInfo(user_id, username, image)
            this.props.history.goBack()
        })
        .catch(err => console.log(err))
    }

    inputHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        // console.log(this.state)
        console.log(this.state.movie_category_1)

        return(
            <div className='auth-background'>
                {this.props.location.pathname === '/auth-register' ? 
               <div className='auth-container'>
                   <h2 id='a-header'>Register</h2>
                   <input 
                        value={this.state.username}
                        name='username' 
                        placeholder='username'
                        id='a-username'
                        onChange={this.inputHandler}/>
                   <input 
                        value={this.state.password}
                        name='password' 
                        placeholder='password'
                        type='password'
                        id='a-password'
                        onChange={this.inputHandler}/>
                   <input 
                        value={this.state.image}
                        name='image' 
                        placeholder='image'
                        id='a-password'
                        onChange={this.inputHandler}/>
                    <h3 id='a-header-2'>Favorite Genres</h3>
                    <select id='a-selector' onChange={this.inputHandler} value={this.state.movie_category_1}  name='movie_category_1'>
                        <option>Select</option>
                        <option value='action' name='action'>action</option>
                        <option value='comedy' name='adventure'>adventure</option>
                        <option value='drama' name='animation'>animation</option>
                        <option value='drama' name='comedy'>comedy</option>
                        <option value='drama' name='crime'>crime</option>
                        <option value='drama' name='documentary'>documentary</option>
                        <option value='drama' name='drama'>drama</option>
                        <option value='drama' name='family'>family</option>
                        <option value='drama' name='fantasy'>fantasy</option>
                        <option value='drama' name='history'>history</option>
                        <option value='drama' name='horror'>horror</option>
                        <option value='drama' name='music'>music</option>
                        <option value='drama' name='mystery'>mystery</option>
                        <option value='drama' name='romance'>romance</option>
                        <option value='drama' name='sci-fi'>sci-fi</option>
                        <option value='drama' name='thriller'>thriller</option>
                        <option value='drama' name='war'>war</option>
                        <option value='drama' name='western'>western</option>
                    </select>
                    <select id='a-selector' onChange={this.inputHandler} value={this.state.movie_category_2}  name='movie_category_2'>
                        <option>Select</option>
                        <option value='action' name='action'>action</option>
                        <option value='comedy' name='adventure'>adventure</option>
                        <option value='drama' name='animation'>animation</option>
                        <option value='drama' name='comedy'>comedy</option>
                        <option value='drama' name='crime'>crime</option>
                        <option value='drama' name='documentary'>documentary</option>
                        <option value='drama' name='drama'>drama</option>
                        <option value='drama' name='family'>family</option>
                        <option value='drama' name='fantasy'>fantasy</option>
                        <option value='drama' name='history'>history</option>
                        <option value='drama' name='horror'>horror</option>
                        <option value='drama' name='music'>music</option>
                        <option value='drama' name='mystery'>mystery</option>
                        <option value='drama' name='romance'>romance</option>
                        <option value='drama' name='sci-fi'>sci-fi</option>
                        <option value='drama' name='thriller'>thriller</option>
                        <option value='drama' name='war'>war</option>
                        <option value='drama' name='western'>western</option>
                    </select>
                    <select id='a-selector' onChange={this.inputHandler} value={this.state.movie_category_3}  name='movie_category_3'>
                        <option>Select</option>
                        <option value='action' name='action'>action</option>
                        <option value='comedy' name='adventure'>adventure</option>
                        <option value='drama' name='animation'>animation</option>
                        <option value='drama' name='comedy'>comedy</option>
                        <option value='drama' name='crime'>crime</option>
                        <option value='drama' name='documentary'>documentary</option>
                        <option value='drama' name='drama'>drama</option>
                        <option value='drama' name='family'>family</option>
                        <option value='drama' name='fantasy'>fantasy</option>
                        <option value='drama' name='history'>history</option>
                        <option value='drama' name='horror'>horror</option>
                        <option value='drama' name='music'>music</option>
                        <option value='drama' name='mystery'>mystery</option>
                        <option value='drama' name='romance'>romance</option>
                        <option value='drama' name='sci-fi'>sci-fi</option>
                        <option value='drama' name='thriller'>thriller</option>
                        <option value='drama' name='war'>war</option>
                        <option value='drama' name='western'>western</option>
                    </select>
                    <button id='a-button' onClick={this.register}>register</button>
                    <p id='a-back' onClick={() => this.props.history.goBack()}>back</p>
               </div>
               :
               <div className='auth-container'>
                   <h2 id='a-header'>Login</h2>
                   <input 
                        value={this.state.username}
                        name='username' 
                        placeholder='username'
                        id='a-username'
                        onChange={this.inputHandler}/>
                   <input 
                        value={this.state.password}
                        name='password' 
                        placeholder='password'
                        type='password'
                        id='a-password'
                        onChange={this.inputHandler}/>
                   <button 
                        id='a-button'
                        onClick={this.login}>Login</button>
                   <p id='a-p'>Don't have an account? 
                       <span onClick={() => this.props.history.push('/auth-register')} id='a-span'> Register here</span>
                  </p>
               </div>
               }
            </div>
        )
    }

}

export default connect(null, {setUserInfo})(withRouter(Auth))