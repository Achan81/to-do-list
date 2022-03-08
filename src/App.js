import React from 'react'
import { v4 as uuid } from 'uuid'

function App() {
  const [todos, setTodos] = React.useState([ 
  // { task: 'Build a todo app', completed: false, id: uuid() }
  ])
  
  const [newTodo, setNewTodo] = React.useState('') // console.log('current todos', todos)

  const handleSubmit = (e) => {
    e.preventDefault() // console.log('submitting', newTodo)
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

  return (
    <main>
      <h1>You have {todos.length} thing(s) to do!</h1> 
      {/* rerendered to show how my Todos there are */}
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input placeholder="Task" onChange={handleChange} value={newTodo} />
        {/* controlled input - by adding value key*/}
        <button>Add</button>
      </form>
    </main>
  )
}

export default App
