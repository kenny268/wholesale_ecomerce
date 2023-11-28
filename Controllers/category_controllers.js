const { Category}= require('../models')

const getAllCategories = async (req, res) => {
    try {
      const products = await Category.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

const registerCategories = async (req, res) => {
    
        const { categoryName } = req.body;
        try {
        const product = new Category({
            categoryName
        });
        await product.save();
        res.status(201).json(product);
        } catch (error) {
        res.status(500).json({ error: error.message });
        }
    }

const getAllCategoriesById = async (req, res) => {
    try {
        const products = await Category.findById(req.params.id);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    }

const updateCategories = async (req, res) => {
    const { categoryName } = req.body;
    try {
        const product = await Category.findByIdAndUpdate(req.params.id, {
        categoryName
        });
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    }

const deleteCategories = async (req, res) => {
    try {
        const product = await Category.findByIdAndDelete(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    registerCategories,
    getAllCategories,
    getAllCategoriesById,
    updateCategories,
    deleteCategories
}