const express = require('express');
const router = express.Router();

const orderController = require('../Controllers/order_controllers')

router.get('/', orderController.getAllOrders);
router.post('/', orderController.registerOrders);
router.get('/:id', orderController.getAllOrdersById);
router.delete('/:id', orderController.deleteOrders);

module.exports = router;