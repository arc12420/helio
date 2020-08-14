import React from 'react';
import './App.css';
import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Nav from './Components/Nav/Nav';
import Post from './Components/Post/Post';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Auth/>
        <Dashboard/>
        <Form/>
        <Nav/>
        <Post/>
      </header>
    </div>
  );
}

export default App;
