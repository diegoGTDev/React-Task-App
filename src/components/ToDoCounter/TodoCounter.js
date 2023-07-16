import React from "react"
import {TaskContext} from '../../context/TaskContext'
export default function TodoCounter(props) {
  const {completedTodos, totalTodos} = React.useContext(TaskContext);
  return (
    <h1>
      {
        totalTodos === 0 ? `Create a new Task` : `You has completed ${completedTodos} of ${totalTodos} tasks`
      }
    </h1>
  )
}
