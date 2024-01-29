'use client'
// NavigationBar.js
import React,{useEffect, useState} from 'react';
import styles from './NavigationBar.module.css';
import { BiMessageRounded } from "react-icons/bi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import Image from 'next/image';
import MessagePage from './messagePage';
import NotificationPage from './notificationsPage';
import UserPage from './userPage';

const NavigationBar = () => {
  const [isMessagePageVisible, setMessagePageVisibility] = useState(false);
  const [isNotificationPageVisible, setNotificationPageVisibility] = useState(false);
  const [readCount, setReadCount] = useState(null);
  const [isUserPageVisible, setUserPageVisibility] = useState(false);
  const [isUserAuthenticated, setUserAuthentication] = useState(false);
  const [user, setUser] = useState(null);
  const [notifications, setNotifications] = useState(null);

  
  const data = [
    {
      id: 1,
      type: 'Delivered',
      viewed:"read",
      order: {
        id: 2,
        order_number: 'ABC123',
        created_at: '2023-03-27T10:00:00Z'
      },
      product: {
        id: 3,
        name: 'Example Product',
        image: 'https://example.com/product.jpg',
        price: 100
      },
      recipient: {
        id: 4,
        name: 'John Doe'
      },
      created_at: '2023-03-27T12:00:00Z'
      
    },
    {
      id: 1,
      type: 'Delivered',
      viewed:"read",
      order: {
        id: 2,
        order_number: 'ABC123',
        created_at: '2023-03-27T10:00:00Z'
      },
      product: {
        id: 3,
        name: 'Example Product',
        image: 'https://example.com/product.jpg',
        price: 100
      },
      recipient: {
        id: 4,
        name: 'John Doe'
      },
      created_at: '2023-03-27T12:00:00Z'
      
    },
    {
      id: 1,
      type: 'Delivered',
      viewed:"read",
      order: {
        id: 2,
        order_number: 'ABC123',
        created_at: '2023-03-27T10:00:00Z'
      },
      product: {
        id: 3,
        name: 'Example Product',
        image: 'https://example.com/product.jpg',
        price: 100
      },
      recipient: {
        id: 4,
        name: 'John Doe'
      },
      created_at: '2023-03-27T12:00:00Z'
      
    },
    {
      id: 1,
      type: 'Delivered',
      viewed:"read",
      order: {
        id: 2,
        order_number: 'ABC123',
        created_at: '2023-03-27T10:00:00Z'
      },
      product: {
        id: 3,
        name: 'Example Product',
        image: 'https://example.com/product.jpg',
        price: 100
      },
      recipient: {
        id: 4,
        name: 'John Doe'
      },
      created_at: '2023-03-27T12:00:00Z'
      
    },{
      id: 1,
      type: 'Delivered',
      viewed:"read",
      order: {
        id: 2,
        order_number: 'ABC123',
        created_at: '2023-03-27T10:00:00Z'
      },
      product: {
        id: 3,
        name: 'Example Product',
        image: 'https://example.com/product.jpg',
        price: 100
      },
      recipient: {
        id: 4,
        name: 'John Doe'
      },
      created_at: '2023-03-27T12:00:00Z'
      
    },{
      id: 1,
      type: 'Delivered',
      viewed:"read",
      order: {
        id: 2,
        order_number: 'ABC123',
        created_at: '2023-03-27T10:00:00Z'
      },
      product: {
        id: 3,
        name: 'Example Product',
        image: 'https://example.com/product.jpg',
        price: 100
      },
      recipient: {
        id: 4,
        name: 'John Doe'
      },
      created_at: '2023-03-27T12:00:00Z'
      
    },{
      id: 1,
      type: 'Delivered',
      viewed:"read",
      order: {
        id: 2,
        order_number: 'ABC123',
        created_at: '2023-03-27T10:00:00Z'
      },
      product: {
        id: 3,
        name: 'Example Product',
        image: 'https://example.com/product.jpg',
        price: 100
      },
      recipient: {
        id: 4,
        name: 'John Doe'
      },
      created_at: '2023-03-27T12:00:00Z'
      
    },
    {
      id: 2,
      type: 'Ordered',
      viewed:"read",
      order: {
        id: 5,
        order_number: 'DEF456',
        created_at: '2023-03-27T11:00:00Z'
      },
      recipient: {
        id: 4,
        name: 'John Doe'
      },
      created_at: '2023-03-27T13:00:00Z'
    },
    {
      id: 3,
      type: 'Delivered',
      viewed:"unread",
      order: {
        id: 6,
        order_number: 'GHI789',
        created_at: '2023-03-27T10:30:00Z'
      },
      product: {
        id: 7,
        name: 'Another Example Product',
        image: 'https://example.com/product2.jpg',
        price: 200
      },
      recipient: {
        id: 4,
        name: 'John Doe'
      },
      created_at: '2023-03-27T12:30:00Z'
    },
    {
      id: 4,
      type:'Failed',
      viewed:"read",
      order: {
        id: 1,
        order_number: "ABC123",
      created_at: '2023-03-27T13:00:00Z'
      },
      recipient:{
        id: 1,
        name: "Jane Smith"
      },
      created_at: '2023-03-27T13:00:00Z'

    }    

  ];
  
  useEffect(()=>{
    setNotifications(data);
  },[])

  useEffect( ()=>{
    
    if(notifications){
      const newNotifications = notifications.filter(notification => notification.viewed === 'unread');
      
      if(newNotifications.length>0){
        setReadCount(newNotifications.length);
      }
      }
    
  },[notifications] );

 
  const toggleMessagePage = () => {
    setMessagePageVisibility(!isMessagePageVisible);
    setNotificationPageVisibility(false);
    setUserPageVisibility(false);
  };

  const toggleUserPage = () => {
    setUserPageVisibility(!isUserPageVisible);
    setMessagePageVisibility(false);
    setNotificationPageVisibility(false);

  };



  const toggleNotificationPage = () => {
    setNotificationPageVisibility(!isNotificationPageVisible);
    setMessagePageVisibility(false);
    setUserPageVisibility(false);
  }

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
      <div className={styles.notifications} onClick={toggleNotificationPage}>
        <MdOutlineNotificationsActive  /> 
        {readCount && <span style={{fontSize:"0.5em",padding:"0",margin:"0"}}>{readCount}</span>}
        
      </div>
      <div className={styles.user} onClick={toggleUserPage}>
        <FaRegCircleUser/>
      </div>
      {isMessagePageVisible &&<div className={styles.displayMessage}>
       <MessagePage />      
      </div>}

      {isNotificationPageVisible &&<div className={styles.notificationPage}>
        {notifications && notifications.map((notification, index) => (
              <div key={index}>                 
                  <NotificationPage key={index} notification={{created_at:(notification.created_at),type:(notification.type),name:(notification.recipient.name)}} />
              </div>))}
      </div>}

      {isUserPageVisible && <div className={styles.userPage}>
        <UserPage/>
        </div>
      }

      
    </div>
  );
}

export default NavigationBar;
