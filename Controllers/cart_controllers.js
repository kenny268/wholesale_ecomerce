const { Cart} = require('../models')

const getAllCarts = async (req, res) => {
    try {
      const products = await Cart.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

const registerCarts = async (req, res) => {
        
            console.log(req.body)
            
            const { customerId, productId, quantity } = req.body;
            try {
            const product = new Cart({
                customerId,
                productId,
                quantity
            });
            await product.save();
            res.status(201).json(product);
            } catch (error) {
            res.status(500).json({ error: error.message });
            }
        }

const getAllCartsById = async (req, res) => {
    try {
        const products = await Cart.findById(req.params.id);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    }

const updateCarts = async (req, res) => {
    const { customerId, productId, quantity } = req.body;
    try {
        const product = await Cart.findByIdAndUpdate(req.params.id, {
        customerId,
        productId,
        quantity
        });
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    }

const deleteCarts = async (req, res) => {
    try {
        const product = await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    registerCarts,
    getAllCarts,
    getAllCartsById,
    updateCarts,
    deleteCarts
}