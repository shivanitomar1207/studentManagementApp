
import './App.css';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/navigation";

import Home from "./components/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Students from "./components/Students";
import Manage from "./components/Manage";
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
         <Route exact path="/" element={<Home/>} />
         <Route path="/student" element={<Students/>} />
         <Route path="/manage" element={<Manage/>} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
