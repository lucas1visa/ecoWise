import { useState } from 'react'
import './App.css'
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";
import Home from './component/Home/Home';

function App() {

  return (
    <>
      <Routes>
      <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}
export default App
