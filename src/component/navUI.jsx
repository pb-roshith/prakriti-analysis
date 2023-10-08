import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavUI = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar className='fixed-top' style={{backgroundColor:'#002244'}} expand="lg">
      <Container fluid style={{color:'#fff'}}>
        <h1>Prakirti Analysis</h1>
        
        <div style={{fontSize:'30px'}}>
        <i style={{marginLeft:'30px', cursor:'pointer'}} class="bi bi-menu-up"></i>
        <i style={{marginLeft:'30px', cursor:'pointer'}} class="bi bi-gear"></i>
        <i onClick={handleShow} style={{marginLeft:'30px', cursor:'pointer'}} class="bi bi-person-circle"></i>
        </div>

        <Offcanvas placement='end' show={show} onHide={handleClose} style={{backgroundImage: `url(${'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1696071245/12643219_5039684_w9tsh7.jpg'})`}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{color:'#fff'}}>Account</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{color:'#fff'}}>
          <h3 style={{cursor:'pointer'}}>Your Profile</h3>
          <hr />
          <h3 style={{cursor:'pointer'}}>History</h3>
          <hr />
          <h3 style={{cursor:'pointer'}}>Star</h3>
          <hr />
          <h3 style={{cursor:'pointer'}}>Settings</h3>
          <hr />
          <h3 style={{cursor:'pointer'}}>Help</h3>
          <hr />
          <h3 style={{cursor:'pointer'}} className='text-danger'>Logout</h3>
        </Offcanvas.Body>
      </Offcanvas>
        
      </Container>
    </Navbar>
  )
}

export default NavUI