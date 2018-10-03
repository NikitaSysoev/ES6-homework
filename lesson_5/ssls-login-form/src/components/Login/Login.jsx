import React, { Component } from "react";

import "./Login.scss";
import LoginInput from "../LoginInput";
import PasswordInput from "../PasswordInput";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      remember: false,
      isLoginCorrect: null,
      isPasswordCorrect: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
    this.remember = this.remember.bind(this);
  }

  login() {
    const { login, password } = this.state;
    this.setState({
      isLoginCorrect: login.trim() ? true : false,
      isPasswordCorrect: password.trim() ? true : false,
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  remember() {
    this.setState({
      remember: !this.state.remember
    });
  }

  render() {
    const { login, password, isLoginCorrect, isPasswordCorrect } = this.state;
    return (
      <div className="ssls-login-wrapper">
        <div className="ssls-login-form-head">
          <div className="ssls-login-form-header">
            <h1>Login</h1>
          </div>
          <LoginInput
            handleChange={this.handleChange}
            login={login}
            isValid={isLoginCorrect}
          />
          <PasswordInput
            handleChange={this.handleChange}
            password={password}
            isValid={isPasswordCorrect}
          />
          <div className="ssls-login-form-remember">
            <div>
              <input type="checkbox" onChange={this.remember} />
              <p>Remember Me</p>
            </div>
            <a href="#">Forgot Password?</a>
          </div>
          <div className="ssls-login-form-btnGroup">
            <button
              type="button"
              className="ssls-login-form-btn"
              onClick={this.login}
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    );
  }
}