import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import {Login} from './Home';


function App() {
  return (
    <div className="App">
    <h3>login here</h3>
    <BrowserRouter>
    <Link to="/Home"><h3>Log In</h3></Link><br/>
    <hr/>
    <Route exact path="/Home" component={Login} />
    </BrowserRouter>
    </div>
  );
}

export default App;
