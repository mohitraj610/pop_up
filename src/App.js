import './App.css';
import {Button, Modal} from 'react-bootstrap';
import { useState } from 'react';

function App() {

  const[show,setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  }

  const closeModal = () => {
    setShow(false);
  }

  setTimeout(()=> {
    showModal();
  },2000);

  return (
    <div>
      <Modal show={show} onHide={closeModal}>
      <Modal.Header closeButton className="close"><div className='app'>Checkout what you can do in our FREE trial class!</div></Modal.Header>
      <Modal.Body><video width="465" height="280" muted="false" autoplay="true" loop="true"><source src="https://www.wiingy.com/wp-content/uploads/2022/04/Wiingy-youtube-14sec-1.webm" type="video/mp4" /><source src="https://www.wiingy.com/wp-content/uploads/2022/04/Wiingy-youtube-14sec-1.webm" type="video/ogg" />Your browser does not support the video tag. </video>
      <div className='animation'><Button>Book A Free Trial</Button></div></Modal.Body>
      </Modal>
    </div>
  );
}

export default App;
