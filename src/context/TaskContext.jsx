import React from 'react'
import { useLocalStore } from '../hooks/useLocalStorage';
const TaskContext = React.createContext();

function TaskProvider({children}) {
    const [searchValue, setSearchValue] = React.useState('');
    const [newTaskValue, setTaskValue] = React.useState('');
    const {item: tasks, saveItems: saveTasks, loading, error} = useLocalStore('TASKS_V1', []);
    const completedTodos = tasks.filter(task => task.completed).length;
    const totalTodos = tasks.length;
    const searchedTodos = tasks.filter(task => task.text.toLowerCase().includes(searchValue.toLowerCase()));
    const [openModal, setOpenModal ] = React.useState(false);
    const completeTodo = (text) =>{
      const newTodos = [...tasks];
      const todoIndex = newTodos.findIndex(task => task.text === text);
      newTodos[todoIndex].completed = true;
      saveTasks(newTodos)
    }
   const allTodosCompleted = () => {
  if (tasks.length === 0) {
    return false;
  } else {
    return tasks.every(task => task.completed);
  } 
};
    const deleteTask = (text) =>{
      const newTodos = [...tasks];
      const todoIndex = newTodos.findIndex(task => task.text === text);
      newTodos.splice(todoIndex, 1);
      saveTasks(newTodos);
    
    }
  
    const createTask = (text) =>{
      const newTodos = [...tasks];
      console.log(text)
      if (text !== "" && text !== null && text !== undefined){
        newTodos.push({
          text: text,
          completed: false
        });
        saveTasks(newTodos);
      }
      setTaskValue('');
  
    }
    return (
        <>
        <TaskContext.Provider 
        value={{
            allTodosCompleted,
  searchValue,
  setSearchValue,
  newTaskValue,
  setTaskValue,
  completedTodos,
  totalTodos,
  searchedTodos,
  completeTodo,
  deleteTask,
  createTask,
  loading,
  error,
  openModal,
  setOpenModal,
        }}>
            {children}
        </TaskContext.Provider>
        </>
    )
 
}
export { TaskContext, TaskProvider}

