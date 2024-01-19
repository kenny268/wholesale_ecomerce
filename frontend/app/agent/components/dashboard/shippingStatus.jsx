'use client'
import React, { useEffect, useState } from 'react';
import style from '@/app/agent/components/dashboard/ShippingStatus.module.css'

const Order = ({ id, product, quantity, shippingStatus }) => {
  return (
    <tr key={id} className={style.tableData}>
      <td className={style.status}>{id}</td>
      <td className={style.status}>{product}</td>
      <td className={style.status}>{quantity}</td>
      <td className={style.status}>{shippingStatus}</td>
    </tr>
  );
};
const SearchDisplay = ({ id, product, quantity, shippingStatus }) => {
  return (
    <tr key={id} className={style.tableData}>
      <td className={style.status}>{id}</td>
      <td className={style.status}>{product}</td>
      <td className={style.status}>{quantity}</td>
      <td className={style.status}>{shippingStatus}</td>
    </tr>
  );
};

const ShippingStatus = () => {
  const [shipped, setShipped] = useState([]);
  const [delivered, setDelivered] = useState([]);
  const [processing, setProcessing] = useState([]);
  const [inTransit, setInTransit] = useState([]);
  const [orders, setOrders] = useState(null);
  const [search, setSearch] = useState(null);
  const [searchResults, setSearchResults] = useState(null);

  const ordersData = [
    {
      id: 1,
      product: 'Product A',
      quantity: 3,
      shippingStatus: 'Processing',
    },
    {
      id: 2,
      product: 'Product B',
      quantity: 2,
      shippingStatus: 'Shipped',
    },
    {
      id: 3,
      product: 'Product C',
      quantity: 1,
      shippingStatus: 'Delivered',
    },
    {
      id: 4,
      product: 'Product D',
      quantity: 4,
      shippingStatus: 'In Transit',
    },
    {
      id: 5,
      product: 'Product E',
      quantity: 2,
      shippingStatus: 'Processing',
    },
    {
      id: 6,
      product: 'Product F',
      quantity: 3,
      shippingStatus: 'Shipped',
    },
    {
      id: 7,
      product: 'Product G',
      quantity: 1,
      shippingStatus: 'Delivered',
    },
    {
      id: 8,
      product: 'Product H',
      quantity: 5,
      shippingStatus: 'In Transit',
    },
    
  ];
  
  

  const Shipped = (orders, status='Shipped') => {
    return orders.filter(order => order.shippingStatus === status);
  };

  const Delivered = (orders, status='Delivered') => {
    return orders.filter(order => order.shippingStatus === status);
  };

  const Processing = (orders, status='Processing') => {
    return orders.filter(order => order.shippingStatus === status);
  };

  const InTransit = (orders, status='In Transit') => {
    return orders.filter(order => order.shippingStatus === status);
  };


  const handleSearch = (e) => {
    e.preventDefault();
    setSearchResults(null)
    const Search = (searchTerm) => {
      return orders.filter(order => order.id === Number(searchTerm));
    };

    if(!searchResults){
      const item = Search(search);
      setSearchResults(...item);

    }
    else{
      setSearchResults(null);
      setSearch(null);
    }
  
  };

  console.log('searchResults', searchResults);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch('/api/orders');
    //     if (!response.ok) {
    //       throw new Error('Failed to fetch data');
    //     }
    //     const data = await response.json();
    //     setOrders(data);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // };

    // fetchData();
    setOrders(ordersData);
    setShipped(Shipped(ordersData));
    setDelivered(Delivered(ordersData));
    setProcessing(Processing(ordersData));
    setInTransit(InTransit(ordersData));

  }, []);

  return (
    <div className={style.content}>
      <h2 className={style.h1}>Shipping Status</h2>
      <form onSubmit={handleSearch}>
        <input type="text"
          placeholder="Search by Order ID"
          value={search} 
          name={search}
          onChange={(e)=>setSearch(e.target.value)} />
        <input type='submit' value='Search' />
        {/* <button type="submit">Search</button> */}

      </form>
      { searchResults && <h3 className={style.h2}> Search Results
      <table className={style.tableContent}>
        <thead>
          <tr>
            <th className={style.status}>Order ID</th>
            <th className={style.status}>Product</th>
            <th className={style.status}>Quantity</th>
            <th className={style.status}>Shipping Status</th>
          </tr>
        </thead>
        <tbody>{Order(searchResults)}</tbody>
      </table>
      </h3> }

      
      { processing && <h3 className={style.h2}> Processing Items
      <table className={style.tableContent}>
        <thead>
          <tr>
            <th className={style.status}>Order ID</th>
            <th className={style.status}>Product</th>
            <th className={style.status}>Quantity</th>
            <th className={style.status}>Shipping Status</th>
          </tr>
        </thead>
        <tbody>{processing.map((order) => Order(order))}</tbody>
      </table>
      </h3> }
      { shipped && <h3 className={style.h2}> Shipped Items
      <table className={style.tableContent}>
        <thead>
          <tr>
            <th className={style.status}>Order ID</th>
            <th className={style.status}>Product</th>
            <th className={style.status}>Quantity</th>
            <th className={style.status}>Shipping Status</th>
          </tr>
        </thead>
        <tbody>{shipped.map((order) => Order(order))}</tbody>
      </table>
      
      </h3> }
      { inTransit && <h3 className={style.h2}> In Transit Items
      <table className={style.tableContent}>
        <thead>
          <tr>
            <th className={style.status}>Order ID</th>
            <th className={style.status}>Product</th>
            <th className={style.status}>Quantity</th>
            <th className={style.status}>Shipping Status</th>
          </tr>
        </thead>
        <tbody>{inTransit.map((order) => Order(order))}</tbody>
      </table>
        </h3>}
      { delivered &&
        <h3 className={style.h2}>Delivered Items
        <table className={style.tableContent}>
          <thead>
            <tr>
              <th className={style.status}>Order ID</th>
              <th className={style.status}>Product</th>
              <th className={style.status}>Quantity</th>
              <th className={style.status}>Shipping Status</th>
            </tr>
          </thead>
          <tbody>{delivered.map((order) => Order(order))}</tbody>
        </table>
        </h3>
       }
      
      
    </div>
  );
};

export default ShippingStatus;