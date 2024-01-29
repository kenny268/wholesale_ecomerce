'use client'
import React, { useState } from 'react';
import styles from './cart.module.css';
import Link from 'next/link';

const ShoppingCart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: 'Product 1', price: 19.99, image: 'product1.jpg', quantity: 1 },
    { id: 2, name: 'Product 2', price: 24.99, image: 'product2.jpg', quantity: 1 },
    // Add more products as needed
  ]);

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const removeItem = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div>
      <header className={styles.header}>
        <h1>Shopping Cart</h1>
      </header>

      <div className={styles.container}>
        {cart.map((product) => (
          <div key={product.id} className={styles.productRow}>
            <img src='/logo.png' alt={product.name} className={styles.productImage} />
            <div className={styles.productDetails}>
              <p className={styles.productTitle}>{product.name}</p>
              <p className={styles.productPrice}>${(product.price * product.quantity).toFixed(2)}</p>
              <div className={styles.quantityControls}>
                <button onClick={() => updateQuantity(product.id, product.quantity - 1)} disabled={product.quantity === 1} style={{ marginRight: '5px' }}>-</button>
                <span style={{ margin: '0 5px' }}>{product.quantity}</span>
                <button onClick={() => updateQuantity(product.id, product.quantity + 1)} style={{ marginLeft: '5px' }}>+</button>
              </div>
              <p className={styles.removeButton} onClick={() => removeItem(product.id)}>X</p>
            </div>
          </div>
        ))}
        <div className={styles.productCheckout}>
          <div className={styles.totalPrice}>
            <p><strong>Total Price:</strong> {calculateTotalPrice().toFixed(2)} KSh</p>
          </div>
          <Link href= {{
            pathname: '/products/checkout',
            query: { name: `${cart}` },
          }}className={styles.checkoutBtn} >Proceed to Checkout</Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
