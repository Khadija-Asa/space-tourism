import {React, useState} from 'react';
import { NavLink } from "react-router-dom";
import './../styles/header.css';
import logo from './../assets/shared/logo.svg';
import open from './../assets/shared/icon-hamburger.svg';
import close from './../assets/shared/icon-close.svg';


const Header = () => {

  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }

  return (
      <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>

        <NavLink to="/">
          <img src={logo} alt="Logo Space Tourism" />
        </NavLink>

        <ul className='navbar-links'>
          <li className='navbar-item'>
            <NavLink className='navbar-link' to="/">
              <span className="link-number">00</span> home
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink className='navbar-link' to="/destination">
            <span className="link-number">01</span> destination
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink className='navbar-link' to="/crew">
            <span className="link-number">03</span> crew
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink className='navbar-link' to="/technology">
            <span className="link-number">04</span> technology
            </NavLink>
          </li>
        </ul>

        <button className='navbar-burger' onClick={handleShowLinks}>
          <span className='burger-bar'></span>
        </button>

      </nav>
  );
};

export default Header;