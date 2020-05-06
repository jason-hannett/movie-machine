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
            <div>
               <div>
                   <input 
                        value={this.state.username}
                        name='username' 
                        placeholder='username'
                        onChange={this.inputHandler}/>
                   <input 
                        value={this.state.password}
                        name='password' 
                        placeholder='password'
                        type='password'
                        onChange={this.inputHandler}/>
                   <input 
                        value={this.state.image}
                        name='image' 
                        placeholder='image'
                        onChange={this.inputHandler}/>
                   <button onClick={this.register}>register</button>
               </div>
            </div>
        )
    }

}

export default connect(null, {setUserInfo})(withRouter(Auth))