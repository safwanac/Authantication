import React from 'react'
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Signup';
import Login from './Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App