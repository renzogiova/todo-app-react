import React, { useState } from 'react';
import FormStyles from './Form.module.css';

const Form = (props) => {
  const { newTodo, todos, setNewTodo, setTodos } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited");
    console.log(newTodo);
    setTodos([
      ...todos, 
      {
        ...newTodo,
        index: todos.length && todos[todos.length-1].index + 1
      }
    ]);
    setNewTodo({
      description: "",
      done: false,
      createdAt: new Date().toISOString(),
      index: todos.length && todos[todos.length-1].index + 1
    });
  }
  // const [newTodo, setNewTodo] = useState({
  //   description: "",
  //   done: false,
  //   createdAt: new Date().toISOString()
  // });

  const handleChangeTodo = (e) => {
    const newDescription = e.target.value;
    setNewTodo({
      ...newTodo,
      description: newDescription
    });
  }

  return (
    <form className={FormStyles.form} onSubmit={handleSubmit}>
      <p>New task</p>
      <input value={newTodo.description} onChange={handleChangeTodo} />
      <button type='submit'> Create </button>
    </form>
  )
}

export default Form