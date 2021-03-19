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
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                <label class="form-check-label" for="defaultCheck1">
                                    Default checkbox
                                </label>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;