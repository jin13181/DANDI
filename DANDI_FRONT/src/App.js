
import './App.css';
import React from 'react';
import {Route, BrowserRouter,Routes} from 'react-router-dom';
//import AppMain from './client/pages/AppMain';
import Login from './client/pages/Login/Login';
import Register from './client/pages/Register/Register'
import Home from './client/pages/Home/Home';
import Map from './client/pages/Map/Map';
import QR from './client/pages/QR/QR';
import Stamp from './client/pages/Stamp/Stamp';
import Mypage from './client/pages/Mypage/Mypage';
import Header from './client/pages/Common/Header';




function App() {

  return (
    <div id="app">
       <BrowserRouter>
       <Header/>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/map' element={<Map/>} />
          <Route path='/qr' element={<QR/>} />
          <Route path='/stamp' element={<Stamp/>} />
          <Route path='/mypage' element={<Mypage/>} />
        </Routes>
       </BrowserRouter>
      </div>
  )
}

export default App;
