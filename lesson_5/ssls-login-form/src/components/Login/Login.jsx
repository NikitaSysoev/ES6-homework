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
      passwordValid: null,
      loginError: null,
      passwordError: null
    };
  }

  formSubmit = e => {
    e.preventDefault();
    const { login, password } = this.state;
    const {loginError, passwordError} = this.props;
    this.setState({
      loginError: loginError(login),
      passwordError: passwordError(password) || loginError(login)
    });
  };

  handleLoginChange = e => {
    let login = e.target.value.trim();
    const { loginValidator } = this.props;
    this.setState({
      login,
      loginValid: loginValidator(login)
    });
  };

  handlePasswordChange = e => {
    let password = e.target.value.trim();
    const { passwordValidator } = this.props;
    this.setState({
      password,
      passwordValid: passwordValidator(password)
    });
  };

  remember = () => {
    this.setState({
      remember: !this.state.remember
    });
  };

  render() {
    const {
      login,
      password,
      loginValid,
      passwordValid,
      loginError,
      passwordError
    } = this.state;
    const { textPasswordError, textLoginError } = this.props;
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
            error={loginError}
            textError={textLoginError}
          />
          <TextInput
            onChange={this.handlePasswordChange}
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            isValid={passwordValid}
            textError={textPasswordError}
            error={passwordError}
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
