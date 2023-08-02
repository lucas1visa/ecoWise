import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import './App.css'
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3007";
import Home from './component/Home/Home';
import { getProducts } from './redux/actions';


function App() {
  const dispatch = useDispatch()
useEffect(()=>{
  dispatch(getProducts())
},[])
  return (
    <>
      <Routes>
      <Route path="/home" element={<Home/>} />
      </Routes>
    </>
  )
}
export default App
