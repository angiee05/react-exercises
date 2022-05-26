import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { HelloWorld } from "./HelloWorld";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { TodoList } from "./TodoList";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";

export class App extends React.Component {
    render () {
        return (
        <Container>
            <HelloWorld />
            <Welcome name={<strong>Will</strong>} age={20} />
            <Counter />
            <ClickCounter />
            <ClickTracker />
            <InteractiveWelcome />
            <Login />
            <UncontrolledLogin />            
            <TodoList />            
        </Container>
    )}
}