import React, {Component} from 'react';

import './App.scss';
// import LoginForm from '../components/LoginForm';

export default class App extends Component {
    render() {
        return(
            <div className="ssls-app">
                <header className="ssls-header"/>
                <div className="ssls-content">
                    {/*<LoginForm/>*/}
                </div>
                <footer className="ssls-footer"/>
            </div>
        )
    }
}
