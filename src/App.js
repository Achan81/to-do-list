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

  const deleteCompletedTodo = (completedTrueRemove) => {
    if (window.confirm('Are you sure you want to remove these completed items?')) {
      const filteredCompletedTodos = todos.filter(todo => {
        if (todo.completed !== true) {
          return completedTrueRemove
        }
        return
      })
      setTodos(filteredCompletedTodos)
    }
  }


  return (
    <>
      <div className="container col-11 listbg mt-4 pt-2 pb-1 shadow p-3 mb-5 bg-body rounded">
        <div className="row align-items-center">
          <div className="col">
            <main>

              <div className="icon-group d-flex justify-content-end">
                <a href="mailto:achan81@icloud.com" rel="noopener noreferrer" target="_blank">
                  <img alt="mail" src="https://i.imgur.com/l0ehegq.png" className="icon mail-image col"/></a>

                <a href="https://github.com/Achan81/" rel="noopener noreferrer" target="_blank">
                  <img alt="acgh" src="https://i.imgur.com/yWic7vC.png" className="icon acgh-image col"/></a>
    
                <a href="https://www.linkedin.com/in/achan81/" rel="noopener noreferrer" target="_blank">
                  <img alt="linkedin" src="https://i.imgur.com/6j6BRm3.png" className="icon linkedin-image col"/></a>
              </div>

              <h5 className="title text-bold">TO DO LIST</h5>
              <p className="remaining">You have {remainingTodos} thing(s) to do!</p> 
              <hr></hr>
              {/* re-rendered to show how my Todos there are  */}
            
              <hr></hr>

              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <TodoForm
                      handleSubmit={handleSubmit}
                      handleChange={handleChange}
                      newTodo={newTodo}
                      hasNewTodo={hasNewTodo}
                    />
                  </div>

                  <div className="col-xs-12 col-sm-6">
                    <p className="small-instruction">(click on assigned task to <span className="text-decoration-line-through">mark</span> as completed)</p>
                    <button type="button" className="remove-completed btn btn-secondary btn-sm" onClick={deleteCompletedTodo}>Remove all Completed Tasks</button>
                  </div>
                </div>
              </div>


              <ul className="container tasks-added">
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

            </main>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="icons d-flex flex-row justify-content-center">

        </div>
      </div>
    </>
    
  )
  
}


export default App
