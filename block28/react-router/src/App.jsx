// import { useState } from 'react'

import { Routes, Route, Link } from "react-router-dom";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./components/Home";
import Footer from './components/Footer';

import "./index.css";

function App() {
  return (
    <>
      <div id="container">
        <center>
        <h1>Hello React Router!</h1>
        </center>

        <div id="navbar">
          <Link to = "/Blue">Blue</Link>
          <Link to = "/Red">Red</Link>
          <Link to = "/Home">Home</Link>
        </div>
        <div id="main-section">
          <Routes>

            <Route path="/Blue" element={ < Blue />} />
            <Route path="/Red" element={<Red/>} />
           <Route path="/Home" element={<Home />} />
           <Route path="/footer" element={<Footer />} /> 

          </Routes>

        </div>
      </div>
      <div id="footer">
       <Link to="/home">HOME</Link>
        <Link to="/blue">BLUE</Link>
        <Link to="/red">RED</Link>
      </div>
      

    </>
  );
}

export default App;
