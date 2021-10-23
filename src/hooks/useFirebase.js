import React, { useState } from 'react';
import initializeAuhetication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


initializeAuhetication();
const useFirebase = () => {


    // store data in usestate
    const [user, setUser] = useState({})
    const [email, setEmail] = useState({})
    const [password, setPassword] = useState({})
    const [error, setError] = useState({})
    const [isLogin, setIsLogin] = useState(false);

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    // getting email
    const handleEmail = (e) => {
       setEmail(e.target.value)
    }

    // getting password
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    // handle toggle
    const handleToggle = e => {
        setIsLogin(e.target.checked)
    }

    // HALDLE REGISTRATION OR LOG IN OF USER
    const handleRegistrationOrLogin = (e) => {
        e.preventDefault();


        if (isLogin) {
            handleLoginWithEmail(email, password)
        }
        else {
            handleResigterWithEmail(email, password)
        }


    }



    // CREATE NEW USER WITH EMAIL AND PASSWORD;
    const handleResigterWithEmail = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
            })
    }

    // LOG IN USING EMAIL AND PASSWORD
    const handleLoginWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
            })
    }




    // SIGN IN WITH GOOGLE
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user)
            })
    }



    // SIGNOUT
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }


    // RETURN FROM THIS FUNCTION
    return { user, error, handleGoogleSignIn, handleSignOut, handleEmail, handlePassword, handleLoginWithEmail, handleResigterWithEmail, handleToggle, isLogin,handleRegistrationOrLogin }
};

export default useFirebase;