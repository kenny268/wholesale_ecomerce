const { Address} = require('../models')

const getAllAddress = async (req, res) => {
    try {
      const products = await Address.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

const registerAddress = async (req, res) => {
        
            console.log(req.body)
            
            const { userId, address, city, state, zip } = req.body;
            try {
            const product = new Address({
                userId,
                address,
                city,
                state,
                zip
            });
            await product.save();
            res.status(201).json(product);
            } catch (error) {
            res.status(500).json({ error: error.message });
            }
        }

const getAllAddressById = async (req, res) => {
    try {
        const products = await Address.findById(req.params.id);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    }

const updateAddress = async (req, res) => {
    const { userId, address, city, state, zip } = req.body;
    try {
        const product = await Address.findByIdAndUpdate(req.params.id, {
        userId,
        address,
        city,
        state,
        zip
        });
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    }

const deleteAddress = async (req, res) => {
    try {
        const product = await Address.findByIdAndDelete(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    registerAddress,
    getAllAddress,
    getAllAddressById,
    updateAddress,
    deleteAddress
}