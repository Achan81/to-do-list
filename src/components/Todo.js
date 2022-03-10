function Todo({ completed, task, handleClick, handleDelete }) {
  
  // function Todo(props) { above method bypassing props and below props.completed this is called object destructuring
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-center">
            <li 
              //   key={todo.id} 
              className= {completed ? 'completed' : ''}
              // onClick={() => toggleComplete(todo.id)} //delayed definition to call following function
              onClick={handleClick}
            > 
              {task}
            </li>
            <button onClick={handleDelete} type="text" className="delete-task btn-none btn btn-sm">REMOVE</button>
          
          </div>
        </div>
      </div>
    </>
    
  )
}

export default Todo 