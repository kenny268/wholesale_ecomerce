const { OrderItem} = require("../models");

const getAllOrderItems = async (req, res) => {
    try {
      const products = await OrderItem.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

const registerOrderItems = async (req, res) => {
    
        console.log(req.body)
        
        const { orderId, productId, quantity } = req.body;
        try {
        const product = new OrderItem({
            orderId,
            productId,
            quantity
        });
        await product.save();
        res.status(201).json(product);
        } catch (error) {
        res.status(500).json({ error: error.message });
        }
    }
const getAllOrderItemsById = async (req, res) => {
    try {
        const products = await OrderItem.findById(req.params.id);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    }


const deleteOrderItems = async (req, res) => {
    try {
        const product = await OrderItem.findByIdAndDelete(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {registerOrderItems,getAllOrderItems,getAllOrderItemsById,deleteOrderItems}