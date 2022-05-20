import React from "react";
import { HelloWorld } from "./HelloWorld";
import { Welcome } from "./Welcome";

export class App extends React.Component {
    render () {
        return (
        <div>
            <HelloWorld />
            <Welcome name="John" age={20}/>
        </div>
    )}
}