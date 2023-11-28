const express = require('express');
const router = express.Router();

const orderItemController = require('../Controllers/order_items_controllers')

router.get('/', orderItemController.getAllOrderItems);
router.post('/', orderItemController.registerOrderItems);
router.get('/:id', orderItemController.getAllOrderItemsById);
router.delete('/:id', orderItemController.deleteOrderItems);


module.exports = router;