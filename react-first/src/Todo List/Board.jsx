import React from 'react'
import uuid from 'react-uuid';


const Board = ({ task }) => {
    const deleteTask = (e) => {
        e.target.parentElement.remove()
    }

    return (
        <ol className='ol-list'>
            {task.map((task) => (
                <li key={uuid()}>{task} <button className='delete-btn' onClick={deleteTask}>delete</button></li>
            ))}
        </ol>
    )
}

export default Board