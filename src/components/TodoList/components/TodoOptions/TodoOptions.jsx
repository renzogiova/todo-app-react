import React, { useCallback, useEffect, useRef } from 'react'
import TodoOptionsStyles from './TodoOptions.module.css';

const TodoOptions = (props) => {
  const {showOptions, setShowOptions, id, deleteTodo, checkTodo} = props;
  const todoOptionsRef = useRef(null);

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

  const handleClickOutside = (e) => {
    if (
      todoOptionsRef.current &&
      !todoOptionsRef.current.contains(e.target)
    ) {
      setShowOptions(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);

  return (
    <div ref={todoOptionsRef} className={`${showOptions? TodoOptionsStyles.todoOptions : TodoOptionsStyles.todoOptions_hidden}`}>
      <button onClick={handleCheck(id)}> MARCAR </button>
      <button onClick={handleEdit} > EDITAR </button>
      <button onClick={handleDelete(id)}> BORRAR </button>
      <button> VER HISTORIAL </button>
    </div>
  )
}

export default TodoOptions