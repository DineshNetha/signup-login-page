import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import Welcome from './Welcome';

function App() {
  return (
    <Router>
      {/*<div className='flex flex-col '>
      <Link to="/signUp" className='bg-blue-200 mt-4 text-blue-500 underline text-center'>SignUp</Link>
      <Link to="/login" className='bg-blue-200 mt-4 text-blue-500 underline text-center'>Login</Link>
  </div>*/}
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/welcome" element={<Welcome/>}/>
      </Routes>
    </Router>
  );
}
export default App;