import React from 'react';
import styles from '@/app/components/items/LeftNav.module.css';

const LeftNav = () => {
  return (
    <div className={styles.leftNav}>
      <h2>Categories</h2>
      <ul>
        <li>Use Client</li>
        {/* Add other categories as needed */}
      </ul>
    </div>
  );
};

export default LeftNav;
