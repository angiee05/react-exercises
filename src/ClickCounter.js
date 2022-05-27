import React, { useState } from 'react'

export default function ClickCounter() {
    const [count, setCount] = useState(0)

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
