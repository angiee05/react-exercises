import React, { useEffect, useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
    const [intervalAmount, setIntervalAmount] = useState(1000)

    useEffect(() => {
        setIntervalAmount((a) => count ? a===1000 : a===0 )
        setInterval(() => {
            setCount(count+1)
        }, {intervalAmount})
    }, [count,intervalAmount])


    return (
        <div>{count}</div>
    )
}
