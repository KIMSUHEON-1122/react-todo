import React from 'react'
import Products from './Products'
import { useState } from 'react';

const AppProducts = () => {
    const [ShowProducts, setShowProducts] = useState(true);
  return (
    <div>
        {ShowProducts && <Products />}
        <button onClick={()=>setShowProducts((aa)=>!aa)}>Toggle</button>
    </div>
  )
}

export default AppProducts