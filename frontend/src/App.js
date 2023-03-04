import './App.css';
// import NavBar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/login/login';
import Signup from './components/sign up/signup';
import Blog from './components/blog/blog';
import ContactUs from './components/contact-us/contact-us';
import Multistep from './components/Form/Form';
import * as React from 'react'
import {ChakraProvider} from '@chakra-ui/react'
//import MDBFooter from './components/Footer/footer';



function App() {
  return (
    <>
    <ChakraProvider>

    <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/form' element = {<Multistep/>} />
        </Routes>
      </Router>
            
    </ChakraProvider>
    </>
  );
}

export default App;