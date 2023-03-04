import './App.css';
// import NavBar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/login/login';
import Signup from './components/sign up/signup';
import Blog from './components/blog/blog';
import ContactUs from './components/contact-us/contact-us';
import Hero from './components/Hero/Hero';
import Multistep from './components/Form/Form';
import * as React from 'react'
import {ChakraProvider} from '@chakra-ui/react'
import Translate from './components/Translate/Translate';
import Predict from './components/predict/predict';
import Chat from './components/chat/Chat';
// import Articles from './components/blog/Articles';
//import MDBFooter from './components/Footer/footer';
import Courses from './components/Courses/courses';



function App() {
  return (
    <>
    <ChakraProvider>

    <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/hero" element={<Hero/>}/>
          <Route path="/" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/form' element = {<Multistep/>} />
          <Route path='/voice' element={<Translate />} />
          <Route path='/predict' element={<Predict />} />
<<<<<<< Updated upstream
          <Route path='/courses' element={<Courses />} />
=======
          <Route path='/chat' element={<Chat />} />
>>>>>>> Stashed changes
        </Routes>
      </Router>
            
    </ChakraProvider>
    </>
  );
}

export default App;
