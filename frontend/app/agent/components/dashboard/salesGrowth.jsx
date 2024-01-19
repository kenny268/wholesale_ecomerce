import React from 'react'

function SalesGrowth({ salesData }) {
   // Check if salesData is defined and not an empty array
   if (!salesData || !salesData.length) {
    return (
      <div>
        <p>No sales data available.</p>
      </div>
    );
  }
    // Assuming salesData is sorted by date in ascending order
    const currentPeriodSales = salesData[salesData.length - 1].totalAmount;
    const previousPeriodSales = salesData[salesData.length - 2].totalAmount; // Example: previous month
  
    const salesGrowth = ((currentPeriodSales - previousPeriodSales) / previousPeriodSales) * 100;
  
    return (
      <div style={{boxShadow:" 1px 2px 2px 1px rgba(0, 0, 0, 0.5)", width:"30%",padding: "20px 20px"}}>
        <h2 style={{margin:"auto",textAlign:"center"}}>Sales Growth</h2>
        <p style={{textAlign:"center"}}> {salesGrowth.toFixed(2)}%</p>
      </div>
    );
  };

export default SalesGrowth