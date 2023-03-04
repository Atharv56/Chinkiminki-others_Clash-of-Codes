import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './Navbar.module.css';

function NavScrollExample() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky = "top">
      <Container fluid>
        <Navbar.Brand href="/home">SAKHI</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/contact">ContactUs</Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/chat">ChatWithUs</Nav.Link>
          <Nav.Link href="/voice">Voice</Nav.Link>
          {/* <Nav.Link href="#action6">LogOut</Nav.Link> */}
     
          </Nav>
          <Link to= "/login"><Button className={styles.btn} >LogOut</Button></Link>
          
         
{/* 
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> */}
          
            {/* <Button className={styles.btn}>Search</Button> */}
            
          {/* </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;