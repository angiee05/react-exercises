import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Counter from './Counter'
import GithubUserList from './GithubUserList'
import ShowGithubUser from './ShowGithubUser'
import Welcome from './Welcome'

export default function App() {
    return (
        <div>
            <div>
                <Link to='/'>Go to welcome page</Link> | <Link to='/counter'>Go to counter page</Link>
            </div>
            <Routes>
                <Route path='/' element={<Welcome name="John" age="20" />} />
                <Route path='/counter' element={<Counter />} />    
                <Route path='*' element={<h2>Not found</h2>} />
                <Route path='users' element={<GithubUserList />} >
                    <Route path=':username' element={<ShowGithubUser />} />
                </Route>
            </Routes>
        </div>
    )
}
