import React, { useState } from 'react';
import './Login.css'
import gLogo from '../../assets/images/google.png'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }


const Login = () => {
    //login signup
    const [form, setForm] = useState(true)

    // Google User State
    const [googleUser, setGoogleUser] = useState({
        isSinedIn: false,
        name: '',
        email: ''
    })
    // manual user state
    const [user, setUser] = useState({
        isSinedIn: false,
        name: '',
        email: ''
    })

    //handle Changing of Input
    const handleChange = (event) => {
        console.log(event.target.name, event.target.value)
    }


    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(result => {
                const token = result.credential.accessToken;

                // The signed-in user info.
                const { displayName, email } = result.user;
                const sinedInUser = {
                    isSinedIn: true,
                    name: displayName,
                    email: email
                }
                setGoogleUser(sinedInUser);
            })

    }

    return (
        <div className="container wrap">
            <div className="login">
                <form>
                    {
                        form ? <div>
                        <p>Login</p>
                        <input onBlur={handleChange} name="email" type="email" placeholder="Email" required />
                        <input type="password" onBlur={handleChange} name="password" placeholder="Password" required />
                        <div className="option">
                            <div>
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                                </div>
                            </div>
                            <div>
                                <a href="/"><h5>Forgot Password</h5></a>
                            </div>
                        </div>

                        <input className="loginBtn" type="submit" value="Log In" />
                        <span className="crtMsz">Don't have an account?
                         
                        <a onClick={() => setForm(false)} href="#">Create an Account</a>

                        </span>
                    </div>

                    :
                    <div>
                        <p>Sign Up</p>
                        <input onBlur={handleChange} name="name" type="text" placeholder="Your Full Name" required />

                        <input onBlur={handleChange} name="email" type="email" placeholder="Email" required />

                        <input type="password" onBlur={handleChange} name="password" placeholder="Password" required />

                        <input className="loginBtn" type="submit" value="Sign Up" />
                        <span className="crtMsz">Have an account?
                         
                        <a onClick={() => setForm(true)} href="#">LogIn</a>

                        </span>
                    </div>
                    }
                </form>
            </div>
            <p className="or-style">Or</p>
            <button onClick={handleGoogleSignIn} className="googleBtn"><img src={gLogo} alt="" />Continue with Google</button>
        </div>
    );
};

export default Login;