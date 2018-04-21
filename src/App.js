import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';

import { RouteManager } from './components/routemanager/routeManager';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="row">
          <RouteManager />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
