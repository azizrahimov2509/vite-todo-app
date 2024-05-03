import React, { useState } from 'react';
import "./App.css"; 
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Modal from "./components/modal";

function App() {
  const [showModal, setShowModal] = useState({ show: false, todoId: ""});
  const [todos, setTodos] = useState([]); 

  return (
    <>
      <Header />
      <Main setShowModal={setShowModal} todos={todos} setTodos={setTodos} />
      <Footer />
      {showModal.show && (
        <Modal 
          setTodos={setTodos} 
          itemId={showModal.todoId} 
          currentItemText={todos.find(todo => todo.id === showModal.todoId)?.text}
          closeModal={() => setShowModal({ show: false, todoId: "" })} 
        />
      )} 
    </>
  );
}

export default App;
