import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import './Navbar.css'

const Navbar = () => {

    const { handleSignOut, user } = useAuth();
    return (
        <div className="navbar">

           

            <div className="">
                <h1>MEDIPATH</h1>
            </div>

            <div className="navlink-containe">
                <NavLink className="navlink" to="/home">HOME</NavLink>
                <NavLink className="navlink" to="/services">SERVICES</NavLink>
                <NavLink className="navlink" to="/doctors">DOCTORS</NavLink>
                <NavLink className="navlink" to="/about">ABOUT</NavLink>
                <NavLink className="navlink" to="/contact">CONTACTS</NavLink>
                {
                    user.email && <span>Hello,{user.displayName}</span>
                }
                {
                    user.email ? <button onClick={handleSignOut}>LOG OUT</button>
                        :
                        <NavLink className="navlink" to="/login">LOG IN</NavLink>
                }


            
            </div>
            
        </div>

    );
};

export default Navbar;