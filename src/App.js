import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import {Login} from './Home';
import { Dashboard } from './component/Dashboard';
import {useHistory} from "react-router-dom"
import {history} from './component/History'

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Link to="/Home"><h3>Log In</h3></Link><br/>
    <hr/>
    <Route exact path="/Home" component={Login} />
    <Route path="/Dashboard" component={Dashboard} />
    <Route path="/History" component={history} />


    </BrowserRouter>
    </div>
  );
}

export default App;
