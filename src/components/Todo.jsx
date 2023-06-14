import './Todo.css'
function Todo( {title, paragraph}){
  console.log(title)
function deleteTodo(id){
  console.log('deleteTodo()')
}

    return (
    <div className="todo">
      <h2>{title}</h2>
      <p>{paragraph}</p>
      <button onClick={() => deleteTodo(1)}>Delete</button>
     </div>
    );
}

export default Todo;