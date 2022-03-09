function Todo({ completed, task, handleClick, handleDelete }) {
  
  // function Todo(props) { above method bypassing props and below props.completed this is called object destructuring
  return (
    <>
      <li 
      //   key={todo.id} 
        className={completed ? 'completed' : ''}
        // onClick={() => toggleComplete(todo.id)} //delayed definition to call following function
        onClick={handleClick}
      > 
        {task}
      </li>
      <button onClick={handleDelete}>X</button>
    </>
  )
}

export default Todo 