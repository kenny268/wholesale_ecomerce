const { CartItem} = require('../models')

const getAllCartItems = async (req, res) => {
    try {
      const products = await CartItem.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

const registerCartItems = async (req, res) => {
    
        console.log(req.body)
        
        const { cartId, productId, quantity } = req.body;
        try {
        const product = new CartItem({
            cartId,
            productId,
            quantity
        });
        await product.save();
        res.status(201).json(product);
        } catch (error) {
        res.status(500).json({ error: error.message });
        }
    }

const getAllCartItemsById = async (req, res) => {
    try {
        const products = await CartItem.findById(req.params.id);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    }

const updateCartItems = async (req, res) => {
    const { cartId, productId, quantity } = req.body;
    try {
        const product = await CartItem.findByIdAndUpdate(req.params.id, {
        cartId,
        productId,
        quantity
        });
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    }

const deleteCartItems = async (req, res) => {
    try {
        const product = await CartItem.findByIdAndDelete(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllCartItems,
    registerCartItems,
    getAllCartItemsById,
    updateCartItems,
    deleteCartItems
}