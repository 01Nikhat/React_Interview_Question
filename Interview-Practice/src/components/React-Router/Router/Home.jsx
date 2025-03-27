import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./Navbar";
import About from "./About";
import Product from "./Product";

export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/about' element={<About />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}


