import './App.css';
import Todo from './components/Todo.jsx'
import Titles from './components/Titles.jsx'
import Modal from './components/Modal.jsx'
import React, {useState} from 'react'
function App() {
useState(false)
 const [showModal] = useState(false)
 
  return (
    
    <>
      <Titles />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }} />
        <button>Add </button>
      </div>
      <div className="todo__wrapper">
        <Todo title ="Finish Frontend Simplfied"/>
        <Todo title ="Finish Interview section"/>
        <Todo title ="Land a 100k Job"/>
      </div>
{  false &&  <Modal title="Confirm Delete?"/> }    
  </>
  );
}

export default App;
