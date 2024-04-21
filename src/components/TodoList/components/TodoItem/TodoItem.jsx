import React, {useState} from 'react';

import TodoOptions from '../TodoOptions/TodoOptions';

import TodoItemStyles from './TodoItem.module.css';
import { SlOptionsVertical } from "react-icons/sl";


const TodoItem = (props) => {
  const {todo, deleteTodo} = props;
  const [showOptions, setShowOptions] = useState(false);
  const handleShowOptions = (e) => {
    console.log(e);
    setShowOptions(true);
  }
  return (
    <div className={TodoItemStyles.todoItem}>
      <TodoOptions showOptions={showOptions} deleteTodo={deleteTodo} id={todo.id}/>
      <div style={{
        position:'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <span style={{
          fontWeight: 'bold',
        }}>
          Todo Title
        </span>
        <button style={{
          border: 'none',
          background: 'none',
          position: 'absolute',
          right: '0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer'
        }} onClick={handleShowOptions}>
          <SlOptionsVertical />
        </button>
      </div>
      <div style={{
        padding: '0.25rem'
      }}>
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