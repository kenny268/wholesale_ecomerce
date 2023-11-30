const { Review} = require('../models')

const getAllReviews = async (req, res) => {
    try {
      const products = await Review.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

const registerReviews = async (req, res) => {
    
        console.log(req.body)
        
        const { productId, review, rating } = req.body;
        try {
        const product = new Review({
            productId,
            review,
            rating
        });
        await product.save();
        res.status(201).json(product);
        } catch (error) {
        res.status(500).json({ error: error.message });
        }
    }

const getAllReviewsById = async (req, res) => {
    try {
        const products = await Review.findById(req.params.id);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    }

const updateReviews = async (req, res) => {
    try {
        const product = await Review.findByIdAndUpdate(req.params.id, {
        review,
        rating
        });
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    registerReviews,
    getAllReviews,
    getAllReviewsById,
    updateReviews
}
