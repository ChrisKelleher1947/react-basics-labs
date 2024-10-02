import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';

function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { title:"Dishes", description: "Scrub the plates", deadline: "Today" },
      { title: "Laundry", description: "Fold and hang up", deadline: "Tomorrow" },
      { title: "Tidy up", description:"Sweep and hoover", deadline: "Today" }
    ]
  });
  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task) => (              
    <Task 
      title={task.title}
      description={task.description}
      deadline={task.deadline}
    />
  ))} 
    </div>
  );
}

export default App;