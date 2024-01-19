import React,{useEffect, useState} from 'react'

function SalesVelocity({ salesData }) {
   // Check if salesData is defined and not an empty array
   if (!salesData || !salesData.length) {
    return (
      <div>
        <p>No sales data available.</p>
      </div>
    );
  }
  // Assuming salesData is sorted by date in ascending order
  const totalSales = salesData.reduce((total, sale) => total + sale.totalAmount, 0);
  const salesDays = salesData.length; // Assuming each sale is one day

  const salesVelocity = (totalSales / salesDays).toFixed(2);

  return (
    <div style={{boxShadow:" 1px 2px 2px 1px rgba(0, 0, 0, 0.5)", width:"30%",padding: "20px 20px"}}>
      <h2 style={{margin:"auto",textAlign:"center"}}>Sales Velocity</h2>
      <p style={{textAlign:"center"}}> ${salesVelocity} per day</p>
    </div>
  );
};


export default SalesVelocity