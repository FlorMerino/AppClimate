import React from 'react';
import Logo from '../img/logoHenry.png'
import './Nav.css';
import { Link } from 'react-router-dom';
import {User, Home, Sunrise, Sun,Thermometer, Moon} from 'react-feather';


function Nav() {
  return (
    <div>
    
    <nav className="navbar">
       <span className="navbar-brand">
          <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
		  WeatherApp
      </span>
	<Link to='/'>
	<span className="navbar__link">
		<span className="navbar__icon">
			<Sunrise></Sunrise>	     	
		</span>
		<span className="navbar__label">Today  </span>
	</span>
    </Link>

	<a href="#" className="navbar__link">
		<span className="navbar__icon">
			<Thermometer></Thermometer>
		</span>
		<span className="navbar__label">Extended</span>
	</a>

	<Link to='/about'>
	  <span className="navbar__link">
		<span className="navbar__icon">
        <User></User>
		</span>
	    <span className="navbar__label">About us</span>
	  </span>
	</Link>

	<a href="#" className="navbar__link">
		<span className="navbar__icon">
			<Moon></Moon>
		</span>
		<span className="navbar__label">Dark mode</span>
	</a>

    </nav>
	
 </div>
 );
};

export default Nav;

// NavLink -> activeClassName | activeStyle (se le pasa un obj) 