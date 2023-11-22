import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';

import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/services' element={<Services/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
