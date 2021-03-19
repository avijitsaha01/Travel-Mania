import React from 'react';
import './Login.css'
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
                            <div class="form-check float-left">
                                <input class="form-check-input" type="checkbox" value="" />
                                <label class="form-check-label" for="defaultCheck1">
                                     Remember Me
                                </label>
                            </div>
                        </div>
                        <div>
                            <h5>Forgot Password</h5>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;