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


    componentDidMount = () => {
        this.setState({
            items: this.state.items.map((item, index) => <div key={index}><li >{item}</li><button name={index} onClick={this.removeItem}>Remove</button></div>)
        })
    }

    handleInput = (event) => {
        const value = event.target.value

        this.setState({
            input: value
        })
    }

    addTodo = () => {
        this.state.items.push(<div><li>{this.state.input}</li><button onClick={this.removeItem}>Remove</button></div>)
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