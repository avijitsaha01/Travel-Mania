import React from 'react';
import './Login.css'
import gLogo from '../../assets/images/google.png'
const Login = () => {
    return (
        <div className="container wrap">
            <div className="login">
                <form>
                    <p>Login</p>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <div className="option">
                        <div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                        </div>
                        <div>
                            <a href="/"><h5>Forgot Password</h5></a>
                        </div>
                    </div>
                    <input className="loginBtn" type="submit" value="Log In"/>
                    <span className="crtMsz">Don't have an account? <a href="/">Create an Account</a></span>
                </form>
                
                
            </div>
            <p className="or-style">Or</p>
            <button className="googleBtn"><img src={gLogo} alt=""/>Continue with Google</button>
        </div>
    );
};

export default Login;