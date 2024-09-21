import './assets/Style.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './section/Home';
import 'aos/dist/aos.css';
import ServicesDetales from './section/ServicesDetales';
import About from './section/About';
import Services from './section/Services';
import Pricing from './section/Pricing';
import Contact from './section/Contact';
import ToDolist from './section/ToDolist';
import Login from './section/Login';
import Register from './section/Register';



function App() {
return (<>
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} index path='/' />
        <Route element={<ServicesDetales/>} path='/servicesDetales'/>     
        <Route element={<About/>} path='about'/>   
        <Route element={<Services/>} path='services'/>   
        <Route element={<Pricing/>} path='pricing'/>   
        <Route element={<Contact/>} path='contact'/>   
        <Route element={<ToDolist/>} path='todo'/>   
        <Route element={<Login/>} path='singin'/>   
        <Route element={<Register/>} path='register'/>   
      </Routes>
    </BrowserRouter>
  </>);
}

export default App;
