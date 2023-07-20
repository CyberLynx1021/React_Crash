import './App.css';
import Todo from './components/Todo.jsx';
import Titles from './components/Titles.jsx';
import Modal from './components/Modal.jsx';
import React, {useState} from 'react';
import React, { useState } from 'react';

function App() {
 
  
 
 
 
 return <Counter />
 const [showModal, setShowModal] = useState(false)

 
 return (
    <div>
      <Titles />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }} />
        <button onClick={() => setShowModal(true)}>Ad todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo title ="Finish Frontend Simplfied"/>
        <Todo title ="Finish Interview section"/>
        <Todo title ="Land a 100k Jobs"/>
      </div>
{showModal  &&  <Modal title="Confirm Delete?"/> }    
  </div>
  );
}

export default App;
