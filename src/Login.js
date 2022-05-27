import React, { useState } from 'react'

export default function Login() {
    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false
    })

    const handleLogin = (event) => {
        const value = event.target.value
        const name = event.target.name
        const type = event.target.type
        const checked = event.target.checked

        setData((data) => {
            return{
                ...data,
                [name]: type === "checkbox" ? checked : value   
            }
        })
    }

    const handleReset = () => {
        setData({
            username: '',
            password: '',
            remember: false
        })
    }

    return (
        <div>
            <input onChange={handleLogin} name="username" value={data.username}></input>
            <input onChange={handleLogin} name="password" type="password" value={data.password}></input>
            <input onChange={handleLogin} name="remember" type="checkbox" checked={data.remember}></input>
            <button onClick={handleReset}>Reset</button>
            <button disabled={!(data.username && data.password)}>Login</button>
        </div>
    )
}


