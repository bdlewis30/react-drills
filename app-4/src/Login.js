import React, { Component } from 'react';

export default class Login extends Component {

    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }
        this.usernameInput = this.usernameInput.bind(this);
        this.passwordInput = this.passwordInput.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    usernameInput(value) {
        this.setState({
            username: value
        })
    }

    passwordInput(value) {
        this.setState({
            password: value
        })
    }

    handleLogin() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render() {
        return (
            <div>
                <label for="username" >Username</label>
                <input id="username" onChange={(element) => this.usernameInput(element.target.value)} />
                <label for="password">Password</label>
                <input id="password" onChange={(element) => this.passwordInput(element.target.value)} />
                <button onClick={this.handleLogin}>Submit</button>
            </div>
        );
    }
}