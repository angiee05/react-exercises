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

    handleClickLogin = () => {
        this.props.onLogin(this.state);
      };
    
    render () {
        return (
            <div>
                {this.onLogin}
                <input onChange={this.handleLogin} name="username" value={this.state.username}></input>
                <input onChange={this.handleLogin} name="password" type="password" value={this.state.password}></input>
                <input onChange={this.handleLogin} name="remember" type="checkbox" checked={this.state.remember}></input>
                <button onClick={this.handleClickLogin} disabled={!(this.state.username && this.state.password)}>Login</button>
            </div>        
        )
    }
}