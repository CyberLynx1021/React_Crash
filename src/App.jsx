import './App.css';
import Todo from './components/Todo.jsx';
import Titles from './components/Titles.jsx';
import Modal from './components/Modal.jsx';
import Counter from "./components/Counter.jsx"
import React, { useState, useEffect } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false)

  function onTodoDelete() {
    setShowModal(true)
    console.log('onTodoDeete')
  }
  
 function cancelModal(){
  setShowModal(true)
 }

 function confirmModal(){
  setShowModal(true)
 }
 
useEffect (()=>{
  console.log('on mount')
}, [showModal])

 
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
        <Todo onTodoDelete={onTodoDelete} title ="Finish Frontend Simplfied"/>
        <Todo onTodoDelete={onTodoDelete} title ="Finish Interview section"/>
        <Todo onTodoDelete={onTodoDelete} title ="Land a 100k Jobs"/>
      </div>
{showModal  && (
 <Modal 
cancelModal={cancelModal}
confirmModal={confirmModal} 
title="Confirm Delete?"
/> 
)}    
  </div>
  );
}

export default App;
