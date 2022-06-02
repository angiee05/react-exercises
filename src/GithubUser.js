import React from 'react'
import { useGithubUser } from './useGithubUser'

export default function GithubUser({ username }) {
    const { data, load, error } = useGithubUser(username)

    return (
        <div>
            {!error && load && <h1>Loading...</h1>}
            {error && <h1>Error</h1>}
            {!error && <h1>{data && data.name}</h1>}
        </div>


    )
}
