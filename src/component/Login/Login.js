import React, { useContext, useState } from 'react';
import './Login.css'
import gLogo from '../../assets/images/google.png'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { Modal, ModalBody } from 'react-bootstrap';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }


const Login = () => {
    const [smShow, setSmShow] = useState(false);

    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   const history = useHistory();
   const location = useLocation();
   let { from } = location.state || { from: { pathname: "/" } };
    //login signup
    const [form, setForm] = useState(true)

    // User State
    const [user, setUser] = useState({
        isSinedIn: false,
        email: '',
        password: '',
        name: ''
    })



    //handle Changing of Input
    const handleChange = (event) => {
        let isFormValid = true;
        if(event.target.name === 'email'){
            isFormValid = /\S+@\S+\.\S+/.test(event.target.value)
        }
        if(event.target.name === 'password'){
             isFormValid = event.target.value.length > 6;
        }
        if(isFormValid){
            const newUserInfo = {...user}
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSignIn = (e) =>{
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            const { displayName, email } = user;
                const sinedInUser = {
                    isSinedIn: true,
                    name: displayName,
                    email: email
                }
                
                setLoggedInUser(sinedInUser);
                history.replace(from);
                setSuccess(true)
                setSmShow(true)

        })
        .catch((error) => {
            setError(true)
            setSmShow(true)
        });
        e.preventDefault();
    }

    const handleSubmit = (e) => {
        if(user.email && user.password){
            const nameOfuser = user.name;
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => {
                let user = userCredential.user;
                setSuccess(true)
                setSmShow(true)

                user = firebase.auth().currentUser;
                user.updateProfile({
                displayName: nameOfuser
                }).then(function() {

                }).catch(function(error) {
                // An error happened.
                });
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                setError(true)
                setSmShow(true)
                
            });
        }

        e.preventDefault();
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
                
                setLoggedInUser(sinedInUser);
                history.replace(from);
                setSuccess(true)
                setSmShow(true)
            })

    }

    return (
        <div className="container wrap">
        {
            success && <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Success
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Granted</Modal.Body>
      </Modal>
        }

        {
            error && <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Error
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Aborted</Modal.Body>
      </Modal>
        }
            <div className="login">
                <form>
                    {
                        form ? 
                    <div>
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

                        <input onClick={handleSignIn} className="loginBtn" type="submit" value="Log In" />
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

                        <input className="loginBtn" type="submit" onClick={handleSubmit} value="Sign Up" />
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