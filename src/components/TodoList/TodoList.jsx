import React from 'react'
import TodoItem from './components/TodoItem/TodoItem';

import TodoListStyles from './TodoList.module.css';

const TodoList = (props) => {
  const {allTodos, setAllTodos} = props;
  const deleteTodo = (id) => {
    const indexToDelete = allTodos.findIndex(todo => todo.id === id);
    if (indexToDelete === -1) {
      console.error("index to delete not found.");
      return;
    }
    const allTodosUpdated = [...allTodos];
    allTodosUpdated.splice(indexToDelete,1);
    setAllTodos(allTodosUpdated);
  }
  const checkTodo = (id) => {
    const indexToCheck = allTodos.findIndex(todo => todo.id === id);
    if (indexToCheck  === -1) {
      console.error("index to check not found.");
      return;
    }
    const allTodosUpdated = [...allTodos];
    allTodosUpdated[indexToCheck].done = !allTodosUpdated[indexToCheck].done;
    setAllTodos(allTodosUpdated) 
  }
  return (
    <div className={TodoListStyles.todoList}>
      {
        allTodos.map(todo => <TodoItem todo={todo} deleteTodo={deleteTodo}/>)
      }
    </div>
  )
}

export default TodoList