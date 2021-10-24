import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import './Navbar.css'

const Navbar = () => {

    const { handleSignOut, user } = useAuth();
    console.log(user)
    return (
        <div className="navbar">

           

            <div className="">
                <img className="navbar-img" src="http://ad-din.org/wp-content/uploads/2017/10/adddin-logo-3.png" alt="" />
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