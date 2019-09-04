import React, { Component } from 'react';
import Inicio from './components/inicio';
import Sobre from './components/sobre';
import Contato from './components/contato';
import Notfound from './components/notfound';
import Navbar from './components/navbar';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar></Navbar>
            <Switch>
              <Route path="/" exact component={Inicio}/>
              <Route path="/sobre" exact component={Sobre}/>
              <Route path="/contato/:id" exact component={Contato}/> /*Utilizando Parâmetros nas URL's*/
              <Route component={Notfound}/>
            </Switch>
          </div>
        </Router> 
      </div>
    )
  }
}

export default App;
