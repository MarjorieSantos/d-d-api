import React, { Component } from 'react';
import Menu from './components/header/Menu'
import Home from './pages/Home/home.js'

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Home />
      </div>
    );
  }
}

export default App;
