import React, {Component} from 'react' 
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {setUserInfo} from '../../Redux/reducer'
import axios from 'axios'

class Auth extends Component{

    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: '',
            image: ''
        }
    }

    register = () => {
        console.log('button clicked')
        axios.post('/api/register', this.state)
        .then(response => {
            console.log(response.data)
            const {id, username, image} = response.data
            this.props.setUserInfo(id, username, image)
            this.props.history.push('/')
        })
        .catch(err => console.log(err))
    }

    login = () => {
        const {username, password} = this.state
        axios.post('/api/login', {username, password})
        .then(response => {
            console.log(response.data)
            const {id, username, image} = response.data
            this.props.setUserInfo(id, username, image)
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
        return(
            <div className='auth-background'>
                {this.props.location.pathname === '/auth-register' ? 
               <div className='auth-container'>
                   <h2>Register</h2>
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
                   <button onClick={this.register}>register</button>
               </div>
               :
               <div className='auth-container'>
                   <h2>Login</h2>
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
                   <p>Don't have an account? 
                       <span onClick={() => this.props.history.push('/auth-register')} id='a-span'> Register here</span>
                  </p>
               </div>
               }
            </div>
        )
    }

}

export default connect(null, {setUserInfo})(withRouter(Auth))