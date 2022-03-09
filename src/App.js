import React from 'react'
import { v4 as uuid } from 'uuid'

import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

function App() {
  const [todos, setTodos] = React.useState(() => {
    const storedTodos = window.localStorage.getItem('todos')
    if (storedTodos) {
      return JSON.parse(storedTodos)
    }
    return []
  })  

  const [newTodo, setNewTodo] = React.useState('') // console.log('current todos', todos)
  const hasNewTodo = !!newTodo.trim()

  React.useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  const handleSubmit = (e) => {
    e.preventDefault() // console.log('submitting', newTodo)

    if (!newTodo.trim()) return //if input is empty doesn't add to list (including white space .trim)

    const createdTodo = {
      task: newTodo,
      completed: false,
      id: uuid(),
    }
    setTodos([...todos, createdTodo]) //add todo to the end of the list
    setNewTodo('') //this will revert the input box back to its original start point.
  }

  const handleChange = (e) => { // console.log('typing', e.target.value)
    setNewTodo(e.target.value)
  }

  // loop through the onclick of each todo loop, find the one with the Id that was clicked and update its completed Boolean. 
  // Ignore the ones that weren't clicked and set them back into state to have the re render occur.
  const toggleComplete = (todoId) => {
    const newTodos = todos.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    })
    setTodos(newTodos)
    // console.log(newTodos)
    // console.log('clicked', todoId)
  }
  

  const deleteTodo = (todoIdToRemove) => {
    if (window.confirm('Are you sure you want to remove this item?')) {
      // make custom modal confirmation pop up...
      const filteredTodos = todos.filter(todo => {
        return todo.id !== todoIdToRemove
      })
      // console.log(filteredTodos)
      setTodos(filteredTodos)
    }
  }

  const remainingTodos = todos.filter(todo => !todo.completed).length

  return (
    <main>
      <h1>You have {remainingTodos} thing(s) to do!</h1> 
      {/* re-rendered to show how my Todos there are  */}

      <ul>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            task={todo.task}
            completed={todo.completed}
            handleClick={() => toggleComplete(todo.id)}
            handleDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </ul>

      <TodoForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        newTodo={newTodo}
        hasNewTodo={hasNewTodo}
      />

    </main>
  )
}

export default App
