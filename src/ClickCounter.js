import React, { useEffect, useState } from 'react'

export default function ClickCounter(props) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        props.onCounterChange(count)
    }, [count])

    const incrementCounter = (() => {
        setCount((c) => c + 1)
    })

    return (
        <div>
            <div>
                <h1>{count}</h1>
                <button onClick={incrementCounter}>Increment</button>
            </div>
        </div>
    )
}
