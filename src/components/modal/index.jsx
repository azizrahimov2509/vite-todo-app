import React, { useState } from "react";
import "./style.css";

export default function Modal({ closeModal, itemId, setTodos, currentItemText }) {
  const [text, setText] = useState(currentItemText || ''); 

  const { todoId } = itemId;

  function handleSubmit(event) {
    event.preventDefault();
    setTodos(prev => prev.map(item => {
      if (item.id === todoId) {
        return { ...item, text }; 
      }
      return item;
    }));

    setText(""); 
    closeModal(); 
  }

  return (
    <>
      <div id="modal" className="modal">
        <div className="modal-content">
          <h4>Edit modal</h4>
          
          <i className="fa fa-times" aria-hidden="true" style={{ color: "red" }} onClick={() => closeModal()}></i>
          <form style={{ padding: '7px' }} id="editForm" onSubmit={handleSubmit}>
            <input
              style={{ border: '1px solid var(--card-bg)', padding: '8px' }}
              id="editInp"
              type="text"
              value={text}
              required
              placeholder="Enter todo..."
              autoComplete="off"
              onChange={(e) => setText(e.target.value)} 
            />
            <button id="editBtn" type="submit">Edit</button>
          </form>
        </div>
      </div>
      
    </>
  );
}