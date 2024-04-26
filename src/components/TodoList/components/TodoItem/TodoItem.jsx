import React, {useState} from 'react';

import TodoOptions from '../TodoOptions/TodoOptions';

import TodoItemStyles from './TodoItem.module.css';
import { SlOptionsVertical } from "react-icons/sl";


const TodoItem = (props) => {
  const {todo, deleteTodo, checkTodo} = props;
  const [showOptions, setShowOptions] = useState(false);
  const handleShowOptions = (e) => {
    setShowOptions(!showOptions);
  }
  return (
    <div className={TodoItemStyles.todoItem}>
      <TodoOptions showOptions={showOptions} setShowOptions={setShowOptions} deleteTodo={deleteTodo} checkTodo={checkTodo} id={todo.id}/>
      {/* header */}
      <div className={`${TodoItemStyles.todoItem_header} ${todo.done && TodoItemStyles.todoItem_checked}`}>
        <span style={{
          fontWeight: 'bold',
        }}>
          Todo Title
        </span>
        <button className={TodoItemStyles.optionsButton} onClick={handleShowOptions}>
          <SlOptionsVertical />
        </button>
      </div>
      {/* body */}
      <div className={`${TodoItemStyles.todoItem_body} ${todo.done && TodoItemStyles.todoItem_checked}`}>
        <p style={{
          fontSize: '12px',
          textAlign: 'justify',
          margin: 0
        }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia qui voluptate natus perferendis error magnam perspiciatis ullam et laboriosam laborum?
        </p>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <p style={{
          color: '#a1a1aa',
          fontSize: '12px',
          margin: 0
        }}>
          {new Date().toLocaleDateString('en-GB')}
        </p>
        <p style={{
          color: '#a1a1aa',
          fontSize: '12px',
          margin: 0
        }}>
          #{todo.id}
        </p>
      </div>
    </div>
  )
}

export default TodoItem