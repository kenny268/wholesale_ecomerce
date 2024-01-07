// ProductPage.jsx
import React from 'react';
import styles from '@/app/components/items/ProductPage.module.css';
import Navbar from '../Navbar';
import Footer from '../footer/Footer';
import Image from 'next/image';

const ProductPage = ({ products }) => {
  const imageUrls = ['assets/close.jpg', 'assets/cybermondaysales.jpg', 'assets/cybersales.jpg', 'assets/wepik.jpeg'];
    
  return (
    <div className={styles.container}>

      <Navbar/>
      <div className={styles.main}>
        <div className={styles.content}>       
          {/* Product Listing */}
          <div className={styles.productList}>
            {products.map(product => (
              <div key={product._id} className={styles.productCard}>
                <Image
                src={`http://localhost:4000/${product.image.path}`}        
                alt={product.image.path} 
                width={150}
                height= {120}
                />
              
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default ProductPage;
