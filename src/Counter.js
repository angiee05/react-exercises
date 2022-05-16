import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
    state = {
        count: this.props.initialValue ?? 0
    }
    
    componentDidMount = (() => {  

        setInterval(() => {
            this.setState({
                count: this.state.count + (this.props.incrementAmount ?? 1)            
            })
        }, (this.props.interval ?? 1000))
    })
    
    render () {
        return <CounterDisplay count = {this.state.count} />
    }
}