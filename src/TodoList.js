import React from "react";

export class TodoList extends React.Component {
    state = {
        items: ['sleep', 'work', 'study'],
        input: ''
    }

    componentDidMount = () => {
        this.setState({
            items: this.state.items.map((item) => <li>{item}</li>)
        })
    }

    handleInput = (event) => {
        const value = event.target.value

        this.setState({
            input: value
        })
    }

    addTodo = () => {
        this.state.items.push(this.state.input)
        this.setState({
            items: this.state.items.map((item) => <li>{item}</li>),
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
                    <ul>{this.state.items}</ul>
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