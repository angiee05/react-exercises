import React from "react";
import { Counter } from "./Counter";
import { HelloWorld } from "./HelloWorld";
import { Welcome } from "./Welcome";

export class App extends React.Component {
    render () {
        return (
        <div>
            <HelloWorld />
            <Welcome name={<strong>Will</strong>} age={20} />
            <Counter />
        </div>
    )}
}