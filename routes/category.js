const express = require('express');
const router = express.Router();

const categoryController = require('../Controllers/category_controllers')

router.get('/', categoryController.getAllCategories);
router.post('/', categoryController.registerCategories);
router.get('/:id', categoryController.getAllCategoriesById);
router.put('/:id', categoryController.updateCategories);
router.delete('/:id', categoryController.deleteCategories);

module.exports = router;