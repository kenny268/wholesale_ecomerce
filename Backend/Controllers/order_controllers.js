const { Order} = require('../models');

const getAllOrders = async (req, res) => {
    try {
      const products = await Order.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

const registerOrders = async (req, res) => {
    
        console.log(req.body)
        
        const { customerName, totalAmount, status } = req.body;
        try {
        const product = new Order({
            customerName,
            totalAmount,
            status
        });
        await product.save();
        res.status(201).json(product);
        } catch (error) {
        res.status(500).json({ error: error.message });
        }
    }

const getAllOrdersById = async (req, res) => {
    try {
        const products = await Order.findById(req.params.id);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    }

const updateOrders = async (req, res) => {
    const { customerName, totalAmount, status } = req.body;
    try {
        const product = await Order.findByIdAndUpdate(req.params.id, {
        customerName,
        totalAmount,
        status
        });
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    }

const deleteOrders = async (req, res) => {
    try {
        const product = await Order.findByIdAndDelete(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    }

module.exports = {registerOrders,getAllOrders,getAllOrdersById,updateOrders,deleteOrders}