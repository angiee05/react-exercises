import React from "react";
import FilteredList from "./FilteredList";
export class App extends React.Component {

    render() {
        return (
            <div>
                <FilteredList name1="jimmy" age1={25} id1={1} name2="john" age2={11} id2={2} name3="billy" age3={30} id3={3}/>                               
            </div>
        )
    }
}