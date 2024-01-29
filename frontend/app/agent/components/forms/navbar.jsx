import React from 'react'
import styles from './Register.module.css'
import Image from 'next/image'
import Link from 'next/link'
function Navbar({info}) {
    const {title,path,name}=info
  return (
    <div className={styles.navbar}>
        <div className={styles.logo}>
            <Image
                src="/logo.png"
                alt="Logo"
                width={360}
                height={80}
            />  
        </div>
        <div className={styles.bussinessName}>
            <h1>{title}</h1>
        </div>
        <div className={styles.bussinessName}>
            <Link href={path}>{name}</Link>
        </div>
        
    </div>
  )
}

export default Navbar