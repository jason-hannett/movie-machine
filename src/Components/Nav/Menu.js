import React, { useState } from "react";
import "./Nav.css";

function Menu(props) {
  const [menuClass, setMenuClass] = useState(props.dropdownMenu);

  const closeHandler = () => {
    setMenuClass("dropdown close");
    setTimeout(() => {
      props.close();
    });
  };
  return (
    <div className={menuClass}>
      <span>
        <h2>Movies</h2>
      </span>
      <span>
          <h2>TV Shows</h2>
      </span>

      <p onClick={closeHandler}>Close</p>
    </div>
  );
}

export default Menu;
