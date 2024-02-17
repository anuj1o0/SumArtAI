import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About us/Aboutus';
import Chat from './Component/Chat/Chat';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default App;
