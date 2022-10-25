import React from 'react';
import MapComponent from './components/Map';
import './App.css';
import NavBar from './components/NavBar';
import ContextProviders from './context/ContextProviders';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ContextProviders>

      </ContextProviders>
      
    </div>
  );
}

export default App;
