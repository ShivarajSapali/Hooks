import React, { useState, useEffect } from 'react'

function UseEffectHook() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })
    return (
        <div className='main-div'>
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

export default UseEffectHook;