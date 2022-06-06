import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Counter from './Counter'
import ShowGithubUser from './ShowGithubUser'
import Welcome from './Welcome'

export default function App() {
    return (
        <Routes>
            <Route path='/' element={<Welcome name="John" age="20" />} />
            <Route path='/counter' element={<Counter />} />
            <Route path='users/:username' element={<ShowGithubUser />} />
        </Routes>
    )
}
