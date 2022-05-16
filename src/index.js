import ReactDOM from "react-dom"
import { App } from "./App"
//import { HelloWorld } from "./HelloWorld"

//const HelloWorldComponent = <HelloWorld />
const AppComponent = <App />
const root = document.querySelector("#root")

ReactDOM.render(AppComponent, root)