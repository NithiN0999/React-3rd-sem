// src/App.js
import React from 'react';
import Menu from './components/Menu';
 import Header from './components/Header';
 import Footer from './components/Footer';
import Login from './components/Login';
import RegistrationPage from './register';
import './styles.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Register from './register';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Menu/>}/>
          <Route exact path='/lo' element={<Login/>}/>
          <Route exact path='/re' element={<Register/>}/>
        </Routes>
      </Router>
{/* <Login/> */}
  
    </div>
  );
}

export default App;
