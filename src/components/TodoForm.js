function TodoForm({ handleSubmit, handleChange, newTodo, hasNewTodo }) {

  return (
    <form onSubmit={handleSubmit}>
      <input 
        className="form-label pt-0 al"
        placeholder="Task" onChange={handleChange}
        value={newTodo} />
      {/* is this true fo this to do, if it is at this class otherwise don't add any class) */}
      {/* controlled input - by adding value key*/}
      {/* <button disabled={!hasNewTodo}>Add</button> */}

      <button disabled={!hasNewTodo} className="add-btn btn btn-dark btn-sm">ADD</button>

      
    </form>
  )
}
export default TodoForm