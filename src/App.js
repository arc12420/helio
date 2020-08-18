import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import routes from './routes';
import {withRouter} from 'react-router-dom';
import "./Components/Nav/Nav.css";



function App(props) {
  console.log(props.location)
  return (
    <div className="App">
      <header className="App-header">
      {props.location.pathname === ('/') ?
        ""
       : <Nav/> }      
        {routes}                
      </header>
    </div>
  );
}

export default withRouter(App);
