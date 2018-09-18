import React from 'react';

import './LoginForm.scss';

const LoginForm = (props) => {
    return (
        <div className="ssls-container">
            <div className="ssls-login-form">
                <div className="ssls-login-form-header">
                    <div className="ssls-center">
                        <h1>Login</h1>
                    </div>
                    <div className="ssls-column">
                        <input type="text" className="ssls-form-control ssls-name" placeholder="User name"/>
                        <input type="password" className="ssls-form-control ssls-password" placeholder="****"/>
                    </div>
                    <div className="ssls-remember ssls-between">
                        <div>
                            <input type="checkbox"/>
                            <p>Remember Me</p>
                        </div>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <div className="ssls-btn-group">
                        <button type="button" className="ssls-btn">
                            Log in
                        </button>
                    </div>
                </div>
                <div className="ssls-login-form-middle">
                    <div className="ssls-center">
                        <h2>Login</h2>
                    </div>
                    <div className="ssls-center">
                        <p>With your social media account</p>
                    </div>
                    <div className="ssls-social">
                        <button type="button" className="ssls-btn-twitter">Twitter</button>
                        <button type="button" className="ssls-btn-facebook">Facebook</button>
                        <button type="button" className="ssls-btn-google">Google+</button>
                    </div>
                    <div className="ssls-border"/>
                </div>
                <div className="ssls-login-form-footer">
                    <div className="ssls-center">
                        <p>Don't have an Account? <span>Register Now!</span></p>
                    </div>
                    <div className="ssls-btn-group">
                        <button type="button" className="ssls-btn">
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LoginForm;
