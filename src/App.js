import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About/index';
import Home from './pages/home/index';
import Help from './pages/help/index';
import Service from './pages/services/index';
import Team from './pages/Team/index';
import './components/Header/header.css'
import { Header } from './components/Header/Header';
import {Footer} from './components/Footer/index';
import './App.css';

function App() {
  return (
    <>
      {/* <div className="container"> */}
      <BrowserRouter>
        <Header logo="Finexo" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/service" element={<Service />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </BrowserRouter>

      < Footer />
    </>
    // </div>
  );
}

export default App;
