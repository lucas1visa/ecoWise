import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";
import Home from './component/Home/Home';
import { getProducts } from './redux/actions';
import Landing from './component/Landing/Landing';
import  NavbarComponent  from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';

function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch()
useEffect(()=>{
 dispatch(getProducts())
},[])
  return (
    <>
      <div>{pathname !== '/' && <NavbarComponent/>}</div>
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path="/home" element={<Home/>} />
      </Routes>
      <div>{pathname !== '/' && <Footer/>}</div>
    </>
  )
}
export default App
