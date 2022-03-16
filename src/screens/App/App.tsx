import React from 'react';
import './App.css';
import Layout from '../Default';
import { Route, Routes } from 'react-router-dom';
import ContactUs from '../ContactUs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/contact-us" element={<ContactUs />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
