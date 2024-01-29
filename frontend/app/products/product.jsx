'use client';
// ProductCard.js

import React from 'react';
import styles from '@/app/products/prooduct.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation'

const ProductCard = ({ product }) => {
    const router = useRouter();

    const handleAddToCart = () => {

        // Implement your logic for adding the product to the cart
        console.log(`Added ${product.name} to the cart`);
    };


    
    const handleRedirect = (product) => {
        
        const productData = JSON.stringify(product)
        
        // Implement your logic for redirecting to the product detail page
        router.push({
            pathname: '/products/description', // Specify the destination route
            query: {productData}, // Pass data in the query object
        });
    };



    return (
        <div className={styles.productCard}>

            <div className={styles.imageContainer}>            
                <Image
                src={`http://localhost:4000/${product.image.path}`}
                alt={product.name}
                width={150}
                height={100}
                onClick={()=>handleRedirect(product)}
            />
            </div>

            <h3>{product.name}</h3>
            <div className={styles.productDetails} onClick={()=>handleRedirect(product)}>
                <p>${product.price}</p>
                <p>Stock: {product.stockQuantity}</p>
            </div>
            <button className={styles.addToCartBtn} onClick={handleAddToCart}>
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
