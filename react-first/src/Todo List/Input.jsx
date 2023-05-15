import React, { useState } from 'react'

const Input = ({ task, setTask, increaseCount, setCount }) => {
    const [value, setValue] = useState('')


    const handleChange = (e) => {
        e.preventDefault()
        setValue(e.target.value)
        increaseCount()
    }

    const addToBoard = (e) => {
        if (value.trim() !== '') {
            e.preventDefault()
            setTask([...task, value])
            setCount(0)
            setValue('')
        }
    }


    return (
        <div className='input-todo-container'>
            <form onSubmit={addToBoard} action="">
                <input className='input-todo' onChange={handleChange} type="text" value={value} />
                <button className='add-btn'>Add</button>
            </form>
        </div>
    )
}

export default Input