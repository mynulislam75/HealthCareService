import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Navbar.css'

const Navbar = () => {


    return (
        <div className="navbar">
            <div>
                <h1>MEDIPATH</h1>
            </div>

            <div className="navlink-container">
                <NavLink className="navlink" to="/home">HOME</NavLink>
                <NavLink className="navlink" to="/services">SERVICES</NavLink>
                <NavLink className="navlink" to="/doctors">DOCTORS</NavLink>
                <NavLink className="navlink" to="/about">ABOUT</NavLink>
                <NavLink className="navlink" to="/contact">CONTACTS</NavLink>
                <NavLink className="navlink" to="/login">LOg In</NavLink>
               
            </div>
        </div>

    );
};

export default Navbar;