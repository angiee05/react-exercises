import React from "react";
import { decrementCounter, incrementCounter, resetCounter, store } from "./state/CounterReducer";

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCounter())
store.dispatch(decrementCounter())
store.dispatch(resetCounter())
export class App extends React.Component {


    render() {
        return (<div></div>  )
    }
}