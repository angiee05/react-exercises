import React from "react";

export class ClickTracker extends React.Component {
    state = {
        lastButton: this.props.initialValue
    }
   

    trackLastClick = (event) => {
        this.setState({
            lastButton: event.target.id
        })
        
    }
    
    render() {
        return (
            <div>
                <h1>The last button that was clicked: {this.state.lastButton}</h1>
                <button onClick={this.trackLastClick} id="1°Button">1°Button</button>
                <button onClick={this.trackLastClick} id="2°Button">2°Button</button>
                <button onClick={this.trackLastClick} id="3°Button">3°Button</button>
            </div>
        )
    }
}