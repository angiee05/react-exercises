import React from 'react'
import { Age } from "./Age";

export default function Welcome(props) {
    return (
        <div className="welcome">
            <p>Welcome, {props.name}!</p>
            {(props.age > 18 && props.age < 65 && props.name === "John") && <Age age={props.age} />}
        </div>
    )
}
