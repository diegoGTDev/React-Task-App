import React from 'react'
import './taskForm.css'
import { TaskContext } from '../../context/TaskContext'
function TaskForm() {
  const [newTaskValue, setTaskValue] = React.useState('');
  const {createTask, setOpenModal} = React.useContext(TaskContext);
  return (
    <form onSubmit = {(event) => {
      createTask(newTaskValue)
      event.preventDefault()
      setOpenModal(false)
    }}>
        <label>Type a new task</label>
        <input
            onChange={(event) => setTaskValue(event.target.value)}
            value={newTaskValue}
            placeholder='Make a coffe'
            required
        ></input>
        <div className='form-controls'>
          <button className='form-button-add' type='submit'>Add</button>
          <button className='form-button-cancel' type='button' onClick={() => setOpenModal(false)}>Cancel</button>
        </div>
    </form>
  )
}

export { TaskForm }
