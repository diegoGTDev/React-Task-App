import React from 'react'

function TaskError() {
  return (
    <div className='LoadingTask-container'>
        <span className='LoadingTask-completeIcon'></span>
        <p className='LoadingTask-text'></p>
        <span className='LoadingTask-deleteIcon'>
        </span>
    </div>
  )
}

export { TaskError }