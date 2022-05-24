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
        this.state.items.push(<li>{this.state.input}</li>)
        this.setState({
            input: ''
        })
    }

    render() {
        return (
            <div>
                <div>
                    <ul>{this.state.items.map((item,index) => <div key={index}><li  >{item}</li><button onClick={this.removeItem.bind(this, index)} >Remove</button></div>)}</ul>
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