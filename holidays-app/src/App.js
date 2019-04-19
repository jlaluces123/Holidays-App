import React, { Component } from 'react';
import './App.css';

/* Dependency-Related Imports */
import { Route } from "react-router-dom";

/* Component-Related Imports */
import Home from "./components/Home/Home.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path = "/" component = {Home} />
      </div>
    );
  }
}

export default App;
