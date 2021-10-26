import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import './Navbar.css'

const Navbar = () => {

    const { handleSignOut, user } = useAuth();
    console.log(user)
    return (
        <div className="navbar-container">

            <div id="navbar-id" className="d-flex justify-content-around justify-content-sm-around align-items-center">

                <div className="d-flex align-items-center">
                    <img className="navbar-img" src="http://ad-din.org/wp-content/uploads/2017/10/adddin-logo-3.png" alt="" />
                </div>

                <div className="d-flex align-items-center">
                    <div className="navlink-containe">
                        <NavLink className="navlink" to="/home">HOME</NavLink>
                        <NavLink className="navlink" to="/services">SERVICES</NavLink>
                        <NavLink className="navlink" to="/doctors">DOCTORS</NavLink>
                        <NavLink className="navlink" to="/about">ABOUT</NavLink>
                        {
                            user.email ? <button className="logout-btn bg-success" onClick={handleSignOut}>LOG OUT</button>
                                :
                                <NavLink className="navlink" to="/login">LOG IN</NavLink>
                        }
                          {
                            user.email && <span className="ms-1">Hello,{user.displayName}</span>
                        }
                    </div>
                </div>

            </div>






        </div>

    );
};

export default Navbar;