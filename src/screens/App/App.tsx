import React from 'react';
import './App.css';
import Layout from '../Default';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactUs from '../ContactUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route element={<Layout />}>
          <Route path="/"></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
