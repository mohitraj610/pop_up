import './App.css';
import {Button, Modal} from 'react-bootstrap';
import { useState } from 'react';

function App() {

  const[show,setShow] = useState(true);

  
    const showModal = () => {
      localStorage.setItem("Regulator", "ON");
    setShow(true);
  }

  const closeModal = () => {
    localStorage.setItem("Regulator", "OFF");
    setShow(false);
    
  }

  const val = localStorage.getItem("Regulator");

  if(val === "ON")
  {
    console.log(val);
   setTimeout(()=> {
    showModal();
   })
  
  }

  let width = 465;
  let height = 280;
  if(window.innerHeight<=500)
  {
    width=300;
    height=180;
  }

  return (
    <div >
      <Modal contentClassName='total' show={show} onHide={closeModal}>
      <Modal.Header className='header'><div className='app'>Checkout what you can do in our FREE trial class!</div><img className='imgbutton' src="https://www.wiingy.com/wp-content/themes/wingynew/details_assets/images/login-close.svg" alt= "" onClick={closeModal} /></Modal.Header>
      <Modal.Body><video width={width} height={height} muted="false" autoplay="true" loop="true"><source src="https://www.wiingy.com/wp-content/uploads/2022/04/Wiingy-youtube-14sec-1.webm" type="video/mp4" /><source src="https://www.wiingy.com/wp-content/uploads/2022/04/Wiingy-youtube-14sec-1.webm" type="video/ogg" />Your browser does not support the video tag. </video>
      <div className='animation'><Button>Book A Free Trial</Button></div></Modal.Body>
      </Modal>
    </div>
  );
}

export default App;
