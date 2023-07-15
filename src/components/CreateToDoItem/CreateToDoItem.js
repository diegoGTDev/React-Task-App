import React from 'react'
import './CreateToDoItem.css'
export default function CreateToDoItem({onCreate,newTaskValue, setTaskValue}) {

  const showNewTodo = () => {
    const element = document.querySelector('.todo-new-container');
    element.classList.toggle('todo-new-container--active');
  }
  
  return (
    <>
    <div className='todo-new-container'>
      <div className='todo-new-container-title'>
        <h1>New task</h1>
      </div>
      <div className='todo-new-container-content'>
        <input onChange= {event => {setTaskValue(event.target.value);}} value={newTaskValue} className='todo-input' placeholder="What do you wanna do?"></input>
        <button type="button" onClick={onCreate} className='todo-create_button'>Create</button>
      </div>
    </div>
    <div className='todo-button-container'>
      <button type="button" onClick={showNewTodo} className='todo-button'>New</button>
    </div>
    </>
  )
}
