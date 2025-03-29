import React from 'react';
import { lazy, Suspense } from 'react';
import { Link, BrowserRouter, Routes,Route } from 'react-router-dom';
import Navbar from './Navbar';


const About = lazy(()=>import('./About'));
const Contact = lazy(()=>import('./Contact'));
export default function LazyHome() {
  return (
    
        <div>
          <Navbar />
          <Suspense fallback={<div><h2>Loading...</h2></div>}>
            
              <Routes>
                <Route path='/' element={<h2>Home Page</h2>} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
              </Routes>
          
          </Suspense>
        </div>
      
  )
}
