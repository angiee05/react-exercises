import React from "react";

export class TodoList extends React.Component {
    state = {
        items: ['sleep', 'work', 'study'],
    }

    handleInput = (event) => {
        event.preventDefault()

        const input = event.target.elements.input.value

        this.setState({
            items: [...(this.state.items), input]
        })
    }


    render() {
        return (
            <div>
                <div>
                    <ul>{this.state.items.map((item, index) => <li key={index}>{item}</li>)}</ul>
                </div>
                <div>
                    <p>Inserisci un nuovo todo alla lista:</p>
                    <form onSubmit={this.handleInput}>
                        <input name="input" ></input>
                        <button >Aggiungi</button>
                    </form>
                </div>
            </div>
        )
    }
}