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
        this.state.items.push(<div><li>{this.state.input}</li><button>Remove</button></div>)
        this.setState({
            input: ''
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
                </div>
            </div>
        )
    }
}