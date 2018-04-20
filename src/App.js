import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';

import { RouteManager } from './components/routemanager/routeManager';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <RouteManager />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
