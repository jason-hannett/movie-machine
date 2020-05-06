import React, {Component} from 'react'
import './Landing.scss'
import axios from 'axios'

class Landing extends Component {

  render() {
    return(
      <div className='landing-page'>

        <button>Random Movie</button>

        <div className='movie-display'>
        <p>Recommended</p>
          <div className='display-sections'>



          </div>

          <p>Test</p>
          <div className='display-sections'>
            

          </div>

          <p>Recommended Today</p>
          <div className='display-sections'>
            

          </div>
        </div>


      </div>
    )
  }
}

export default Landing;
