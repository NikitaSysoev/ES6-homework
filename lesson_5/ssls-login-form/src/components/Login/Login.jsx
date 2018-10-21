import React, { Component } from "react";

require("babel-core/register");
require("babel-polyfill");

import "./Login.scss";
import TextInput from "../TextInput";

const createLengthValidator = length => value => value.length > length;
const loginValidator = createLengthValidator(5);
const passwordValidator = createLengthValidator(6);

const textLoginError = 'Введеный вами логин нет в нашей базе данных';
const textPasswordError = 'Введеный вами пароль не соответвует вашемум логину';

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
    const { login, password, remember } = this.state;
    // fetch("https://putsreq.com/bdgKyqGFJUoskYOjxRt4", {
    //   method: "POST",
    //   headers: {
    //     Accept: "multipart/form-data",
    //     "Content-Type": "multipart/form-data"
    //   },
    //   body: JSON.stringify({
    //     login,
    //     password,
    //     remember
    //   }).replace(/{|}/gi, "")
    // });

    // const loginRequestMock = async login => {
    //   let loginError = (await login) === "NikitaSysoev" ? false : true;
    //   return loginError;
    // };

    const loginError = login === 'NikitaSysoev' ? false : true;
    const passwordError = !loginError && password === '12345678' ? false : true;

    this.setState({
      loginError,
      passwordError
    })

    console.log(this.state);
  };

  handleLoginChange = e => {
    let login = e.target.value.trim();
    this.setState({
      login,
      loginValid: loginValidator(login)
    });
  };

  handlePasswordChange = e => {
    let password = e.target.value.trim();
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
    const { login, password, loginValid, passwordValid, loginError, passwordError } = this.state;
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
            error = {loginError}
            textError = {textLoginError}
          />
          <TextInput
            onChange={this.handlePasswordChange}
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            isValid={passwordValid}
            textError = {textPasswordError}
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
