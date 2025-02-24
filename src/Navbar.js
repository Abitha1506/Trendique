import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import {FaHome, FaShoppingCart, FaSignInAlt, FaStore } from 'react-icons/fa';

function Navbar() {
  return (
    <div>
         <nav className="navbar">
        <div className="name">
          <h1>Trendique</h1>
          </div>
          
          <div className="search">
         <input type="text"  placeholder="Search your fav brands, products..." />
         </div>

             <div className="list">
          {/* Use Link for navigation instead of <a> */}
          <Link to="/"><FaHome/> Home</Link>
          <Link to="/shop"><FaStore/> Shop</Link>
          <Link to="/cart"><FaShoppingCart/> Cart</Link>
          <Link to="/login"><FaSignInAlt/> Login</Link>
        </div>

      </nav>

      <hr></hr>
    </div>
  )
}

export default Navbar
