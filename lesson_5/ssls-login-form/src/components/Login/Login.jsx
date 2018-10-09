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
      loginValid: null,
      passwordValid: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this.remember = this.remember.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  validateLogin(e) {
    this.handleChange(e);
    let value = e.target.value.trim();
    if (e.target.name === "login" && value.length > 2) {
      this.setState({
        loginValid: true
      });
    } else if (e.target.name === "login" && value.length > 0) {
      this.setState({
        loginValid: false
      });
    } else {
      this.setState({
        loginValid: null
      });
    }
  }

  validatePassword(e) {
    this.handleChange(e);
    let value = e.target.value.trim();
    if (e.target.name === "password" && value.length > 5) {
      this.setState({
        passwordValid: true
      });
    } else if (e.target.name === "password" && value.length > 0) {
      this.setState({
        passwordValid: false
      });
    } else {
      this.setState({
        passwordValid: null
      });
    }
  }

  remember() {
    this.setState({
      remember: !this.state.remember
    });
  }

  render() {
    const { login, password, loginValid, passwordValid } = this.state;
    return (
      <div className="ssls-login-wrapper">
        <form onSubmit={this.formSubmit} className="ssls-login-form-head">
          <div className="ssls-login-form-header">
            <h1>Login</h1>
          </div>
          <LoginInput
            onChange={this.validateLogin}
            login={login}
            isValid={loginValid}
          />
          <PasswordInput
            onChange={this.validatePassword}
            password={password}
            isValid={passwordValid}
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
              type="submit"
              className="ssls-login-form-btn"
              disabled={!(loginValid && passwordValid)}
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    );
  }
}
