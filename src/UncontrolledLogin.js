import React from "react";

export class UncontrolledLogin extends React.Component {
    handleSubmitForm = (event) => {
        event.prevenDefault()

        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked

        console.log(username, password, remember)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmitForm}>
                    <input name="username"></input>
                    <input name="password" type="password"></input>
                    <input name="remember" type="checkbox"></input>
                    <button type="submit">Login</button>
                    <button type="reset">Reset</button>
                </form>
            </div>
        )
    }
}