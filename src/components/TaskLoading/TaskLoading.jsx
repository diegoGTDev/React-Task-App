import React from 'react'
import './TaskLoading.css'
function TaskLoading() {
  return (
    <div className='LoadingTask-container'>
    <span className='LoadingTask-completeIcon'></span>
    <p className='LoadingTask-text'></p>
    <span className='LoadingTask-deleteIcon'>
    </span>
    </div>
  )
}

export { TaskLoading }