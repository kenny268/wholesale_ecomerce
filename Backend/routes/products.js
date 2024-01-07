const express = require('express');
const router = express.Router();
const storeController = require('../Controllers/products_controllers'); // Replace with the actual path to your controller file
const {authMiddleware}= require('../Controllers/manufacture_controllers')

// Example routes

// Get all products
router.get('/', storeController.getAllProducts);

// Get product by ID
router.get('/:id', storeController.getProductById);

// Create a new product
router.post('/',authMiddleware,storeController.createProduct);

// Update a product
router.put('/:id',authMiddleware, storeController.updateProduct);

// Delete a product
router.delete('/products/:id', authMiddleware ,storeController.deleteProduct);

// Get all products by category
router.get('/category/:id', storeController.getAllProductsByCategory);

// Get all products by manufacturer
router.get('/manufacturer/:id',storeController.getAllProductsByManufacturer);


module.exports = router;
