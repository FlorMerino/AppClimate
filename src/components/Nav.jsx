import React, { useState } from 'react';
import Logo from '../img/calentamiento-global.png'
import './Nav.css';
import { Link } from 'react-router-dom';
import {User,  Sunrise,Thermometer, Moon} from 'react-feather';
import SwitchMUI from './Switch';

function Nav({changeTheme}) {

  return (
    <div>
    <nav className="navbar">
       <span className="navbar-brand">
          <img id="calentamiento-global" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
		  WeatherApp
      </span>
	  <div className='subMenu'>
	  <Link to='/'>
	<span className="navbar__link">
		<span className="navbar__icon">
			<Sunrise></Sunrise>	     	
		</span>
		<span className="navbar__label">Today  </span>
	</span>
    </Link>

    <Link to={'/city/Additional-Information'} >
	<span  className="navbar__link">
		<span className="navbar__icon">
			<Thermometer></Thermometer>
		</span>
		<span className="navbar__label">More info</span>
	</span>
	</Link>
	</div>
	<div className='subMenu'>
	<Link to='/about'>
	  <span className="navbar__link">
		<span className="navbar__icon">
        <User></User>
		</span>
	    <span className="navbar__label">About us</span>
	  </span>
	</Link>

	<a onClick={changeTheme} className="navbar__link">
      <SwitchMUI sx={{ m: 1 }} spellCheck ></SwitchMUI>
	</a>

	</div>
	  
    </nav>
	
 </div>
 );
};

export default Nav;

// NavLink -> activeClassName | activeStyle (se le pasa un obj) 
