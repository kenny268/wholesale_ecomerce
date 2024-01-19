'use client'
import React, { useEffect, useState } from 'react';
import style from '@/app/agent/components/dashboard/ShippingStatus.module.css'

const Order = ({ id, product, quantity, shippingStatus,date }) => {
  return (
    <tr key={id} className={style.tableData}>
      <td className={style.status}>{id}</td>
      <td className={style.status}>{product}</td>
      <td className={style.status}>{quantity}</td>
      <td className={style.status}>{shippingStatus}</td>
      <td className={style.status}>{date}</td>
    </tr>
  );
};


const OrderManagement = () => {

  const [shipped, setShipped] = useState([]);
  const [delivered, setDelivered] = useState([]);
  const [processing, setProcessing] = useState([]);
  const [inTransit, setInTransit] = useState([]);
  const [orders, setOrders] = useState(null);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([...'']);



  const mockOrders = [
    {
      id: 1,
      product: 'Product 1',
      quantity: 1,
      shippingStatus: 'Shipped',
      date: '2021-01-01',

    },
    {
      id: 2,
      product: 'Product 2',
      quantity: 2,
      shippingStatus: 'In Transit',
      date: '2021-01-01',

    },
    {
      id: 3,
      product: 'Product 3',
      quantity: 3,
      shippingStatus: 'Processing',
      date: '2021-01-02',

    },
    {
      id: 4,
      product: 'Product 4',
      quantity: 4,
      shippingStatus: 'Delivered',
      date: '2021-01-12',

    },
    {
      id: 5,
      product: 'Product 5',
      quantity: 5,
      shippingStatus: 'Shipped',
      date: '2021-01-12',

    },
    {
      id: 6,
      product: 'Product 6',
      quantity: 6,
      shippingStatus: 'In Transit',
      date: '2021-01-10',

    },
    {
      id: 7,
      product: 'Product 7',
      quantity: 7,
      shippingStatus: 'Processing',
      date: '2021-01-10',

    },
    {
      id: 8,
      product: 'Product 8',
      quantity: 8,
      shippingStatus: 'Delivered',
      date: '2021-01-11',

    },
    {
      id: 9,
      product: 'Product 9',
      quantity: 9,
      shippingStatus: 'Shipped',
      date: '2021-01-11',

    },
    {
      id: 10,
      product: 'Product 10',
      quantity: 10,
      shippingStatus: 'In Transit',
      date: '2021-01-08',

    },
    {
      id: 11,
      product: 'Product 11',
      quantity: 11,
      shippingStatus: 'Processing',
      date: '2021-01-09',

    },
    {
      id: 12,
      product: 'Product 12',
      quantity: 12,
      shippingStatus: 'Delivered',
      date: '2021-01-07',

    },
    {
      id: 13,
      product: 'Product 13',
      quantity: 13,
      shippingStatus: 'Shipped',
      date: '2021-01-06',

    },
    {
      id: 14,
      product: 'Product 14',
      quantity: 14,
      shippingStatus: 'In Transit',
      date: '2021-01-05',

    },
    {
      id: 15,
      product: 'Product 15',
      quantity: 15,
      shippingStatus: 'Processing',
      date: '2021-01-04',

    },
    {
      id: 16,
      product: 'Product 16',
      quantity: 16,
      shippingStatus: 'Delivered',
      date: '2021-01-03',

    },
    {
      id: 17,
      product: 'Product 17',
      quantity: 17,
      shippingStatus: 'Shipped',
      date: '2021-01-02',

    },
    {
      id: 18,
      product: 'Product 18',
      quantity:2,
      shippingStatus: 'In Transit',
      date: '2021-01-16',
    },
    {
      id: 19,
      product: 'Product 19',
      quantity: 19,
      shippingStatus: 'Processing',
      date: '2021-01-16',

    },
    {
      id: 20,
      product: 'Product 20',
      quantity: 20,
      shippingStatus: 'Delivered',
      date: '2021-01-16',
    },
    {
      id: 21,
      product: 'Product 21',
      quantity: 21,
      shippingStatus: 'Shipped',
      date: '2021-01-16',

    },
    {
      id: 22,
      product: 'Product 22',
      quantity: 22,
      shippingStatus: 'In Transit',
      date: '2021-01-16',

    },
    {
      id: 23,
      product: 'Product 23',
      quantity: 23,
      shippingStatus: 'Processing',
      date: '2021-01-17',

    },
    {
      id: 24,
      product: 'Product 24',
      quantity: 24,
      shippingStatus: 'Delivered',
      date: '2021-01-18',

    },
    {
      id: 25,
      product: 'Product 25',
      quantity: 25,
      shippingStatus: 'Shipped',
      date: '2021-01-19',

    },
    {
      id: 26,
      product: 'Product 26',
      quantity: 26,
      shippingStatus: 'In Transit',
      date: '2021-01-20',

    },
    {
      id: 27,
      product: 'Product 27',
      quantity: 27,
      shippingStatus: 'Processing',
      date: '2021-01-21',

    },
    {
      id: 28,
      product: 'Product 28',
      quantity: 28,
      shippingStatus: 'Delivered',
      date: '2021-01-22',

    },
    {
      id: 29,
      product: 'Product 29',
      quantity: 29,
      shippingStatus: 'Shipped',
      date: '2021-01-23',

    },
    {
      id: 30,
      product: 'Product 30',
      quantity: 30,
      shippingStatus: 'In Transit',
      date: '2021-01-24',

    },
    {
      id: 31,
      product: 'Product 31',
      quantity: 31,
      shippingStatus: 'Processing',
      date: '2021-01-25',

    },
    {
      id: 32,
      product: 'Product 32',
      quantity: 32,
      shippingStatus: 'Delivered',
      date: '2021-01-26',
    },
    {
      id: 33,
      product: 'Product 33',
      quantity: 33,
      shippingStatus: 'Shipped',
      date: '2021-01-27',

    },
    {
      id: 34,
      product: 'Product 34',
      quantity: 34,
      shippingStatus: 'In Transit',
      date: '2021-01-28',

    },
    {
      id: 35,
      product: 'Product 35',
      quantity: 35,
      shippingStatus: 'Processing',
      date: '2021-01-29',

    },
    {
      id: 36,
      product: 'Product 36',
      quantity: 36,
      shippingStatus: 'Delivered',
      date: '2021-01-30',

    },
    {
      id: 37,
      product: 'Product 37',
      quantity: 37,
      shippingStatus: 'Shipped',
      date: '2021-01-31',

    },
    {
      id: 38,
      product: 'Product 38',
      quantity: 38,
      shippingStatus: 'In Transit',
      date: '2021-01-30',

    },
    {
      id: 39,
      product: 'Product 39',
      quantity: 39,
      shippingStatus: 'Processing',
      date: '2021-01-29',

    },
    {
      id: 40,
      product: 'Product 40',
      quantity: 40,
      shippingStatus: 'Delivered',
      date: '2021-01-28',

    },
    {
      id: 41,
      product: 'Product 41',
      quantity: 41,
      shippingStatus: 'Shipped',
      date: '2021-01-27',

    },
    {
      id: 42,
      product: 'Product 42',
      quantity: 42,
      shippingStatus: 'In Transit',
      date: '2021-01-26',

    },
    {
      id: 43,
      product: 'Product 43',
      quantity: 43,
      shippingStatus: 'Processing',
      date: '2021-01-25',

    },
    {
      id: 44,
      product: 'Product 44',
      quantity: 44,
      shippingStatus: 'Delivered',
      date: '2021-01-24',
    },
    {
      id: 45,
      product: 'Product 45',
      quantity: 45,
      shippingStatus: 'Shipped',
      date: '2021-01-23',

    },
    {
      id: 46,
      product: 'Product 46',
      quantity: 46,
      shippingStatus: 'In Transit',
      date: '2021-01-22',

    },
    {
      id: 47,
      product: 'Product 47',
      quantity: 47,
      shippingStatus: 'Processing',
      date: '2021-01-21',

    },
    {
      id: 48,
      product: 'Product 48',
      quantity: 48,
      shippingStatus: 'Delivered',
      date: '2021-01-20',

    },
    {
      id: 49,
      product: 'Product 49',
      quantity: 49,
      shippingStatus: 'Shipped',
      date: '2021-01-19',

    },
    {
      id: 50,
      product: 'Product 50',
      quantity: 50,
      shippingStatus: 'In Transit',
      date: '2021-01-18',

    },
    {
      id: 51,
      product: 'Product 51',
      quantity: 51,
      shippingStatus: 'Processing',
      date: '2021-01-17',

    },
    {
      id: 52,
      product: 'Product 52',
      quantity: 52,
      shippingStatus: 'Delivered',
      date: '2021-01-16',

    },
    {
      id: 53,
      product: 'Product 53',
      quantity: 53,
      shippingStatus: 'Shipped',
      date: '2021-01-15',

    },
    {
      id: 54,
      product: 'Product 54',
      quantity: 54,
      shippingStatus: 'In Transit',
      date: '2021-01-14',

    },
    {
      id: 55,
      product: 'Product 55',
      quantity: 55,
      shippingStatus: 'Processing',
      date: '2021-01-13',

    },
    {
      id: 56,
      product: 'Product 56',
      quantity: 56,
      shippingStatus: 'Delivered',
      date: '2021-01-12',
    },
    {
      id: 57,
      product: 'Product 57',
      quantity: 57,
      shippingStatus: 'Shipped',
      date: '2021-01-11',

    },
    {
      id: 58,
      product: 'Product 58',
      quantity: 58,
      shippingStatus: 'In Transit',
      date: '2021-01-10',

    },
    {
      id: 59,
      product: 'Product 59',
      quantity: 59,
      shippingStatus: 'Processing',
      date: '2021-01-09',

    },
    {
      id: 60,
      product: 'Product 60',
      quantity: 60,
      shippingStatus: 'Delivered',
      date: '2021-01-08',

    },
    {
      id: 61,
      product: 'Product 61',
      quantity: 61,
      shippingStatus: 'Shipped',
      date: '2021-01-07',

    },
    {
      id: 62,
      product: 'Product 62',
      quantity: 62,
      shippingStatus: 'In Transit',
      date: '2021-01-06',

    },
    {
      id: 63,
      product: 'Product 63',
      quantity: 63,
      shippingStatus: 'Processing',
      date: '2021-01-05',

    },
    {
      id: 64,
      product: 'Product 64',
      quantity: 64,
      shippingStatus: 'Delivered',
      date: '2021-01-04',

    },
    {
      id: 65,
      product: 'Product 65',
      quantity: 65,
      shippingStatus: 'Shipped',
      date: '2021-01-03',

    },
    {
      id: 66,
      product: 'Product 66',
      quantity: 66,
      shippingStatus: 'In Transit',
      date: '2021-01-02',

    },
    {
      id: 67,
      product: 'Product 67',
      quantity: 67,
      shippingStatus: 'Processing',
      date: '2021-01-01',

    },
    {
      id: 68,
      product: 'Product 68',
      quantity: 68,
      shippingStatus: 'Delivered',
      date: '2021-01-01',
    },
    {
      id: 69,
      product: 'Product 69',
      quantity: 69,
      shippingStatus: 'Shipped',
      date: '2021-01-02',

    },
    {
      id: 70,
      product: 'Product 70',
      quantity: 70,
      shippingStatus: 'In Transit',
      date: '2021-01-03',

    },
    {
      id: 71,
      product: 'Product 71',
      quantity: 71,
      shippingStatus: 'Processing',
      date: '2021-01-04',

    },
    {
      id: 72,
      product: 'Product 72',
      quantity: 72,
      shippingStatus: 'Delivered',
      date: '2021-01-05',

    },
    {
      id: 73,
      product: 'Product 73',
      quantity: 73,
      shippingStatus: 'Shipped',
      date: '2021-01-06',

    },
    {
      id: 74,
      product: 'Product 74',
      quantity: 74,
      shippingStatus: 'In Transit',
      date: '2021-01-07',

    },
    {
      id: 75,
      product: 'Product 75',
      quantity: 75,
      shippingStatus: 'Processing',
      date: '2021-01-08',

    },
    {
      id: 76,
      product: 'Product 76',
      quantity: 76,
      shippingStatus: 'Delivered',
      date: '2021-01-09',

    },
    {
      id: 77,
      product: 'Product 77',
      quantity: 77,
      shippingStatus: 'Shipped',
      date: '2021-01-10',

    },
    {
      id: 78,
      product: 'Product 78',
      quantity: 78,
      shippingStatus: 'In Transit',
      date: '2021-01-11',

    },
    {
      id: 79,
      product: 'Product 79',
      quantity: 79,
      shippingStatus: 'Processing',
      date: '2021-01-12',

    },
    {
      id: 80,
      product: 'Product 80',
      quantity: 80,
      shippingStatus: 'Delivered',
      date: '2021-01-13',
    },
    {
      id: 81,
      product: 'Product 81',
      quantity: 81,
      shippingStatus: 'Shipped',
      date: '2021-01-14',

    },
    {
      id: 82,
      product: 'Product 82',
      quantity: 82,
      shippingStatus: 'In Transit',
      date: '2021-01-15',

    },
    {
      id: 83,
      product: 'Product 83',
      quantity: 83,
      shippingStatus: 'Processing',
      date: '2021-01-16',

    },
    {
      id: 84,
      product: 'Product 84',
      quantity: 84,
      shippingStatus: 'Delivered',
      date: '2021-01-17',

    },
    {
      id: 85,
      product: 'Product 85',
      quantity: 85,
      shippingStatus: 'Shipped',
      date: '2021-01-18',

    },
    {
      id: 86,
      product: 'Product 86',
      quantity: 86,
      shippingStatus: 'In Transit',
      date: '2021-01-19',

    },
    {
      id: 87,
      product: 'Product 87',
      quantity: 87,
      shippingStatus: 'Processing',
      date: '2021-01-20',

    },
    {
      id: 88,
      product: 'Product 88',
      quantity: 88,
      shippingStatus: 'Delivered',
      date: '2021-01-21',

    },
    {
      id: 89,
      product: 'Product 89',
      quantity: 89,
      shippingStatus: 'Shipped',
      date: '2021-01-22',

    },
    {
      id: 90,
      product: 'Product 90',
      quantity: 90,
      shippingStatus: 'In Transit',
      date: '2021-01-23',

    },
    {
      id: 91,
      product: 'Product 91',
      quantity: 91,
      shippingStatus: 'Processing',
      date: '2021-01-24',

    },
    {
      id: 92,
      product: 'Product 92',
      quantity: 92,
      shippingStatus: 'Delivered',
      date: '2021-01-25',
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

  useEffect(() => {
    setOrders(mockOrders);
    setShipped(Shipped(mockOrders));
    setDelivered(Delivered(mockOrders));
    setProcessing(Processing(mockOrders));
    setInTransit(InTransit(mockOrders));
  }, []);



  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Replace this URL with your actual API endpoint
  //       const response = await fetch('/api/orders');
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch data');
  //       }
  //       const data = await response.json();
  //       setOrders(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);


  const handleSearch = (e) => {
    e.preventDefault();
    if(search){
    const Search = (searchTerm) => {
      return orders.filter(order => order.id === Number(searchTerm));
    };

    if(!searchResults.length>0){
      const item = Search(search);

      if(item.length>0){
      setSearchResults(...item);
      setSearch(null)}
      else{
        alert("Enter valid Number")
        setSearch('')
        setSearchResults(...['']);
      }
    }
    else{
      setSearchResults(...['']);
      setSearch('');
    }
    }else{
      alert("Please enter a valid Order ID")
    }

  };

  console.log("serchresult",searchResults)

  return (
    <div className={style.content}>
    <form onSubmit={handleSearch}>
      <input 
        type="number"
        placeholder="Search by Order ID"
        value={search} 
        name='search'
        onChange={(e)=>setSearch(e.target.value)} 
        
        />
      <button type="submit">Search</button>

    </form>
    { searchResults && <h3 className={style.h2}> Search Results
    <table className={style.tableContent}>
      <thead>
        <tr>
          <th className={style.status}>Order ID</th>
          <th className={style.status}>Product</th>
          <th className={style.status}>Quantity</th>
          <th className={style.status}>Shipping Status</th>
          <th className={style.status}>Date</th>

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
          <th className={style.status}>Date</th>
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
          <th className={style.status}>Date</th>
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
          <th className={style.status}>Date</th>
        </tr>
      </thead>
      <tbody>{inTransit.map((order) => Order(order))}</tbody>
    </table>
      </h3>}

    { delivered && <h3 className={style.h2}>Delivered Items
      <table className={style.tableContent}>
        <thead>
          <tr>
            <th className={style.status}>Order ID</th>
            <th className={style.status}>Product</th>
            <th className={style.status}>Quantity</th>
            <th className={style.status}>Shipping Status</th>
            <th className={style.status}>Date</th>
          </tr>
        </thead>
        <tbody>{delivered.map((order) => Order(order))}</tbody>
      </table>
      </h3>
     }
    
    
  </div>
  );
};

export default OrderManagement;
