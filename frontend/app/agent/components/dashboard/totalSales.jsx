import React from 'react'

function TotalSales({ salesData }) {
   // Check if salesData is defined and not an empty array
   if (!salesData || !salesData.length) {
    return (
      <div>
        <p>No sales data available.</p>
      </div>
    );
  }
  const totalSales = salesData.reduce((total, sale) => total + sale.totalAmount, 0).toFixed(2);

  return (
    <div style={{boxShadow:" 1px 2px 2px 1px rgba(0, 0, 0, 0.5)", width:"30%",padding: "20px 20px"}}>
      <h2 style={{margin:"auto",textAlign:"center"}}>Total Sales</h2>
      <p style={{textAlign:"center"}}> ${totalSales}</p>
    </div>
  );
};
export default TotalSales