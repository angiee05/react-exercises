import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Counter from './Counter'
import GithubUser from './GithubUser'
import GithubUserList from './GithubUserList'
import ShowGithubUser from './ShowGithubUser'
import Welcome from './Welcome'

export default function App() {
    return (
        <GithubUser username={"angiee05"} />
    )
}
