import React from 'react'
import './App.css';

export const Task = (props) => {
    return (
        <div className="task" style={{backgroundColor:props.completed ? "green" : "white"}}>
            <h1>{props.taskName}</h1>
            <div className='btns' >
            <button id="complete" onClick={() => props.completeTask(props.id)}>completed</button>
            <button id="delete" onClick={() => props.deleteTask(props.id)}>delete</button>
            </div>
        </div>
    )
}

