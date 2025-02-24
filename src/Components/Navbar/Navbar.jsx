import React from 'react'
import { FaBlog } from 'react-icons/fa'
import './Navbar.css';
const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
            <div className="nav_logo">
              <h2> <FaBlog/> React Blog</h2>
            </div>
            <div className="link">
             <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact Us</li>
              <li>Advert</li>
             </ul>
            </div>
            <div className="subscribtion">
                <button>Subscribe</button>
            </div>
        </nav>

    </div>
  )
}

export default Navbar;