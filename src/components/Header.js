import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import '../styles/Header.css';
function Header(props) {
  const [showModal,setShowModal]=useState(false);
  const handleCloseModal=()=>{
    setShowModal(false);
  }
  const handleLogout=()=>{
    localStorage.clear();
    props.checkLogin(false);
  }
  const handleOpenModal=()=>{
    setShowModal(true);
  }
  return (
    <>
      
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Login System</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/home"><NavLink to="/home" className='nav-menu'>Home</NavLink></Nav.Link>
     
          </Nav>
          <NavDropdown title={JSON.parse(localStorage.getItem('user')).name} id="basic-nav-dropdown" drop="start" style={{marginRight:'-65px',color:'white'}}>
          
             
              <NavDropdown.Item><NavLink to="/" className='logout' onClick={handleLogout}>Logout</NavLink></NavDropdown.Item>
            </NavDropdown>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;