'use client'
import React, { useState } from 'react';
import styles from './TrackingInformation.module.css'; 

const TrackingInformation = () => {
  const [orderId, setOrderId] = useState('');
  const [trackingInfo, setTrackingInfo] = useState(null);

  const handleInputChange = (e) => {
    setOrderId(e.target.value);
  };
  const mockDataArray = [
    {
      status: 'In Transit',
      estimatedDelivery: '2024-02-01',
      trackingNumber: 'XYZ987654321',
      carrier: 'Mock Shipping',
      shippingMethod: 'Standard',
      shippingDate: '2024-01-25',
      arrivalDate: '2024-02-01',
      currentLocation: 'Sorting Facility B',
      deliveryAttempts: 2,
      receiverName: 'Jane Doe',
      additionalNotes: 'Handle with care',
    },
    {
      status: 'Delivered',
      estimatedDelivery: '2024-01-18',
      trackingNumber: 'LMN456789012',
      carrier: 'SimuShip',
      shippingMethod: 'Priority',
      shippingDate: '2024-01-10',
      arrivalDate: '2024-01-18',
      currentLocation: 'Front Door',
      deliveryAttempts: 1,
      receiverName: 'Bob Smith',
      additionalNotes: 'Signature required',
    },
    {
      status: 'Pending Shipment',
      estimatedDelivery: '2024-02-05',
      trackingNumber: 'PQR123456789',
      carrier: 'Swift Logistics',
      shippingMethod: 'Next Day Air',
      shippingDate: '2024-02-01',
      arrivalDate: null,
      currentLocation: 'Warehouse C',
      deliveryAttempts: 0,
      receiverName: 'Alice Johnson',
      additionalNotes: 'Fragile items inside',
    },
    // Add more variations as needed
  ];
  

  const findTrackingInfoByTrackingNumber = (trackingNumber) => {
    return mockDataArray.find(item => item.trackingNumber === trackingNumber) || null;
  };


  const handleTrackOrder = async (e) => {
    // e.preventDefault();

    // // Assuming you have an API endpoint for tracking orders
    // const apiUrl = `https://your-api.com/track-order/${orderId}`;

    // try {
    //   const response = await fetch(apiUrl);
    //   const data = await response.json();

    //   // Assuming the API returns tracking information
    //   setTrackingInfo(data);

    //   // Handle other UI or state updates based on the tracking info
    // } catch (error) {
    //   console.error('Error fetching tracking information:', error.message);
    //   // Handle error states or messages
    // }

    e.preventDefault();

    // Call the filter method to find tracking information by tracking number
    const foundTrackingInfo = findTrackingInfoByTrackingNumber(orderId);

    // Update the tracking information in the component state
    if(foundTrackingInfo){
      setTrackingInfo(foundTrackingInfo);
    }
    else{
      setTrackingInfo(null)
      setOrderId('')
      alert('Order not found');
    }
    

  };

  return (
    <div className={styles.container}>
      
      <form onSubmit={handleTrackOrder} className={styles.formContainer}>
      <h2 className={styles.h1}>Track Your Order</h2>
      <div>
        <label className={styles.formLabel}>Order ID:</label>
          <input
            type="text"
            value={orderId}
            onChange={handleInputChange}
            className={styles.inputField}
          />
        
        <button type="submit" className={styles.submitButton}>Track Order</button>
        </div>
      </form>

      {trackingInfo && (
  <div className={styles.trackingInfoContainer}>
    <h3>Tracking Information</h3>
    <p className={styles.trackingInfoLabel}>Status: {trackingInfo.status}</p>
    <p className={styles.trackingInfoLabel}>Estimated Delivery: {trackingInfo.estimatedDelivery}</p>

    {/* Additional tracking information fields */}
    {trackingInfo.trackingNumber && (
      <p className={styles.trackingInfoLabel}>Tracking Number: {trackingInfo.trackingNumber}</p>
    )}

    {trackingInfo.carrier && (
      <p className={styles.trackingInfoLabel}>Carrier: {trackingInfo.carrier}</p>
    )}

    {trackingInfo.shippingMethod && (
      <p className={styles.trackingInfoLabel}>Shipping Method: {trackingInfo.shippingMethod}</p>
    )}

    {trackingInfo.shippingDate && (
      <p className={styles.trackingInfoLabel}>Shipping Date: {trackingInfo.shippingDate}</p>
    )}

    {trackingInfo.arrivalDate && (
      <p className={styles.trackingInfoLabel}>Expected Arrival Date: {trackingInfo.arrivalDate}</p>
    )}

    {trackingInfo.currentLocation && (
      <p className={styles.trackingInfoLabel}>Current Location: {trackingInfo.currentLocation}</p>
    )}

    {trackingInfo.deliveryAttempts && (
      <p className={styles.trackingInfoLabel}>Delivery Attempts: {trackingInfo.deliveryAttempts}</p>
    )}

    {trackingInfo.receiverName && (
      <p className={styles.trackingInfoLabel}>Receiver Name: {trackingInfo.receiverName}</p>
    )}

    {trackingInfo.additionalNotes && (
      <p className={styles.trackingInfoLabel}>Additional Notes: {trackingInfo.additionalNotes}</p>
    )}

    
  </div>
)}

    </div>
  );
};

export default TrackingInformation;
