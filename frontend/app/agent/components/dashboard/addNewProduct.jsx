'use client'
import React, { useState } from 'react';
import styles from './AddProduct.module.css';
function AddNewProduct() {
    // State to manage form data
    const [formData, setFormData] = useState({
      name: '',
      description: '',
      price: '',
      category: '',
      brand: '',
      imageUrl: '',
      availability: '',
      quantity: '',
    });
  
    // Handle form input changes
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    // Handle form submission (you might want to send this data to a server, etc.)
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      // Add logic here to send data to a server or perform other actions
    };
  
    return (
      
        <div className={styles.signupContainer}>
          <form onSubmit={handleSubmit} className={styles.rightContainer}>
            <h1 className={styles.h1}>Add New Product</h1>
            <div className={styles.set}>
              <div>
                <label className={styles.label}>Name:</label>
                  <input
                    className={styles.input}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
              </div>  
              <div>
                <label className={styles.label} >Price:</label>
                  <input
                    className={styles.input}
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                  />
                
              </div>
                
              
            </div>

            <div className={styles.set}>
              
              <div>
                <label className={styles.label}>Category:</label>
                  <input
                    type="text"
                    className={styles.input}
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                  />
              </div>  
              <div>
                <label className={styles.label}>Brand:</label>
                  <input
                    className={styles.input}
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleInputChange}
                  />
                </div>
            </div>

            <div className={styles.set}>
              <div>
                <label className={styles.label}>Availability:</label>
                  <input
                    className={styles.input}
                    type="text"
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                  />
              </div>      
          
              <div>           
                <label className={styles.label}>Quantity:</label>
                  <input
                    className={styles.input}
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                  />
              </div>
            </div>


            <div className={styles.set}>
              
                <div>
                <label className={styles.label} >Description:</label>
                  <textarea
                    className={styles.input}
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                  />
              </div>

              <div >
                  <label className={styles.label}>Image</label>
                  <div className={styles.input}>
                  <input
                    
                    type='file'
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleInputChange}
                  />
                  </div>
                  
              </div>
            </div>

      
        <button type="submit" className={styles.button}>Submit</button>
      
      </form>
      </div>
    );
  };

export default AddNewProduct