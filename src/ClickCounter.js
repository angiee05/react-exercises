import React from "react";

export class ClickCounter extends React.Component {
    state = {
        counter: this.props.initialValue ?? 0
    }

    incrementCounter = (() => {
        this.setState({
            counter: this.state.counter + (this.props.incrementAmount ?? 1)            
        })
    })

    render () {
        return (
        <div>
            <h1>{this.state.counter}</h1>
            <button onClick={this.incrementCounter}>Increment</button>
        </div>
    )}
}