
import React, { useState,useEffect} from 'react';
import Header from '../../header';
import Main from '../../main';
import Footer from '../../footer';
import Modal from '../../modal';
import { Outlet } from 'react-router-dom';

export default function Home(){
    
  const [showModal, setShowModal] = useState({ show: false, todoId:"",});
  const [todos, setTodos] = useState(null); 
  
  return (
    <>
      <Header /> 

      <Outlet/>
      <Main/>
    
      <Footer/>
      {showModal.show && (
        <Modal 
          setTodos={setTodos} 
          itemId={showModal} 
          currentItemText={todos.find(todo => todo.id === showModal.todoId)?.text}
          closeModal={() => setShowModal({ show: false, todoId: "" })} 
        />
      )} 
    
    </>
  );
}