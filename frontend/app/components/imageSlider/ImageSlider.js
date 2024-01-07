"use client"
// MovingImage.jsx
import React, { useState, useEffect } from 'react';
import styles from './MovingImage.module.css';



const MovingImage = ({ imageUrls }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the current image index
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000); // Change image every 5 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [5000]);

  return (
    <div className={styles['moving-image-container']}>
      <img
        className={styles['moving-image']}
        src={`/${imageUrls[currentImageIndex]}`}
        alt={`Moving Image ${currentImageIndex}`}
      />
    </div>
  );
};

export default MovingImage;
