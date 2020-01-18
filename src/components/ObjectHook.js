import React, { useState } from 'react'

function CounterObject() {
    const [name, setName] = useState({ firstName: '', lastName: '' }
    )
    return (
        <div className='main-div'>
            <input type='text'
                value={name.firstName}
                onChange={e => setName({ ...name, firstName: e.target.value })}>
            </input>
            <input type='text'
                value={name.lastName}
                onChange={e => setName({ ...name, lastName: e.target.value })}>
            </input>
            <h2>First Name : {name.firstName} </h2>
            <h2>Last Name : {name.lastName} </h2>
        </div>
    )
}

export default CounterObject;