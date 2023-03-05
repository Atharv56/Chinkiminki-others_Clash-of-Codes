import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link}  from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Trip from '../images/img5.png'
import styles from './Navbar.css';
import logo from "./TripTales_Dark.png"

export default function NavScrollExample() {
  return (
    <div className='navBar'>
    <Navbar bg="black" variant="dark" expand="lg" fixed = 'top' collapseOnSelect>
        <Navbar.Brand href="/home">
          <img  src={logo} alt="" class="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className='right-aligned'>
        <span styles={{display:"inline",float:"right",marginTop:5,textAlign:"center",padding:50}}>
          <Nav>

<<<<<<< Updated upstream

            <Nav.Link href="#" className = "links">hi</Nav.Link>
            {/* <div id='google_translate_element'></div> */}
            <Nav.Link href='#' id='google_translate_element' className='links'>Translate</Nav.Link>
            <Nav.Link href="#" className = "links">Projects</Nav.Link>
            <Nav.Link href="#" className = "links">Projects</Nav.Link>
            {/* <img src={Trip} alt='log'></img> */}
            <NavDropdown title="Dropdown" class = "links">
              <NavDropdown.Item href="#action/3.1" className = "links">Projects</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className = "links">Another Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className = "links">Projects</NavDropdown.Item>
=======
          <NavDropdown title="Travel with Us" id="nav-dropdown1">
              <NavDropdown.Item href="/predict" className = "links">Find your Travel Buddy</NavDropdown.Item>
>>>>>>> Stashed changes
              <NavDropdown.Divider/>
              <NavDropdown.Item href="/translate" className = "links">Connect with Locals</NavDropdown.Item>

            </NavDropdown>

            <NavDropdown title="Explore" id="nav-dropdown2">
              <NavDropdown.Item href="/courses" className = "links">Courses</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="/events" className = "links">Events</NavDropdown.Item>

            </NavDropdown>
            
            <Nav.Link href="/blog" className = "links">Blog</Nav.Link>
            <Nav.Link href="/contactus" className = "links">Contact Us</Nav.Link>
            
            <span id="bttn">
              <Link to= "/login"><Button className="btn">Log Out</Button></Link>
            </span>
            
            

          </Nav>
          </span>
        </Navbar.Collapse>
    </Navbar>
    </div>
  );
}