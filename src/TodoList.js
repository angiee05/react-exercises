import React from "react";

export class TodoList extends React.Component {
    state = {
        items: ['sleep', 'work', 'study'],
        input: ''
    }

    removeItem = (event) => {
        const index = event.target.name
        this.setState({
            items: this.state.items.splice(index, 1)
        })
    }

    handleInput = (event) => {
        const value = event.target.value

        this.setState({
            input: value
        })
    }

    addTodo = () => {
        this.setState({
            input: ''
        })
    }

    resetTodoList = () => {
        this.setState({
            items: []
        })
    }

    render() {
        return (
            <div>
                <div>
                    <ul>{this.state.items.map((item) => <li >{item}</li>)}</ul>
                </div>
                <div>
                    <p>Inserisci un nuovo todo alla lista:</p>
                    <input onChange={this.handleInput} value={this.state.input}></input>
                    <button onClick={this.addTodo}>Aggiungi</button>
                    <button onClick={this.resetTodoList}>Reset</button>
                </div>
            </div>
        )
    }
}