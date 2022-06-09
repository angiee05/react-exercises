// import ReactDOM from "react-dom"
// import { App } from "./App"
import "./index.css" 
import { store, todosState } from "./state/TodosReducer"

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(todosState.actions.add({ id: 1, title: 'work', completed: true}))
store.dispatch(todosState.actions.add({ id: 2, title: 'study', completed: false}))
store.dispatch(todosState.actions.edit({ id: 1, data: { completed: false}}))
store.dispatch(todosState.actions.remove( 1 ))
//import { HelloWorld } from "./HelloWorld"

//const HelloWorldComponent = <HelloWorld />
// const AppComponent = <App />
// const root = document.querySelector("#root")

// ReactDOM.render(AppComponent, root)