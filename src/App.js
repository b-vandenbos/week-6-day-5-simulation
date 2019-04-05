import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import {HashRouter as Router} from 'react-router-dom';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        {routes}
      </div>
      </Router>
    );
  }
}

export default App;
