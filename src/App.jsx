// App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import Modal from './Modal';
import DarkModeToggle from './DarkMode';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

const App = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const notify = () => {
    toast.info(<div>
      <a href='https://www.youtube.com/@Talantbek1994'target="_blank" rel="noopener noreferrer" >My YouTube Channel</a>
    </div>)
  }
useEffect(() => {
  notify()
},[])

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>A Simple React Modal</h1>
       <DarkModeToggle/>
      </header>
      <div className='zam-zam'>
       
        <h2>Frontend Dasturlash uchun zarur bilimlar</h2>
        <button onClick={openModal}>Bossang Korasan</button>
        <Modal isOpen={isOpenModal} onClose={closeModal} />
        <ToastContainer />
      </div>
    </div>
  );
};

export default App;
