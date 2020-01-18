import React, { useState } from 'react'

function ArrayHook() {
    const [items, setItems] = useState([])

    const addItems = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
        <div className='main-div'>
            <button onClick={addItems}>New Number</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default ArrayHook