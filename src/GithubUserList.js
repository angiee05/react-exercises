import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import GithubUser from './GithubUser'
import ShowGithubUser from './ShowGithubUser'

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
            <ul>{usernames.map((name,index) => <div><Link key={index} to={`/users/${name}`}>{name}</Link></div> )}</ul>
            <Outlet />
        </div>
    )
}
