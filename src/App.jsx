import React from 'react';
import MapComponent from './components/Map';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />

      <MapComponent />
    </div>
  );
}

export default App;
