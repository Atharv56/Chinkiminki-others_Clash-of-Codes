import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link}  from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './Navbar.css';
import logo from "./TripTales_Dark.png"

export default function NavScrollExample() {
  return (
    <div className='navBar'>
    <Navbar bg="black" variant="dark" expand="lg" sticky = "top" collapseOnSelect>
        <Navbar.Brand href="/home">
          <img  src={logo} alt="" class="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className='right-aligned'>
        <span styles={{display:"inline",float:"right",marginTop:5,textAlign:"center",padding:50}}>
          <Nav>


            <Nav.Link href="#" className = "links">hi</Nav.Link>
            <Nav.Link href="#" className = "links">Projects</Nav.Link>
            <Nav.Link href="#" className = "links">Projects</Nav.Link>
            <NavDropdown title="Dropdown" class = "links">
              <NavDropdown.Item href="#action/3.1" className = "links">Projects</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className = "links">Another Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className = "links">Projects</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="#action/3.4" className = "links">Projects</NavDropdown.Item>
            </NavDropdown>
              <Link to= "/login"><Button className="btn">Log Out</Button></Link>
            

          </Nav>
          </span>
        </Navbar.Collapse>
    </Navbar>
    </div>
  );
}