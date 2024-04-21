import { useState } from 'react'
import Button from './components/Button/Button';

import './App.css'
import { MdDarkMode } from "react-icons/md";
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';

function App() {

  const [darkMode, setDarkMode] = useState(false); 
  const [allTodos, setAllTodos] = useState([]);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className={`app ${!darkMode? 'app_lightMode' : 'app_darkMode'  }`}> 
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: `solid 0.5px ${!darkMode ? '#d1d5db' : '#e5e7eb' }`,
        padding: '0px 4px'
      }}>
        <div>
          <span style={{
            color:`${!darkMode ? 'black' : 'aliceblue' }`,
            fontWeight: 'bold',
            fontSize: '1.5rem',
            padding: 0
            }}>
            TODO-APP
          </span>
        </div>
        <div>
          <Button text={`${darkMode? 'Light mode' : 'Dark mode'  }`} handleClick={handleDarkMode} darkMode={darkMode}/>
        </div>
      </header>
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.25rem',
        flexGrow: 1
      }}>
        <Form allTodos={allTodos} setAllTodos={setAllTodos} />
        <TodoList allTodos={allTodos} setAllTodos={setAllTodos}/>
      </main>
      <footer style={{
        borderTop: `solid 0.5px ${!darkMode ? '#d1d5db' : '#e5e7eb' }`
      }}>
        <p style={{
          margin: 0
        }}>
          @rgiova - 2024
        </p>
      </footer>
    </div>
  )
}

export default App
