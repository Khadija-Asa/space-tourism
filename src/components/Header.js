import React from 'react';
import { NavLink } from "react-router-dom";
import './../styles/header.css';
import logo from './../assets/shared/logo.svg';
import open from './../assets/shared/icon-hamburger.svg';
import close from './../assets/shared/icon-close.svg';


const Header = () => {
  return (
      <nav className="navbar d-flex">

        <NavLink to="/">
          <img src={logo} alt="Logo Space Tourism" />
        </NavLink>

        <ul className='navbar-links white'>
          <li className='navbar-item'>
            <NavLink className='navbar-link' to="/">
              00 home
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink className='navbar-link' to="/destination">
              01 destination
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink className='navbar-link' to="/crew">
              02 crew
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink className='navbar-link' to="/technology">
              03 technology
            </NavLink>
          </li>
        </ul>

        <button className='navbar-burger'>
          <span className='burger-bar white'></span>
        </button>

      </nav>
  );
};

export default Header;