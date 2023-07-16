import React from 'react'
import AppUI from '../../pages/App/AppUI'
import { TaskProvider } from '../../context/TaskContext';
export function App() {
   
  return (
    <TaskProvider>
        <AppUI/>
    </TaskProvider>
  )
}
