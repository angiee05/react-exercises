// import ReactDOM from "react-dom"
// import { App } from "./App"
import { combineReducers, createStore } from "redux"
import "./index.css" 
import { counterReducer, decrementCounter, incrementCounter, resetCounter } from "./state/CounterReducer"
import { todosState } from "./state/TodosReducer"

const rootReducer = combineReducers({
    counter: counterReducer,
    todo: todosState.reducer
})

const store = createStore(rootReducer)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(todosState.actions.add({ id: 1, title: 'work', completed: true}))
store.dispatch(incrementCounter(2))
store.dispatch(todosState.actions.add({ id: 2, title: 'study', completed: false}))
store.dispatch(todosState.actions.edit({ id: 1, data: { completed: false}}))
store.dispatch(decrementCounter(5))
store.dispatch(todosState.actions.remove( 1 ))
store.dispatch(resetCounter())
//import { HelloWorld } from "./HelloWorld"

//const HelloWorldComponent = <HelloWorld />
// const AppComponent = <App />
// const root = document.querySelector("#root")

// ReactDOM.render(AppComponent, root)