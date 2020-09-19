import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Slides from './Components/Slides';

function App() {
  return (
    <div className="App">
    <Header />
    <Slides />
    </div>
  );
}

export default App;