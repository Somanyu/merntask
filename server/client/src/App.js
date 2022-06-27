import React from 'react'
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Navbar />

      <Route exact path='/'>
        <Home />
      </Route>
      
      <Route path='/profile'>
        <Profile />
      </Route>
      
      <Route path='/login'>
        <Login />
      </Route>
      
      <Route path='/register'>
        <Register />
      </Route>


    </div>
  )
}

export default App