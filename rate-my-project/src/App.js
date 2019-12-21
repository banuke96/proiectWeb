import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Route,
  useHistory,
  BrowserRouter as Router
} from 'react-router-dom'

import HomePage from './containers/Home/Home'
import ProjectsPage from './containers/Projects/Projects';
import AboutPage from './containers/About/About';
import NavbarComponent from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div>
        <NavbarComponent />
        <Route exact path='/home' component={HomePage}></Route>
        <Route exact path='/projects' component={ProjectsPage}></Route>
        <Route exact path='/about' component={AboutPage}></Route>
      </div>
    </Router>
  );
}

export default App;
