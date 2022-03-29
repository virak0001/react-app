import React from 'react';
import './App.css';
import Layout from '../../components/Layouts/Default';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactUs from '../ContactUs';
import IndexPage from '..';
import AboutUs from '../AboutUs';
import SignIn from '../Loggin';
import SignUp from '../SignUp';

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
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
