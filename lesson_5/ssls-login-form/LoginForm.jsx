import React from 'react';

const LoginForm = (props) => {
    return (
        <div className="ssls-LoginForm">
            <div className="ssls-LoginForm-head">
                <div className="ssls-LoginForm-header">
                    <h1>Login</h1>
                </div>
                <div className="ssls-LoginForm-inputs">
                    <input type="text" className="ssls-LoginForm-input" placeholder="User name"/>
                    <input type="password" className="ssls-LoginForm-input" placeholder="****"/>
                </div>
                <div className="ssls-LoginForm-remember">
                    <div>
                        <input type="checkbox"/>
                        <p>Remember Me</p>
                    </div>
                    <a href="#">Forgot Password?</a>
                </div>
                <div className="ssls-LoginForm-btnGroup">
                    <button type="button" className="ssls-LoginForm-btn">Log in</button>
                </div>
            </div>
            <div className="ssls-LoginForm-middle">
                <div className="ssls-LoginForm-header">
                    <h2>Login</h2>
                </div>
                <div className="ssls-LoginForm-header">
                    <p>With your social media account</p>
                </div>
                <div className="ssls-LoginForm-social">
                    <button type="button" className="ssls-btn-twitter">Twitter</button>
                    <button type="button" className="ssls-btn-facebook">Facebook</button>
                    <button type="button" className="ssls-btn-google">Google+</button>
                </div>
                <div className="ssls-LoginForm-border"/>
            </div>
            <div className="ssls-LoginForm-footer">
                <div className="ssls-LoginForm-text">
                    <p>Don't have an Account?
                        <span> Register Now!</span>
                    </p>
                </div>
                <div className="ssls-LoginForm-btnGroup">
                    <button type="button" className="ssls-LoginForm-btn">Register</button>
                </div>
            </div>
        </div>
    )
};

export default LoginForm;