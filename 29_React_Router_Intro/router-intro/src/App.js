import React, { Component } from "react";
import { Routes, Route, NavLink, Outlet } from 'react-router-dom';
import Dog from './Dog';
import About from './About';
import Contact from './Contact';
import './App.css';

const Hater = () => <h1> I absolutely hate dogs</h1>;

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <nav className='App-nav'>
          <NavLink exact className='active-link' to='/'>About</NavLink>
          <NavLink exact className='active-link' to='/contact'>Contact</NavLink>
          <NavLink exact className='active-link' to='/dog'>Dog</NavLink>
        </nav>

        <Outlet />

{/* <Routes>
          <Route exact path-='/dog/r' render={ ()=> <Dog name='Biscuits' />} />
          </Routes> */}
  
      </div>

 
    );
  }
}

export default App;
