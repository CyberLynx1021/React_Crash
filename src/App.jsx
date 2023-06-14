import './App.css';
import Todo from './components/Todo.jsx'
import Titles from './components/Titles.jsx'
import Modal from './components/Modal.jsx'
function App() {
  return (
    
    <>
      <Titles />
      <div className="todo__wrapper">
        <Todo title ="Finish Frontend Simplfied"/>
        <Todo title ="Finish Interview section"/>
        <Todo title ="Land a 100k Job"/>
      </div>
      {/* <Modal /> */}
    </>
  );
}

export default App;
