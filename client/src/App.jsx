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
import NavbarComponent from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import UserProfile from './component/UserProfile/UserProfile';
import NewProduct from './component/NewProduct/NewProduct';

function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="App-container">
      <div className="container">
        <div>{pathname !== '/' && <NavbarComponent />}</div>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/account/register/" element={<UserProfile />} />
          <Route path="/product/register/" element={<NewProduct />} />
        </Routes>
        <div>{pathname !== '/' && <Footer />}</div>
      </div>
    </div>
  );
}

export default App;
