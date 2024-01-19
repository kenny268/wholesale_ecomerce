import React from 'react'
import Image from 'next/image';
import styles from './StoreImage.module.css'

function StoreImage() {
  return (
    <div >
        <Image
              src="/assets/store.jpg"
              width={600}
              height={500}
              alt="Store"
              priority={true}
              className={styles.image}
              />
    </div>
  )
}

export default StoreImage