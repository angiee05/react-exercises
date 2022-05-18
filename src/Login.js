import React from "react";

export class Login extends React.Component {
    state = {
        username: '',
        password: '',
        remember: false,
        disabled: true
    }

    handleLogin = (event) => {
        const value = event.target.value
        const name = event.target.name
        const type = event.target.type
        const checked = event.target.checked

        this.setState ({
            [name]: type === "checkbox" ? checked : value
        })
    }

    onLogin = () => {

        this.setState ({
            disabled: (this.state.username.length <1 && this.state.password.length<1)  ? true : false
        })
    }

    render () {
        return (
            <div>
                {this.onLogin}
                <input onChange={this.handleLogin} name="username" value={this.state.username}></input>
                <input onChange={this.handleLogin} name="password" type="password" value={this.state.password}></input>
                <input onChange={this.handleLogin} name="remember" type="checkbox" checked={this.state.remember}></input>
                <button onLoad={this.onLogin} disabled={this.state.disabled}>Login</button>
            </div>        
        )
    }
}