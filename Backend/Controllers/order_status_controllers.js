const { OrderStatus}= require('../models')

const getAllOrderStatus = async (req, res) => {
    try {
      const products = await OrderStatus.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

const registerOrderStatus = async (req, res) => {
    
        console.log(req.body)
        
        const { status } = req.body;
        try {
        const product = new OrderStatus({
            status
        });
        await product.save();
        res.status(201).json(product);
        } catch (error) {
        res.status(500).json({ error: error.message });
        }
    }

const getAllOrderStatusById = async (req, res) => {
    try {
        const products = await OrderStatus.findById(req.params.id);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    }

const updateOrderStatus = async (req, res) => {
    const { status } = req.body;
    try {
        const product = await OrderStatus.findByIdAndUpdate(req.params.id, {
        status
        });
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    }

const deleteOrderStatus = async (req, res) => {
    try {
        const product = await OrderStatus.findByIdAndDelete(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    registerOrderStatus,
    getAllOrderStatus,
    getAllOrderStatusById,
    updateOrderStatus,
    deleteOrderStatus
}