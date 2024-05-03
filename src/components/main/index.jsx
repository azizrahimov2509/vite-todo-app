import React, { useState } from 'react';
import "./style.css";


function Main({setShowModal}){
   const [todos,setTodos] = useState([]);
   const [text, setText] = useState("");
   

    function handleSubmit(e){
    e.preventDefault();
    let date = new Date();

    let newTodo = {
      id: date.getTime(),
      text,
      completed: false,
      time:date.toLocaleString('uz-UZ',{
        hour:'numeric',
        minute:'numeric',
        day:'2-digit',
        month:'2-digit',
        year:'numeric'})
    }

    setTodos((prev)=>[...prev,newTodo]);
    setText("");
  }

  function deleteItem(itemId){
    setTodos((prev)=> prev.filter((todo)=>todo.id !== itemId))
  }

  return(
    <main>
      <h2>Todo List</h2>
      <div className="container section-container">
        <form id="todoForm" className="form" onSubmit={handleSubmit}>
          <input id="searchInp" type="text" required  autoComplete="off" value={text} onChange={(e)=>{ setText(e.target.value) }}/>
          <button id="submitBtn" type="submit">add</button>
        </form>

        <ul className="todos-list">
          {todos.length ? todos.map(({id,text,time,completed},ind)=>{
            return <li className="list-item" key={id}>
              <label id="check" className="label">
                <span></span>
              </label>
              <p style={{marginRight: "auto", display: "inline-block"}}>{text}</p>
              <p style={{ opacity: 0.7 }}>{time}</p>
              <div> 
               <i className="fa-regular fa-pen-to-square" style={{marginRight: "5px"}} onClick={() => setShowModal((prev)=>{
  return {...prev, show: true, todoId: id, currentItemText: text}; 
})}></i>
                <i style={{color:'red'}} className="fa-solid fa-trash" onClick={()=> deleteItem(id)}></i> 
              </div>
            </li>
          }) : "There is no todo (add todo)"}
        </ul>
      </div>
    </main> 
  )
}

export default Main;