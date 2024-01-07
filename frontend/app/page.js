import React from 'react'
import CategoryPage from '@/app/components/category/category';
import Footer from './components/footer/Footer';
import Navbar from './components/Navbar';
import styles from '@/app/components/category/Category.module.css';
import MovingImage from '@/app/components/imageSlider/ImageSlider';

async function getCategory() {
  const response = await fetch('http://localhost:4000/category',{
    next:{
      revalidate: 1,
    }
  });

  return response.json();
}

export default async function Home() {
  const categories = await getCategory();
  const imageUrls = ['assets/close.jpg', 'assets/cybermondaysales.jpg', 'assets/cybersales.jpg', 'assets/wepik.jpeg'];

  
  return (
    <>
      <Navbar/>
      <div className={styles.main}>
        <div>   
          <MovingImage imageUrls={imageUrls} />
        </div>
        <CategoryPage categories={categories}/>
      </div>
      <Footer/>    
    </>
  )
}

