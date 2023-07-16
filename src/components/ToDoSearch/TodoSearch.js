import React from 'react'
import './ToDoSearch.component.css'
import { TaskContext } from '../../context/TaskContext';
export default function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TaskContext);
  return (
    <div className='todo-search-container'>
      <div>
        <input 
        className='todo-search-input' 
        placeholder="Cut onions"
        value={searchValue}
        onChange={event =>{
          setSearchValue(event.target.value);
          console.log("You write on the todoSearch: ", searchValue);
        }}
        ></input>
      </div>
    </div>
  )
}
