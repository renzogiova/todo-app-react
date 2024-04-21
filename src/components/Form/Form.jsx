import React, { useState } from 'react';
import FormStyles from './Form.module.css';

const Form = (props) => {
  const { allTodos, setAllTodos } = props;
  const [newTodo, setNewTodo] = useState({
    title: '',
    description: '',
    done: false,
    createdAt: new Date().toISOString(),
    id: 0
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setAllTodos([
      ...allTodos, 
      {
        ...newTodo,
        createdAt: new Date().toISOString(),
        id: allTodos.length && allTodos[allTodos.length-1].id + 1
      }
    ]);
    setNewTodo({
      title: '',
      description: '',
      done: false,
      createdAt: new Date().toISOString(),
      id: allTodos.length && allTodos[allTodos.length-1].id + 1
    });
  }

  const handleChangeTodo = (e) => {
    setNewTodo({
      ...newTodo,
      [e.target.name]: e.target.value
    });
  }

  return (
    <form className={FormStyles.form} onSubmit={handleSubmit}>
      <label>Title</label>
      <input name='title' value={newTodo.title} onChange={handleChangeTodo} />
      <label>Description</label>
      <input name='description' value={newTodo.description} onChange={handleChangeTodo} />
      <button type='submit'> Create </button>
    </form>
  )
}

export default Form