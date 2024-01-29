import React from 'react'
import ProductPage from '@/app/components/items/productpage';

async function getProducts() {
  const response = await fetch('http://localhost:4000/products',{
    next:{
      revalidate: 1,
    }
  });

  return response.json();
}

async function ProductsPage() {
  const products = await getProducts();
  return (
    <div>
       <ProductPage products={products} />
    </div>
  )
}

export default ProductsPage