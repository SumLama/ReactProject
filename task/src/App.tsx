import React from 'react';
import './App.css';
import Login from './components/Login';
import Welcome from './Pages/Welcome';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/welcome" element={<Welcome/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
