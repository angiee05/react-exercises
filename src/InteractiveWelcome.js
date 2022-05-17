import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
    state = {
        name: ''
    }

    handleInputChange = (event) => {
        const value = event.target.value

        this.setState ({
            name: value
        })
    }

    render () {
        return (
        <div>
            <input onChange={this.handleInputChange} name="name" value={this.state.name}></input>
            <Welcome name={this.state.name}/>
        </div>
    )}
}