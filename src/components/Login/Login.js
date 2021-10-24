import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {

    const { handleGoogleSignIn, user, handleEmail, handlePassword, handleResigterWithEmail, handleLoginWithEmail, handleToggle, isLogin, handleRegistrationOrLogin } = useAuth();


    // REDIRECTING PAGES CODE
    // const location = useLocation();
    // const history = useHistory();
    // const redirect_uri = location.state?.from || '/services/:serviceId';

    // const handleGoogleLogin = () => {
    //     handleGoogleSignIn()
    //         .then(result => {
    //             history.push(redirect_uri);
    //         })
    // }


    return (
        <div className="login">

            <form className="form-container" onSubmit={handleRegistrationOrLogin}>

                <div className="form-container">


                    <h2>Please {isLogin ? 'Resigter' : 'Login'}</h2>

                    <h2>{user.email}</h2>

                    <label htmlFor="Email">Email</label>
                    <input onBlur={handleEmail} type="text" name="email" placeholder="Enter Your Email" id="" />
                    <br />
                    <label htmlFor="Password">Password</label>
                    <input onBlur={handlePassword} type="password" name="" placeholder="Enter your Password" id="" />
                    <br />
                    <button type="submit">
                        {isLogin ? 'Register' : 'Login'}
                    </button>

                    <div>
                        <input onChange={handleToggle} class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Create new account?
                        </label>
                    </div>


                    <button onClick={handleGoogleSignIn}>Google Sign In</button>
                </div>
            </form>


        </div>
    );
};

export default Login;