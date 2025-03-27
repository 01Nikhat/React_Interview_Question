import {Link} from "react-router-dom";

import React from 'react'

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/product">Product</Link>
    </nav>
  )
}
