const express = require('express');
const router = express.Router();
const storeController = require('../Controllers/products_controllers'); // Replace with the actual path to your controller file


// Example routes

// Get all products
router.get('/', storeController.getAllProducts);

// Get product by ID
router.get('/:id', storeController.getProductById);

// Create a new product
router.post('/', storeController.createProduct);

// Update a product
router.put('/:id', storeController.updateProduct);

// Delete a product
router.delete('/products/:id', storeController.deleteProduct);


module.exports = router;
