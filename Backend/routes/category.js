const express = require('express');
const router = express.Router();

const categoryController = require('../Controllers/category_controllers')
const {authMiddleware}= require('../Controllers/admin_controllers')

router.get('/', categoryController.getAllCategories);
router.post('/',authMiddleware,categoryController.registerCategories);
router.get('/:id',authMiddleware,categoryController.getAllCategoriesById);
router.put('/:id', authMiddleware,categoryController.updateCategories);
router.delete('/:id',authMiddleware ,categoryController.deleteCategories);

module.exports = router;