'use client'
import React,{useState} from 'react';
import styles from './MainContent.module.css';
import TotalSales from '../totalSales';
import SalesGrowth from '../salesGrowth';
import SalesVelocity from '../salesVelocity';
import AddNewProduct from '../addNewProduct';
import OrderManagement from '../orderManagement';
import ViewMyProducts from '../viewMyProducts';
import ShippingStatus from '../shippingStatus';
import TrackingInformation from '../trackingInformation';
import { useDashboardContext } from '../context/hooks/useContextHooks';
import StoreImage from '../storeImage';




const MainContent = () => {
  const {steps} = useDashboardContext();
  const step = steps.steps;
  
    
      
  const renderPage = () => {
    const salesData = [
      { saleID: 1, orderID: 101, saleDate: new Date('2022-01-01T12:05:00Z'), totalAmount: 99.98 },
      { saleID: 2, orderID: 102, saleDate: new Date('2022-01-02T14:30:00Z'), totalAmount: 149.95 },
      { saleID: 3, orderID: 103, saleDate: new Date('2022-01-03T10:15:00Z'), totalAmount: 75.50 },
    ]
  
    switch (step) {
      case 0:
        return (
          <div className={styles.menuContent}>
            <div className={styles.overview}>
              <StoreImage/>
              <div className={styles.overviewItems}>
                <TotalSales salesData={salesData} />
                <SalesVelocity salesData={salesData}/>
                <SalesGrowth salesData={salesData}/>
              </div>           
            </div> 
          </div>
        );
      case 1:
        return (
          <div className={styles.menuContent}>
            <OrderManagement />
          </div>
        );
      case 2:
        return (
          <div className={styles.menuContent}>
            <ViewMyProducts />
          </div>
        );
      case 3:
        return (
          <div className={styles.menuContent}>
            <ShippingStatus />
          </div>
        );
      case 4:
        return (
          <div className={styles.menuContent}>
            <TrackingInformation />
          </div>
        );
      case 5:
        return (
          <div className={styles.menuContent}>
            <AddNewProduct />
          </div>
        );
      default:
        return (
          <div className={styles.menuContent}>
            <div className={styles.overview}>
              <StoreImage/>
              <div className={styles.overviewItems}>
                <TotalSales salesData={salesData} />
                <SalesVelocity salesData={salesData}/>
                <SalesGrowth salesData={salesData}/>
              </div>           
            </div>          
          </div>
        );
    }
 };

 return (
  <div className={styles.mainContent}>
    {/* Render the main content area */}
    {renderPage()}
  </div>
);
    
  
}

export default MainContent;