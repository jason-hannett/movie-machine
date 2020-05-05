import React, {useState} from "react";
import { Link } from "react-router-dom";
import Menu from './Menu';

function Nav(props) {

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    if(!openMenu){
      setOpenMenu(true)
    } else {
      setOpenMenu(false)
    }
  };

  let dropdownMenu;
  if(openMenu){
    dropdownMenu = (
      <Menu
      visibility={openMenu}
      close={toggleMenu}
      dropdownMenu={"dropdown"}
      />
    )
  }

  return (
    <div className='main-nav'>
      <Link to="/">
        <p>Movie Machine</p>
      </Link>
      <p onClick={toggleMenu}>Menu</p>
      {dropdownMenu}
      <Link to='/auth'>
        <p>Login/Register</p>
      </Link>
    </div>
  );
}

export default Nav;
