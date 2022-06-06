import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Counter from './Counter'
import ShowGithubUser from './ShowGithubUser'
import Welcome from './Welcome'

export default function App() {
    return (
        <div>
            <div>
                <Link to='/'>Go to welcome page</Link> | <Link to='/counter'>Go to counter page</Link> | <Link to='users/:username'>Go to GithubUser page</Link>
            </div>
            <Routes>
                <Route path='/' element={<Welcome name="John" age="20" />} />
                <Route path='/counter' element={<Counter />} />
                <Route path='users/:username' element={<ShowGithubUser />} />
            </Routes>
        </div>
    )
}
