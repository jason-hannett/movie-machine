import React, {Component} from "react";
import { render } from "@testing-library/react";

class Comments extends Component{

  constructor(props){
  super(props)

    this.state = {
      comment: ''
    }
  }


inputHandler = (event) => {
  this.setState({
      [event.target.name]: event.target.value
  })
}

render(){
    return(
      <div>Comments Component
        <div className='comments-container'>
          <input
              value={this.state.comments}
              name='comment'
              onChange={this.inputHandler}/>
          <button>submit</button>
        </div>
      </div>
    )
  }
}
export default Comments;