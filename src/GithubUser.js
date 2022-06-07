import React from 'react'
import { useGithubUser } from './useGithubUser'

export default function GithubUser({username}) {
    const { data, onRefetch} = useGithubUser(username)

    return (
        <div>
            <div>{data && data.name}</div>
            <button onClick={onRefetch}>Refetch</button>
        </div>
    )
}