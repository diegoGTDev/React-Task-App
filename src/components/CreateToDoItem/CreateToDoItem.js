import React from 'react'
import './CreateToDoItem.css'

export default function CreateToDoItem({setOpenModal}) {

  return (
    <>
        <button type="button" onClick={() => setOpenModal(state => !state)} className='task-button'><span className='fas fa-plus'></span></button>
    </>
  )
}
