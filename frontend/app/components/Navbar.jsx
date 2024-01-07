// components/Navbar.js
import React from 'react';
import styles from './Navbar.module.css';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { FiList } from "react-icons/fi";
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      {/* Top Navbar */}
      <div className={styles.topNavbar}>
        <div className={styles.logo}>
          {/* <img src="logo.png" alt="Logo" /> */}
          <Image
            src="/logo.png"
            alt="Logo"
            width={360}
            height={80}
            />
        </div>

        <form className={styles.search}>
          <input type="text" placeholder="Search products..." />
          <span className={styles.searchIcon}><FaSearch /></span>
        </form>
        <div className={styles.icons}>
          <span className={styles.cartIcon}><FaShoppingCart/> <p>Cart</p></span>
          <span className={styles.userIcon}><FaUser/> <p>Account</p></span>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className={styles.bottomNavbar}>
        <div className={styles.bottomNavbarLeft}>
          <span><span className={styles.categories}><FiList /></span>Categories</span>
          <span>Best Sellers</span>
          <span>Today's Deals</span>
          <span>Customer Service</span>
          <span>New Releases</span>
          <span>Gift Cards</span>
          <span>Find a Gift</span>
          <span>Sell</span>
        </div>
        <div className={styles.bottomNavbarRight}>
          <span className={styles.help}>Help</span>
          <span className={styles.sell}>Sell</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
