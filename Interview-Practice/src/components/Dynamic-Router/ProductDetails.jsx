import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails({products}) {
  const {id} = useParams();
  const product = products.find((e)=>e.id === parseInt(id));
  if(!product){
    return <h2>Product Not Found</h2>
  }
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
    </div>
  )
}
