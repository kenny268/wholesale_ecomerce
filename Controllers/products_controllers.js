const {Product} = require('../models'); // Replace with the actual path to your mongoose models file

  // Get all products
  const getAllProducts = async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Get product by ID
  const getProductById = async (req, res) => {
    const productId = req.params.id;
    try {
      const product = await Product.findById(productId);
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Create a new product
  const createProduct = async (req, res) => {
    
    const { productName, description, price, stockQuantity, categoryId, manufacturerId } = req.body;
    try {
      const product = new Product({
        productName,
        description,
        price,
        stockQuantity,
        category: categoryId,
        manufacturer: manufacturerId,
      });
      await product.save();
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
    
  };
  
  // Update a product
  const updateProduct = async (req, res) => {
    const productId = req.params.id;
    const { productName, description, price, stockQuantity, categoryId, manufacturerId } = req.body;
    try {
      const product = await Product.findByIdAndUpdate(
        productId,
        {
          productName,
          description,
          price,
          stockQuantity,
          category: categoryId,
          manufacturer: manufacturerId,
        },
        { new: true }
      );
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Delete a product
  const deleteProduct = async (req, res) => {
    const productId = req.params.id;
    try {
      await Product.findByIdAndDelete(productId);
      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
  };
  
  
