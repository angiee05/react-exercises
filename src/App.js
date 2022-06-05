import React from "react";
import DisplayLanguage from "./DisplayLanguage";
import {LanguageContext} from "./LanguageContext"
export class App extends React.Component {
    state = {
        language: "en"
    }

    handleChangeLanguage = (event) => {
        this.setState({
            language: event.target.value
        })
    }

    render() {
        return (
            <div>
                <select onChange={this.handleChangeLanguage} value={this.state.language}>
                    <option value="en">english</option>
                    <option value="it">italiano</option>
                </select>
                <LanguageContext.Provider value={this.state.language}>
                    <DisplayLanguage />
                </LanguageContext.Provider>
            </div>
        )
    }
}