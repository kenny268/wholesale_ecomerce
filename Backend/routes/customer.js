const express = require('express');
const router = express.Router();

const  customerControllers = require('../Controllers/customer_controllers')

router.get('/', customerControllers.getAllCustomers);
router.post('/', customerControllers.registerCustomers);
router.post('/login', customerControllers.loginCustomer);
router.get('/:id', customerControllers.getAllCustomersById);
router.put('/:id', customerControllers.updateCustomersById);
router.delete('/:id', customerControllers.deleteCustomersById);
router.post('/forgot-password', customerControllers.forgotPassword);
router.post('/reset-password', customerControllers.resetPassword);
router.post('/change-password', customerControllers.changePassword);
router.post('/verify', customerControllers.verifyToken);
router.get('/verifyemail/:token', customerControllers.verifyEmail);


module.exports = router;

