import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {

    const { handleGoogleSignIn, user, handleEmail, handlePassword, handleResigterWithEmail, handleLoginWithEmail, handleToggle, isLogin,handleRegistrationOrLogin } = useFirebase();
    return (
        <div className="login">
            <form onSubmit={handleRegistrationOrLogin}>


                <h2>Please {isLogin ? 'Resigter':'Login' }</h2>

                <br />
                <h2>{user.email}</h2>
                <label htmlFor="Email">Email</label>
                <input onBlur={handleEmail} type="email" name="" placeholder="Enter Your Email" id="" />
                <br />

                <label htmlFor="">Password</label>
                <input onBlur={handlePassword} type="password" name="" placeholder="Enter your Password" id="" />
                <br />
                <button onClick={handleGoogleSignIn}>Google Sign In</button>

                <div>
                    <input onChange={handleToggle} class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        Create new account?
                    </label>
                </div>
               <button type="submit">
                   {isLogin?'Register':'Login'}
               </button>
            </form>
        </div>
    );
};

export default Login;