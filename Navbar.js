



import React, { useState } from "react";
import './navbar.css'
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <header>
      <div className="main-nav wrapper">
      <div className="logo">
        <h2>
          <span>F</span>ood
          <span>O</span>mania

        </h2>
      </div>

      <nav className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link "}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className="social-media">
        <ul className="social-media-desktop">

          <li>
            <a
              href="/" target='_food'>
              <FaFacebookSquare fontSize={34} color='#8a3e1e' />
            </a>
          </li>
          <li>
            <a
              href="/" target='_food'>
              <FaInstagramSquare fontSize={34} color='#8a3e1e' />
            </a>
          </li>
          <li>
            <a
              href="/" target='_food'>
              <FaYoutubeSquare fontSize={34} color='#8a3e1e' />
            </a>
          </li>
        </ul>

        <div className="hamburger-menu">
          <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu fontSize={34} color='black' />
          </a>
        </div>
      </div>
    </div>
    </header>
  )
}

export default Navbar