'use client'
// NavigationBar.js
import React,{use, useState} from 'react';
import styles from './NavigationBar.module.css';
import { BiMessageRounded } from "react-icons/bi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import Image from 'next/image';
import MessagePage from './messagePage';

const NavigationBar = () => {
  const [isMessagePageVisible, setMessagePageVisibility] = useState(false);

  const toggleMessagePage = () => {
    setMessagePageVisibility(!isMessagePageVisible);
  };
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
        <h2>Business Name</h2>
      </div>
      <div className={styles.message} onClick={toggleMessagePage}>
        <BiMessageRounded />
      </div>
      <div className={styles.notifications}>
        <MdOutlineNotificationsActive  />
      </div>
      <div className={styles.user}>
        <FaRegCircleUser/>
      </div>
      {isMessagePageVisible &&<div className={styles.displayMessage}>
       <MessagePage />      
      </div>}
    </div>
  );
}

export default NavigationBar;
