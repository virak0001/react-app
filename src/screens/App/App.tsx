import React from 'react';
import './App.css';
import Layout from '../../components/Layouts/Default';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactUs from '../ContactUs';
import IndexPage from '../indexPage';
import AboutUs from '../AboutUs';
import Tours from '../Tours';
import Explore from '../Explore';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage/>}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
     
          <Route path="/Tours" element={<Tours/>}></Route>
          <Route path="/Explore" element={<Explore />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
