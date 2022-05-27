import React from 'react'
import { LanguageContext } from './LanguageContext'

export class DisplayLanguage extends React.Component {
    render() {
        return (
            <div>
                <LanguageContext.Consumer>
                    { Language => <h1>{Language}</h1>}                      
                </LanguageContext.Consumer>
            </div>
        )
    }
}
