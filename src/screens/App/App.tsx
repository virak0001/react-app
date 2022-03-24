import React from 'react';
import './App.css';
import Layout from '../../components/Layouts/Default';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactUs from '../ContactUs';
import IndexPage from '..';
import AboutUs from '../AboutUs';
import SignIn from '../SignIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage/>}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
