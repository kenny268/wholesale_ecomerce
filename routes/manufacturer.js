const express = require('express');
const router = express.Router();

const manufactureController = require('../Controllers/manufacture_controllers')

router.get('/', manufactureController.getAllManufactures);
router.post('/', manufactureController.registerManufactures);
router.get('/:id', manufactureController.getAllManufacturesById);
router.put('/:id', manufactureController.updateManufactures);
router.delete('/:id', manufactureController.deleteManufactures);
router.get('/verifyemail/:token', manufactureController.verifyEmail);
router.post('/login', manufactureController.loginManufactures);
router.put('/changepassword', manufactureController.changePassword);

module.exports = router;