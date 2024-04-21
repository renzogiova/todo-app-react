import React from 'react'
import TodoItem from './components/TodoItem/TodoItem';

import TodoListStyles from './TodoList.module.css';

const TodoList = (props) => {
  const {todos, setTodos} = props;
  const deleteTodo = (index) => {
    todos.splice(index,1);
    setTodos([
      ...todos
    ])
  }
  return (
    <div className={TodoListStyles.todoList}>
      {
        /* [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map(x => {
          return (
            <TodoItem />
          )
        }) */
        todos.map((todo, index) => <TodoItem todo={todo} index={index} deleteTodo={deleteTodo}/>)
      }
    </div>
  )
}

export default TodoList