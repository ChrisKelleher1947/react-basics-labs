import React from 'react';

const Task = (props) => {
    
    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
            <p className= "description">{props.description}</p>
            <p className= "priority" style={{
                backgroundColor: props.priority === "High" ? 'red' :props.priority === "Medium" ? 'orange' : 'green'}}>
                    {props.priority}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default Task;