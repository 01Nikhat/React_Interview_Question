import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import ProductList from './ProductList';


export default function Home() {
  const products = [
    {id:1,name:"Laptop", price: '$1000'},
    {id:2, name:"Phone", price:'$700'},
    {id:3, name:"Tablet", price:'$500'}
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProductList products = {products} />} />
        <Route path='/product/:id' element={<ProductDetails products = {products} />} />
      </Routes>
    </BrowserRouter>
  )
}
