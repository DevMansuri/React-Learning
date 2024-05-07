import React from 'react'
import { useState } from 'react'
import Modal from './Modal';
import Backdrop from './Backdrop';
function Todo(props) {
useState();
const [modaliSOpen,setModalisOpen] = useState(false);
    
    function deleteHandler() {
        setModalisOpen(true);
        
    }
    function closeModalHandler() {
        setModalisOpen(false);
    }
  return (
   
   <div className="card">
        <h2>{props.title}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
        {modaliSOpen && <Modal onClick={closeModalHandler}></Modal>}
        {modaliSOpen && <Backdrop onClick={closeModalHandler}></Backdrop>}
    </div>
  )
}

export default Todo