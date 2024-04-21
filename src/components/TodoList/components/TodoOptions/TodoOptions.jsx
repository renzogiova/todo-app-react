import React, { useCallback } from 'react'
import TodoOptionsStyles from './TodoOptions.module.css';

const TodoOptions = (props) => {
  const {showOptions, setShowOptions, id, deleteTodo, checkTodo} = props;
  const handleCheck = (id) => () => {
    checkTodo(id);
    setShowOptions(!showOptions);
  } 
  const handleDelete = (id) => () => {
    deleteTodo(id);
    setShowOptions(!showOptions);
  }
  const handleEdit = () => {
    console.log('handle edit')
  }
  return (
    <div className={`${showOptions? TodoOptionsStyles.todoOptions : TodoOptionsStyles.todoOptions_hidden}`}>
      <button onClick={handleCheck(id)}> MARCAR </button>
      <button onClick={handleEdit} > EDITAR </button>
      <button onClick={handleDelete(id)}> BORRAR </button>
      <button> VER HISTORIAL </button>
    </div>
  )
}

export default TodoOptions