import React from "react";

export class Counter extends React.Component {
    state = {
        count: this.props.initialValue
    }
    
    constructor(props) {
        super(props)

        setInterval(() => {
            this.setState({
                count: this.state.count + this.props.incrementAmount            
            })
        }, this.props.interval)
    }
    render () {
        return <h1>{this.state.count}</h1>
    }
}