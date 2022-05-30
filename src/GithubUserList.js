import React, { useState } from 'react'
import GithubUser from './GithubUser'

export default function GithubUserList () {
    const [input, setInput] = useState('')
    const [usernames, setUsernames] = useState([])

    const handleInput = (event) => {
        const value = event.target.value

        setInput(value)
    }

    const addUsernames = () => {
        
        setUsernames([...usernames, input])
    }


    return (
        <div>
            <input onChange={handleInput} value={input}></input>
            <button onClick={addUsernames}>Aggiungi</button>
            <ul>{usernames.map((name,index) => <GithubUser key={index} username={name} /> )}</ul>
        </div>
    )
}
