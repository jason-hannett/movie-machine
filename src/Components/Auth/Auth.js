import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setUserInfo } from "../../redux/reducer";
import axios from "axios";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      image: "",
      movie_category_1: "",
      movie_category_2: "",
      movie_category_3: "",
    };
  }

  register = () => {
    axios
      .post("/api/register", this.state)
      .then((response) => {
        const { user_id, username, image } = response.data;
        this.props.setUserInfo(user_id, username, image);
        this.props.history.push("/");
      })
      .catch((err) => console.log(err));
  };

  login = () => {
    const { username, password } = this.state;
    axios
      .post("/api/login", { username, password })
      .then((response) => {
        const { user_id, username, image } = response.data;
        this.props.setUserInfo(user_id, username, image);
        this.props.history.goBack();
      })
      .catch((err) => console.log(err));
  };

  inputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    // console.log(this.state)
    // console.log(this.state.movie_category_1)

    return (
      <div className="auth-background">
        <img
          className="slide-1"
          src="https://i.pinimg.com/originals/8f/92/fa/8f92fa142c263dc8d862dcb6010fa30d.jpg"
          alt="inglorious bastards"
          style={{ display: "block" }}
        />
        <img
          className="slide-2"
          src="https://cdn.vox-cdn.com/thumbor/4Uc_V3cGm608F60I4kviNg3mXSI=/0x0:3650x1554/1200x480/filters:focal(1737x419:2321x1003)/cdn.vox-cdn.com/uploads/chorus_image/image/60385525/heaths_joker_300x128.jpg.0.jpg"
          alt="the dark knight joker scene"
        />
        <img
          className="slide-3"
          src="https://www.theglobeandmail.com/resizer/pNJQ2snLgDH5dsZ8LCg0IWNuKI4=/2048x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/QX3GDBKSUZD7DJC3EBKSX4GVJQ"
          alt="la la land dance scene"
        />
        <img
          className="slide-4"
          src="https://sites.middlebury.edu/enam0323epic/files/2014/04/Brad-Pitt-in-Troy-2004-Movie-Image.jpg"
          alt="troy fight scene"
        />
        <img
          className="slide-5"
          src="https://whyy.org/wp-content/uploads/2018/01/coco_1200x800-768x512.jpg"
          alt="coco movie scene"
        />
        <img
          className="slide-6"
          src="https://media1.fdncms.com/clevescene/imager/u/original/32602795/hpatcos.jpg"
          alt="harry potter movie scene"
        />
        <img
          className="slide-7"
          src="https://i0.wp.com/scenome.com/wp-content/uploads/2016/04/Training_Day_Screen.jpg?fit=828%2C350"
          alt="training day movie scene"
        />
        <img
          className="slide-8"
          src="https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/wb-883316828380-Full-Image_GalleryBackground-en-US-1484000599070._SX1080_.jpg"
          alt="the great gatsby"
        />
        <img
          className="slide-9"
          src="https://img1.looper.com/img/gallery/dumb-things-in-the-indiana-jones-movies-everyone-ignored/intro-1571154372.jpg"
          alt="indiana jones"
        />
        <img
          className="slide-10"
          src="https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1484762548736-1KXUD2HJLGSBTN4WC1IX/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/image-asset.jpeg?format=2500w"
          alt="marvel movie scene"
        />
        {this.props.location.pathname === "/auth-register" ? (
          <div className="auth-container">
            <h2 id="a-header">Register</h2>
            <input
              value={this.state.username}
              name="username"
              placeholder="username"
              id="a-username"
              onChange={this.inputHandler}
            />
            <input
              value={this.state.password}
              name="password"
              placeholder="password"
              type="password"
              id="a-password"
              onChange={this.inputHandler}
            />
            <input
              value={this.state.image}
              name="image"
              placeholder="image"
              id="a-password"
              onChange={this.inputHandler}
            />
            <h3 id="a-header-2">Favorite Genres</h3>
            <select
              id="a-selector"
              onChange={this.inputHandler}
              value={this.state.movie_category_1}
              name="movie_category_1"
            >
              <option>Select</option>
              <option value="action" name="action">
                Action
              </option>
              <option value="comedy" name="adventure">
                Adventure
              </option>
              <option value="drama" name="animation">
                Animation
              </option>
              <option value="drama" name="comedy">
                Comedy
              </option>
              <option value="drama" name="crime">
                Crime
              </option>
              <option value="drama" name="documentary">
                Documentary
              </option>
              <option value="drama" name="drama">
                Drama
              </option>
              <option value="drama" name="family">
                Family
              </option>
              <option value="drama" name="fantasy">
                Fantasy
              </option>
              <option value="drama" name="history">
                History
              </option>
              <option value="drama" name="horror">
                Horror
              </option>
              <option value="drama" name="music">
                Music
              </option>
              <option value="drama" name="mystery">
                Mystery
              </option>
              <option value="drama" name="romance">
                Romance
              </option>
              <option value="drama" name="sci-fi">
                Sci-Fi
              </option>
              <option value="drama" name="thriller">
                Thriller
              </option>
              <option value="drama" name="war">
                War
              </option>
              <option value="drama" name="western">
                Western
              </option>
            </select>
            <select
              id="a-selector"
              onChange={this.inputHandler}
              value={this.state.movie_category_2}
              name="movie_category_2"
            >
              <option>Select</option>
              <option value="action" name="action">
                Action
              </option>
              <option value="comedy" name="adventure">
                Adventure
              </option>
              <option value="drama" name="animation">
                Animation
              </option>
              <option value="drama" name="comedy">
                Comedy
              </option>
              <option value="drama" name="crime">
                Crime
              </option>
              <option value="drama" name="documentary">
                Documentary
              </option>
              <option value="drama" name="drama">
                Drama
              </option>
              <option value="drama" name="family">
                Family
              </option>
              <option value="drama" name="fantasy">
                Fantasy
              </option>
              <option value="drama" name="history">
                History
              </option>
              <option value="drama" name="horror">
                Horror
              </option>
              <option value="drama" name="music">
                Music
              </option>
              <option value="drama" name="mystery">
                Mystery
              </option>
              <option value="drama" name="romance">
                Romance
              </option>
              <option value="drama" name="sci-fi">
                Sci-Fi
              </option>
              <option value="drama" name="thriller">
                Thriller
              </option>
              <option value="drama" name="war">
                War
              </option>
              <option value="drama" name="western">
                Western
              </option>
            </select>
            <select
              id="a-selector"
              onChange={this.inputHandler}
              value={this.state.movie_category_3}
              name="movie_category_3"
            >
              <option>Select</option>
              <option value="action" name="action">
                Action
              </option>
              <option value="comedy" name="adventure">
                Adventure
              </option>
              <option value="drama" name="animation">
                Animation
              </option>
              <option value="drama" name="comedy">
                Comedy
              </option>
              <option value="drama" name="crime">
                Crime
              </option>
              <option value="drama" name="documentary">
                Documentary
              </option>
              <option value="drama" name="drama">
                Drama
              </option>
              <option value="drama" name="family">
                Family
              </option>
              <option value="drama" name="fantasy">
                Fantasy
              </option>
              <option value="drama" name="history">
                History
              </option>
              <option value="drama" name="horror">
                Horror
              </option>
              <option value="drama" name="music">
                Music
              </option>
              <option value="drama" name="mystery">
                Mystery
              </option>
              <option value="drama" name="romance">
                Romance
              </option>
              <option value="drama" name="sci-fi">
                Sci-Fi
              </option>
              <option value="drama" name="thriller">
                Thriller
              </option>
              <option value="drama" name="war">
                War
              </option>
              <option value="drama" name="western">
                Western
              </option>
            </select>
            <button id="a-button" onClick={this.register}>
              register
            </button>
            <p id="a-back" onClick={() => this.props.history.goBack()}>
              back
            </p>
          </div>
        ) : (
          <div className="auth-container">
            <h2 id="a-header">Login</h2>
            <input
              value={this.state.username}
              name="username"
              placeholder="username"
              id="a-username"
              onChange={this.inputHandler}
            />
            <input
              value={this.state.password}
              name="password"
              placeholder="password"
              type="password"
              id="a-password"
              onChange={this.inputHandler}
            />
            <button id="a-button" onClick={this.login}>
              Login
            </button>
            <p id="a-p">
              Don't have an account?
              <span
                onClick={() => this.props.history.push("/auth-register")}
                id="a-span"
              >
                {" "}
                Register here
              </span>
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { setUserInfo })(withRouter(Auth));
