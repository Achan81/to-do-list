import React from 'react'
import { v4 as uuid } from 'uuid'

function App() {
  const [todos, setTodos] = React.useState([
    { task: 'my todo1', completed: false, id: uuid() },
    { task: 'my todo2', completed: true, id: uuid() }
  ])

  const [newTodo, setNewTodo] = React.useState('') // console.log('current todos', todos)
  const hasNewTodo = !!newTodo.trim()

  const handleSubmit = (e) => {
    e.preventDefault() // console.log('submitting', newTodo)

    if (!newTodo.trim()) return //if input is empty does add to list (including white space .trim)

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

  const remainingTodos = todos.filter(todo => !todo.completed) .length


  return (
    <main>
      <h1>You have {remainingTodos} thing(s) to do!</h1> 
      {/* rerendered to show how my Todos there are */}
      <ul>
        {todos.map(todo => (
          <li 
            key={todo.id} 
            className={todo.completed ? 'completed' : ''}
            onClick={() => toggleComplete(todo.id)} //delayed definition to call following function
          >
            {todo.task}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Task" onChange={handleChange} 
          value={newTodo} />
        {/* is this true fo this to do, if it is at this class otherwise don't add any class) */}
        {/* controlled input - by adding value key*/}
        <button disabled={!hasNewTodo}>Add</button>
      </form>
    </main>
  )
}

export default App
