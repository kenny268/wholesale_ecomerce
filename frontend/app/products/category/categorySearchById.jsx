'use client'
import React from 'react'
import ProductCard from '../product'
import styles from '@/app/products/prooduct.module.css';


function CategorySearch({products}) {


  if(!products) return (
    <div>
      <h1>Loading...</h1>
    </div>)
    
  return (
    <div className={styles.productList}>
      {products && products.map(product => (
        <div key={product.id} >
            <ProductCard product={product}/>
        </div>
      ))}
    </div>
  )
}

export default CategorySearch