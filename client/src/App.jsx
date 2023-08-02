import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import './App.css'
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3007";
import Home from './component/Home/Home';
import { getProducts } from './redux/actions';
import Landing from './component/Landing/Landing';

function App() {
  const dispatch = useDispatch()
useEffect(()=>{
 dispatch(getProducts())
},[])
  return (
    <>
    <Route>
      <Route path='/' element={<Landing/>} />
    </Route>
      <Routes>
      <Route path="/home" element={<Home/>} />
      </Routes>
    </>
  )
}
export default App
