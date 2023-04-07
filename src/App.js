import './App.css';
import Display from './components/Display';
import GenForm from './components/GenForm';
import Schooling from './components/Schooling';
import React, { Component } from 'react';
import uniqid from "uniqid";

class App extends Component {
  render() {
    return (
      <div className="top">
        <GenForm /> 
        <Schooling />
      </div>
    )
  }
}

export default App;
