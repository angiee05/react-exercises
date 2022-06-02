import React, { useState } from 'react'

function useLogin() {
    const [data, setData] = useState({
        username: '',
        password: '',
    })

    const handleLogin = (event) => {
        const value = event.target.value
        const name = event.target.name

        setData((data) => {
            return {
                ...data,
                [name]: value
            }
        })
    }

    return {
        data: data,
        onLogin: handleLogin
    }
}

export default function Login() {
    const { data, onLogin } = useLogin({
        username: '',
        password: '',
    })




    // const handleReset = () => {
    //     setData({
    //         username: '',
    //         password: '',
    //         remember: false
    //     })
    // }

    return (
        <div>
            <input onChange={onLogin} name="username" value={data.username}></input>
            <input onChange={onLogin} name="password" type="password" value={data.password}></input>
            {/* <input onChange={handleLogin} name="remember" type="checkbox" checked={data.remember}></input> */}
            {/* <button onClick={handleReset}>Reset</button>
            <button disabled={!(data.username && data.password)}>Login</button> */}
        </div>
    )
}


