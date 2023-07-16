import "./App.css";
import TodoItem from "../../components/ToDoItem/TodoItem";
import TodoCounter from "../../components/ToDoCounter/TodoCounter";
import TodoList from "../../components/ToDoList/TodoList";
import CreateToDoItem from "../../components/CreateToDoItem/CreateToDoItem";
import TodoSearch from "../../components/ToDoSearch/TodoSearch";
import { TaskError } from "../../components/TaskError/TaskError";
import { TaskLoading } from "../../components/TaskLoading/TaskLoading";
import { TaskContext } from "../../context/TaskContext";
import { Modal } from "../../modals/modal";
import React from "react";
import { TaskForm } from "../../components/TaskForm";

function AppUI() {
  return (
    <>
      <TaskContext.Consumer>
        {({
          error,
          loading,
          allTodosCompleted,
          deleteTask,
          searchedTodos,
          completeTodo,
          openModal,
          setOpenModal
        }) => (
          <>
            <h1>
              {allTodosCompleted()
                ? "Congrats you have completed all your tasks!!!"
                :  `Task Manager` }
            </h1>
            {allTodosCompleted() ? "" : !loading ? <TodoCounter/> : null}
            <TodoSearch/>
            <TodoList>
              {loading ? <TaskLoading /> : error ? <TaskError /> : null}
              {searchedTodos.map((task) => (
                <TodoItem
                  onComplete={() => completeTodo(task.text)}
                  onDelete={() => deleteTask(task.text)}
                  key={task.text}
                  text={task.text}
                  completed={task.completed}
                />
              ))}
            </TodoList>
              <CreateToDoItem setOpenModal = {setOpenModal}/>
              {openModal && (
                <Modal>
                  <TaskForm/>
                </Modal>
              )}
          </>
        )}
      </TaskContext.Consumer>
    </>
  );
}

export default AppUI;
