import { LanguageContext } from './LanguageContext'
import React, { useContext } from 'react'

export default function DisplayLanguage() {
    const language = useContext(LanguageContext)

    return (
        <h1>{language}</h1>
    )
}

