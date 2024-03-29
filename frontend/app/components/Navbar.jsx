'use client'
// components/Navbar.js
import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { FiList } from "react-icons/fi";
import Image from 'next/image';
import Link from 'next/link';

const Navbar = ({data}) => {
  const [showShortCut,setShowShortCut] = useState(false)
  const toggleShowShortCut = () =>setShowShortCut(!showShortCut)
  

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(null);
  
  // console.log('filtered data',filteredData)
  // console.log(data)

  useEffect(() => {

    if (data && searchTerm.trim() !== '') {

      const filteredData = data.filter(item =>
        item.productName && item.productName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filteredData);
    } else {
      setFilteredData([]);
    }
  }, [data, searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  

  return (
    <div>
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
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchTerm}
            onChange={handleInputChange}
          />
          <span className={styles.searchIcon}><FaSearch /></span>
        </form>
        <div className={styles.icons}>     
          <Link className={styles.cartIcon} href="/products/cart"><FaShoppingCart/> <p>Cart</p></Link>
          <span className={styles.userIcon} onClick={toggleShowShortCut}><FaUser/> <p>Account</p></span>
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
      {/* Shortcuts */}
      {showShortCut &&<div className={styles.shortCuts}>
        <ul className={styles.shortCutList}>
          <li className={styles.shortCutItem}>
            <Link className={styles.shortCutLink} href="/user/signup">
              <p>Register</p>
            </Link>
          </li>
          <li className={styles.shortCutItem}>
            <Link className={styles.shortCutLink} href="/user/login">
              <p>Login</p>
            </Link>
          </li>
          <li className={styles.shortCutItem}>
            <span className={styles.shortCutLink} href="/">
              <p>Profile</p>
            </span>
          </li>
          <li className={styles.shortCutItem}>
            <span className={styles.shortCutLink} href="/">
              <p>Logout</p>
            </span>
          </li>
        </ul>
      </div>}
      
      {/* Serch Bar */}
      {searchTerm && <div className={styles.searchResults} >
      <ul >
        {filteredData && filteredData.map((item, index) => (
          <li key={item._id}>
            <Link href={`/products/description/${item._id}`} key={index}>{item.productName} - {item.type}</Link>
          </li>
        ))}
      </ul>
    </div>}
  </div>
  );
};

export default Navbar;