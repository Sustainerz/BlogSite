import React from 'react';
import { Redirect, Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Login from './pages/Login/login';
import SignUp from './components/signup.js'
import Header from './components/Home/Header'
import Footer from './components/Home/Footer'
const App = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/Signup' element={<SignUp/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Blog' exact element={<Home/>} ></Route>
        <Route path='/blog/:id' element={<Blog/>}></Route>
      </Routes>
      <Footer DevName= 'Sustainerzz'></Footer>
    </>
  );
};

export default App;
