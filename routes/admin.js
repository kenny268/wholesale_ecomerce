const express = require('express')
const router = express.Router()

const adminController = require('../Controllers/admin_controllers')

router.get('/', adminController.getAllAdmins);
router.post('/', adminController.registerAdmins);
router.get('/:id', adminController.getAllAdminsById);
router.put('/:id', adminController.updateAdmins);
router.delete('/:id', adminController.deleteAdmins);
router.post('/forgotpassword', adminController.forgotPassword);
router.post('/resetpassword', adminController.resetPassword);
router.post('/changepassword', adminController.changePassword);
router.post('/verifytoken', adminController.verifyToken);
router.get('/verifyemail/:token', adminController.verifyEmail);

module.exports = router;