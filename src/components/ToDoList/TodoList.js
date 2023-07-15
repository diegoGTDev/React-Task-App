import './toDoList.component.css'
export default function TodoList(props) {
  return (
    <div className='todo-list-container'>
      <div className='todo-list-content'>
      <ul className='todo-list'>
          {props.children}
      </ul>
      </div>
    </div>
  )
}
