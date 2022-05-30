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
            <Counter initialValue={0} interval={1000} incrementAmount={1}/>
        </div>
    )}
}