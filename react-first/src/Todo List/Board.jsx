import React from 'react'
import uuid from 'react-uuid';


const Board = ({ task }) => {
    const deleteTask = (e) => {
        e.target.parentElement.remove()
    }

    return (
        <ol>
            {task.map((task) => (
                <li key={uuid()}>{task} <button onClick={deleteTask}>delete</button></li>
            ))}
        </ol>
    )
}

export default Board