import React from 'react'
import TodoOptionsStyles from './TodoOptions.module.css';

const TodoOptions = (props) => {
  const {showOptions, index, deleteTodo} = props;
  return (
    <div className={`${showOptions? TodoOptionsStyles.todoOptions : TodoOptionsStyles.todoOptions_hidden}`}>
      <button>MARCAR</button>
      <button>EDITAR</button>
      <button onClick={() => {deleteTodo(index)}}>BORRAR</button>
      <button>VER HISTORIAL</button>
    </div>
  )
}

export default TodoOptions