import './toDoItem.component.css'
import { CompleteIcon } from '../ToDoIcon/CompleteIcon'
import { DeleteIcon } from '../ToDoIcon/DeleteIcon';
export default function TodoItem(props){
    return (
      <li className={`TodoItem ${props.completed && "todo-item--completed"}`}>
        <CompleteIcon 
        completed={props.completed}
        onComplete={props.onComplete}
        />
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        <DeleteIcon 
        onDelete={props.onDelete}
        />
      </li>
    );
  }

