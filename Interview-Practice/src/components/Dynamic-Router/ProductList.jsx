import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductList({products}) {
  return (
    <div>
      <h2>Product Details</h2>
      <ul>
        {products.map((product)=>(
        <li key={product.id}>
          <Link to={`/product/${product.id}`}>{product.name} - {product.price}</Link>
        </li>
        ))}
      </ul>
    </div>
  )
}
