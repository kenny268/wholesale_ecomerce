'use client';
// ProductPage.jsx
import React from 'react';
import styles from '@/app/products/category/Category.module.css';
import Image from 'next/image';
import { redirect } from 'next/navigation'
import Link from 'next/link';


const CategoryPage = ({ categories }) => {
  const Redirect = (id) => {
    console.log("Redirecting");
    redirect(`/products/${id}`)
  }    
  return (
    <div className={styles.container}>
      
      <div className={styles.main}>
        <div className={styles.content}>       
          {/* Category Listing */}
          <div className={styles.categoryList}>
            {categories.map(category => (
              <Link key={category._id} className={styles.categoryCard} href={`products/${category._id}`}>
                <Image
                src={`http://localhost:4000/${category.image.path}`}        
                alt={category.image.path} 
                width={150}
                height= {120}
                />
                <h3>{category.category}
               
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Footer */}
    </div>
  );
};

export default CategoryPage;
