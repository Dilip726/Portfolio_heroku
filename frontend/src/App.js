import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import Nav from './components/Nav';
import './App.css'
import {Main } from './Pages/index'


function App() {
  return (
    <>
    <Router>
      <Nav/>
      <Route exact path='/' component={Main}/>
    </Router>
    
    </>
  );
}

export default App;
