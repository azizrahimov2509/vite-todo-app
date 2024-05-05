// main.jsx

import React, { useState,useEffect } from 'react';
import "./style.css";


function Main({ setShowModal, setTodos }) {
   const [data, setData] = useState(null);
   const [type,setTypes] = useState('todos');
   console.log(type);
   
   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/' + type).then((res)=>res.json())
    .then((result)=>{
      setData(result.slice(0,16));
        console.log(result.slice(0,20));
    })
  },[type])
   

    return (
        <main>
         
         <div className="container section-container">
            <select className='select' value={type} onChange={(e)=>{
                    setTypes(e.target.value);
                }} >
                    <option  value="todos">Todos</option>
                    <option value="posts">Posts</option>
                    <option value="comments">Comments</option>
                
                </select>
            
            </div>
        </main>
    )
}

export default Main;
