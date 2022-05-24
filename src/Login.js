import React from "react";

export class Login extends React.Component {
    state = {
        username: '',
        password: '',
        remember: false
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

    handleReset = () => {
        this.setState ({
            username: '',
            password: '',
            remember: false
        })
    }

    handleClickLogin = () => {
        this.props.onLogin(this.state);
      };
    
    render () {
        const LoginStyle = {
            background: this.state.password.length < 8 ? 'red' : 'green'
        }

        return (
            <div>
                {this.onLogin}
                <input onChange={this.handleLogin} name="username" value={this.state.username}></input>
                <input onChange={this.handleLogin} name="password" type="password" value={this.state.password}></input>
                <input onChange={this.handleLogin} name="remember" type="checkbox" checked={this.state.remember}></input>
                <button style={LoginStyle} onClick={this.handleReset}>Reset</button>
                <button onClick={this.handleClickLogin} disabled={!(this.state.username && this.state.password)}>Login</button>
            </div>        
        )
    }
}