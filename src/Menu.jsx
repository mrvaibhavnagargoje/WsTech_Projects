import React, { useState } from "react"
import "./App.css"

function Menu() {
  const [menuStatus, setMenuStatus] = useState(false)
  return (
    <div className="App">
      <button className="micon" onClick={() => setMenuStatus(!menuStatus)}>
        {menuStatus ? <span>&times;</span> : <span>&#9776;</span>}
      </button>
      <div className={`menu ${menuStatus ? "activeMenu" : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Course</li>
          <li>Gallery</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  )
}

export default Menu


// import "./App.css"
// .menu {
//   width: 25%;
//   text-align: left;
//   position: fixed;
//   height: 100vh;
//   background-color: yellow;
//   left: -100%;
//   top: 0;
//   transition: left 0.5s ease-in-out;
//   z-index: 1000;
//   box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
// }

// .activeMenu {
//   left: 0;
// }

// .menu ul {
//   padding: 20px;
//   margin: 0;
// }

// .menu ul li {
//   list-style: none;
//   padding: 15px 10px;
//   font-size: 18px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;
// }

// .menu ul li:hover {
//   background-color: rgba(0, 0, 0, 0.1);
// }

// .micon {
//   position: absolute;
//   right: 15px;
//   top: 15px;
//   font-size: 24px;
//   cursor: pointer;
// }
