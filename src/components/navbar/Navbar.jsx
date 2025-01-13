import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

function Navbar() {
  return (
    <nav>
    <div className="container">
     <div className="navbar">
     <div className="logo">
        <img src="/imgs/logo.png" alt="" />
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/livingrom">LIVING ROOM</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="">KITCHEN &  DINING</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="">CONTACT</Link>
          </li>
        </ul>
      </div>
      <div className="icons">
      <i class="fa-solid fa-cart-shopping"></i>
      <i class="fa-solid fa-circle-user"></i>
      <i class="fa-solid fa-magnifying-glass"></i>

      </div>
     </div>
    </div>
  </nav>
  )
}

export default Navbar