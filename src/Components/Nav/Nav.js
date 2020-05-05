import React from "react";
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import {logoutUser} from '../../Redux/reducer';
import axios from 'axios'


function Nav(props) {

  const logout = () => {
    axios.get('/api/logout')
    .then(() => {
      props.logoutUser();
      props.history.push('/')
    })
  }

  console.log(props)
  return <div>Nav Component
        <div>
          <img src={props.user.image} height='15px'/>
          <h3>{props.user.username}</h3>
        </div>
            <button onClick={logout}>Logout</button>
        </div>;
}

const mapStateToProps = reduxState => {
    
  return {
      user: reduxState
  }};

export default withRouter(connect(mapStateToProps, {logoutUser})(Nav));