import React from 'react';
import CategoryPage from '@/app/products/category/category';
import Footer from './components/footer/Footer';
import Navbar from './components/Navbar';
import styles from '@/app/products/category/Category.module.css';
import MovingImage from '@/app/components/imageSlider/ImageSlider';

async function getCategory() {
  const response = await fetch('http://localhost:4000/category', {
    next: {
      revalidate: 1,
    },
  });

  return response.json();
}

async function getProducts() {
  const response = await fetch('http://localhost:4000/products',{
    next:{
      revalidate: 1,
    }
  });

  return response.json();
}

export default async function Home() {
  const categories = await getCategory();
  const products = await getProducts();
  // eslint-disable-next-line max-len
  const imageUrls = ['assets/close.jpg', 'assets/cybermondaysales.jpg', 'assets/cybersales.jpg', 'assets/wepik.jpeg'];


  return (
    <>
      <Navbar data = {products} />
      <div className={styles.main}>
        <div>
          <MovingImage imageUrls={imageUrls} />
        </div>
        <CategoryPage categories={categories}/>
      </div>
      <Footer/>
    </>
  );
}
