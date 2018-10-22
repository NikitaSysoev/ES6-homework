import React, { Component } from "react";

import "./App.scss";

import LoginForm from "ssls-login-form";
import "ssls-login-form/src/LoginForm.scss";
// import './custom.scss';

require("babel-core/register");
require("babel-polyfill");

const createLengthValidator = length => value => value.length > length;
const loginValidator = createLengthValidator(5);
const passwordValidator = createLengthValidator(6);

const textLoginError = "Введеный вами логин нет в нашей базе данных";
const textPasswordError = "Введеный вами пароль не соответвует вашему логину";

const createError = value => name => name !== value;
const loginError = createError("NikitaSysoev");
const passwordError = createError("12345678");


const formSubmit =() => {
  // fetch("https://putsreq.com/bdgKyqGFJUoskYOjxRt4", {
  //     method: "POST",
  //     headers: {
  //       Accept: "multipart/form-data",
  //       "Content-Type": "multipart/form-data"
  //     },
  //     body: JSON.stringify({
  //       login,
  //       password,
  //       remember
  //     }).replace(/{|}/gi, "")
    //   });

}

export default class App extends Component {
  render() {
    return (
      <div className="ssls-app">
        <header className="ssls-header" />
        <div className="ssls-content">
          <LoginForm
            textLoginError={textLoginError}
            textPasswordError={textPasswordError}
            loginValidator={loginValidator}
            passwordValidator={passwordValidator}
            loginError={loginError}
            passwordError={passwordError}
          />
        </div>
        <footer className="ssls-footer" />
      </div>
    );
  }
}
