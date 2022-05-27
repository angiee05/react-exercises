import React from 'react'
import { LanguageContext } from './LanguageContext'

const Strings = {
    en:{
        sayHi: "Hi"
    },
    it:{
        sayHi: "Ciao"
    }
}

export class DisplayLanguage extends React.Component {
    render() {
        return (
            <div>
                <LanguageContext.Consumer>
                    { Language => Strings[Language].sayHi}                      
                </LanguageContext.Consumer>
            </div>
        )
    }
}
