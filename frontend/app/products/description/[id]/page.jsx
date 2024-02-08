'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import AgentData from '../manufacturedata/AgentData';
import styles from '../Descriptions.module.css'

function Productdescriptions({ params }) {

  const [products, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const id = params.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/products/${id}`);
        const data = await response.json();
        // data.description =  "I appreciate the opportunity to present a past software development project and will ensure it highlights my skills effectively. Please let me know if there are any specific guidelines for the presentation. I appreciate the opportunity to present a past software development project and will ensure it highlights my skills effectively. Please let me know if there are any specific guidelines for the presentation. I appreciate the opportunity to present a past software development project and will ensure it highlights my skills effectively. Please let me know if there are any specific guidelines for the presentation. I appreciate the opportunity to present a past software development project and will ensure it highlights my skills effectively. Please let me know if there are any specific guidelines for the presentation. I appreciate the opportunity to present a past software development project and will ensure it highlights my skills effectively. Please let me know if there are any specific guidelines for the presentation. I appreciate the opportunity to present a past software development project and will ensure it highlights my skills effectively. Please let me know if there are any specific guidelines for the presentation. I appreciate the opportunity to present a past software development project and will ensure it highlights my skills effectively. Please let me know if there are any specific guidelines for the presentation. I appreciate the opportunity to present a past software development project and will ensure it highlights my skills effectively. Please let me know if there are any specific guidelines for the presentation. I appreciate the opportunity to present a past software development project and will ensure it highlights my skills effectively. Please let me know if there are any specific guidelines for the presentation. I appreciate the opportunity to present a past software development project and will ensure it highlights my skills effectively. Please let me know if there are any specific guidelines for the presentation. I appreciate the opportunity to present a past software development project and will ensure it highlights my skills effectively. Please let me know if there are any specific guidelines for the presentation. I appreciate the opportunity to present a past software development project and will ensure it highlights my skills effectively. Please let me know if there are any specific guidelines for the presentation. ls dlkjlk dslkdm ld klkd lsdl kddk lll llll lll lll lll llllll ll llllll llll lll lllll llll ksad klkkds kdssssss ssss sssssss sss sssssss sssssss sssss sssdsd sssss ssssw ssss  sssws dssss ssssssss ss dlkld dkkd dlk;lsw  wkpekd ewkod ewfwfgfe weeffew ewefwf ewewdf def ewfwefw wdkdw wdkso dfewf deew wdokwowk wkk wws dwedd ddewd ddwedwf owqkd wdsksadk dddef edwdewd deewded dededwef dsdff ddsddf ddssff wdksdl ddsa ddsdsa ddsc ddadd dddd ddd dksdks ddd wksd ddd ddd ddd ddd ddd djskd       "
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  console.log(products)
  return (
    <div className={styles.CardWrapper}>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      
      {products && (
        <div className={styles.CardDescriptions}>
          <div className={styles.ProductDescriptions}>
            <img
                  src={`http://localhost:4000/${products.image.path}`}        
                  alt={products.image.path} 
                  
                  />
            <div>
              <h2>{products.productName}</h2>
              <p><strong>Price</strong> Ksh{products.price}</p>
              <p><strong>Stock:</strong> {products.stockQuantity}</p>
              <div >
                <h3>Product Descriptions</h3>
                <p>{products.description}</p>
              </div>
              <button>Add Cart</button>
            </div>
          </div>

          <div>
            <AgentData id={products.manufacturerId}/>
          </div>
        </div>
      )}

    </div>
  );
}

export default Productdescriptions;
