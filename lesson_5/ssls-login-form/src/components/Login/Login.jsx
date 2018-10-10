import React, { Component } from "react";

import "./Login.scss";
import TextInput from "../TextInput";

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
    this.formSubmit = this.formSubmit.bind(this);
    this.remember = this.remember.bind(this);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  handleLoginChange(e) {
    let login = e.target.value.trim();
    this.setState({
      login,
      loginValid: this.validateLength(login, 5)
    });
  }

  handlePasswordChange(e) {
    let password = e.target.value.trim();
    this.setState({
      password,
      passwordValid: this.validateLength(password, 6)
    });
  }

  validateLength(value, length) {
    return value.length > length;
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
          <TextInput
            onChange={this.handleLoginChange}
            type="text"
            placeholder="User Name"
            name="login"
            value={login}
            isValid={loginValid}
          />
          <TextInput
            onChange={this.handlePasswordChange}
            type="password"
            placeholder="Password"
            name="password"
            value={password}
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
