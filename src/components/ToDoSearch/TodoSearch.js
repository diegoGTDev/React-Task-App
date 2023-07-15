import React from 'react'
import './ToDoSearch.component.css'
export default function TodoSearch({searchValue, setSearchValue}) {

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
