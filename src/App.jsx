import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar'
import './App.css';



function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="h-full">
      <Routes>
        <Route path = '/' element={  <Home/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
