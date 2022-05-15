import React from "react";

export class Welcome extends React.Component {
    render () {
        return (
            <div>
                <p>Welcome, {this.props.name}!</p>
                <Age age={20} />
            </div>
            )
    }
}

Welcome.defaultProps = {
    name: "John"
} 