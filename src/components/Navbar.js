import "./Navbar.css"; 
import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        {/*1st Logo Div*/}
        <div className="logo">
          <h2>
            <span>H</span>eavens
            <span>A</span>nime
          </h2>
        </div>
            {/* 2nd Menu Links */}
        <div className="menu-link">
          <ul>
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Collection</a>
            </li>
          </ul>
        </div>
        {/* 3rd Social Media Links */}
        <div className="social-media">
            <ul className="social-media-desktop">
                <li><a href="#"><FaFacebookSquare className="facebook"/></a></li>
                <li><a href="#"> <FaInstagramSquare class="instagram"/> </a></li>
                <li><a href="#"><FaYoutubeSquare className="youtube"/></a></li>
            </ul>
        </div>
      </nav>

    {/* Hero section Starts */}
        <section className="hero-section">
            <p>Welcome to</p>
            <h1>Heavens Anime</h1>
        </section>
    </>
  );
};
export default Navbar;
