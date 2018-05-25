import React, { Component } from 'react';
import './App.css';
//Rotas
import Inicio from './components/inicio';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
          
            <Route path="/" exact component={Inicio}/>

          </Switch>
        </Router> 
      </div>
    );
  }
}

export default App;
