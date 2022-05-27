import React from "react";
import { Container } from "./Container";
import { TodoList } from "./TodoList";
export class App extends React.Component {
    render () {
        return (
        <Container title="Title">
            <TodoList render={(items, removeItem) => {
                return items.map((item,index) => <div key={index}><li  >{item}</li><button onClick={removeItem.bind(this, index)} >Remove</button></div>)
                
            }}
            ></TodoList >            
        </Container>
    )}
}