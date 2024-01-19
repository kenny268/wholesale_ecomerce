'use client'
import React from 'react';
import styles from './LeftNavBar.module.css';
import { FaSalesforce } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { MdBrowserUpdated } from "react-icons/md";
import { MdAddBusiness } from "react-icons/md";
import { GrOverview } from "react-icons/gr";
import { useDashboardContext } from '../context/hooks/useContextHooks';



const LeftNavBar = () => {
  const {dispatch} = useDashboardContext()
  const handleClick = (id) => {
    dispatch({type:'NAVIGATION_BAR',payload:{steps:id}});
  
  }
  return (
    <div className={styles.leftNavbar}>
        <div onClick={()=>handleClick(0)} className={styles.bar} >
          <p className={styles.item}><span className={styles.span}><GrOverview/> </span> Overview</p>
        </div>

        <div onClick={()=>handleClick(1)} className={styles.bar}>
          <p className={styles.item}><span className={styles.span}><FaSalesforce /></span> Order</p>
        </div>

        <div onClick={()=>handleClick(2)} className={styles.bar}>
          <p className={styles.item}><span className={styles.span}><FaProductHunt /></span> Product </p>
        </div>

        <div onClick={()=>handleClick(3)} className={styles.bar}>
          <p className={styles.item}><span className={styles.span}><FaShippingFast /></span> Shipping</p>
        </div>

        <div onClick={()=>handleClick(4)} className={styles.bar}>
          <p className={styles.item}><span className={styles.span}><MdBrowserUpdated /></span> Tracking</p>
        </div>

        <div onClick={()=>handleClick(5)} className={styles.bar}>
          <p className={styles.item}><span className={styles.span}><MdAddBusiness /></span> New Product</p>
        </div>

      </div>
  );
}

export default LeftNavBar;
