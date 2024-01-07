// @server
import React from 'react'
import Footer from '@/app/components/footer/Footer';
import Navbar from '@/app/components/Navbar';
import CategorySearch from '@/app/category/category';

  async function getProducts(id) {
    const response = await fetch(`http://localhost:4000/products/category/${id}`,{
      next:{
        revalidate: 1,
      }
    });
    return response.json();
  }


async function Category({params}) {

  const id = params.id

  const products = await getProducts(id);


  return (
    <div>
      <Navbar/>
      <CategorySearch products={products}/>
      <Footer/>
    </div>
    
  )
}

export default Category