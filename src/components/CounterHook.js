import React, { useState } from 'react'

function CounterHook() {
    const initialCount = 0
    const [count, setCounter] = useState(initialCount)

    return (
        <div className='main-div'>
            Count : {count}
            <button onClick={() => setCounter(initialCount)}>Reset</button>
            <button onClick={() => setCounter(prevCount => prevCount + 1)}>Increament</button>
            <button onClick={() => setCounter(prevCount => prevCount - 1)}>Decreament</button>
        </div>
    )
}

export default CounterHook;