import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Team from './pages/Team';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path={"about-us"} element={<AboutUs/>}/>
      <Route path={"team"} element={<Team/>}/>
      <Route path={"services"} element={<Services/>}/>
      <Route path={"contact-us"} element={<ContactUs/>}/>
    </Routes>
  </BrowserRouter>
);