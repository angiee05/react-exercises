import ReactDOM from "react-dom"
import { HelloWorld } from "./HelloWorld"

const HelloWorldComponent = <HelloWorld />
const root = document.querySelector("#root")

ReactDOM.render(HelloWorldComponent, root)