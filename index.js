// Import the required modules
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config();
const morgan = require('morgan');


// Import the routes
const products = require('./routes/products');
const customer = require('./routes/customer');
const manufacturer = require('./routes/manufacturer');
const order = require('./routes/order');
const orderItem = require('./routes/orderItem');
const category = require('./routes/category');
const admin = require('./routes/admin');

// Create an instance of the Express application
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('combined')); 

// Use the routes
app.use('/products', products);
app.use('/user', customer);
app.use('/agent', manufacturer);
app.use('/order', order);
app.use('/orderItem', orderItem);
app.use('/category', category);
app.use('/admin', admin);



// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, 
    { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            // Start the server
            app.listen(3000, () => {
                console.log('Server is running on port 3000');
            });
        })
        .catch((error) => {
        console.error('Failed to connect to MongoDB:', error);
    });
