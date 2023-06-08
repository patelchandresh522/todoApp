import './App.css';
import { useState } from 'react';
import { Task } from './Task';

function App(){
  const [newTask, setNewTask] = useState('');
  const [todoList, setTdodList] = useState([]);

  const manageChange = event => {
    setNewTask(event.target.value);
  }
  const addTask = () => {
    const task = {
      taskName: newTask,
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      completed: false,
    }
    setTdodList([...todoList, task])
  }

  const completeTask = (id) => {
    setTdodList(todoList.map(work => {
      if(work.id === id){
        return {...work, completed:true}
      }else{
        return work;
      }
    }))
  }

  const deleteTask = id => {
    setTdodList(todoList.filter(work => work.id !== id))
  }

  return (
    <div className = 'App'>
      <div className='addTask'>
        <h1 id='ptodo'>TO-DO LIST</h1>
        <div>
        <input placeholder='Add your Task......' onChange={manageChange} value={newTask} type='text'/>
        <button id='badd' onClick={addTask}>Add Task</button>
        </div>
      </div>  
      <p id='listp'>List of Works</p>
    <div className='list'>
      {todoList.map((task) => {
        return( <Task taskName = {task.taskName}
                     id = {task.id}
                     completed = {task.completed}
                     deleteTask = {deleteTask}
                     completeTask = {completeTask}/>
                     
        )
                    })}
    </div>
  </div>

  );
}


export default App;
