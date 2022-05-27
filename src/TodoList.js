import React from "react";

export class TodoList extends React.Component {
    state = {
        items: ['sleep', 'work', 'study'],
        input: ''
    }

    removeItem = (index) => {
        this.setState({
            items: this.state.items.filter((item, i) => i !== index )
        });
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
                    <ul>{this.props.render(this.state.items, this.removeItem)}</ul>
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