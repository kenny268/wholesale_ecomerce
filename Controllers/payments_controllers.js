const { PaymentMethod } = require('../models')

const getAllPaymentMethods = async (req, res) => {

    try {
        const products = await PaymentMethod.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const registerPaymentMethods = async (req, res) => {

    console.log(req.body)
    const { customerName,paymentType,cardNumber,expirationDate,cvv } = req.body;
    try {
        const product = new PaymentMethod({
            customerName,
            paymentType,
            cardNumber,
            expirationDate,
            cvv
        });
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getAllPaymentMethodsById = async (req, res) => {
    try {
        const products = await PaymentMethod.findById(req.params.id);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updatePaymentMethodsById = async (req, res) => {
    console.log(req.body)
    const { customerName,paymentType,cardNumber,expirationDate,cvv } = req.body;

    try {
        const product = await PaymentMethod.findById(req.params.id);
        product.customerName = customerName;
        product.paymentType = paymentType;
        product.cardNumber = cardNumber;
        product.expirationDate = expirationDate;
        product.cvv = cvv;
        await product.save();
        res.status(201).json(product);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }

}

const deletePaymentMethodsById = async (req, res) => {
    try {
        const product = await PaymentMethod.findByIdAndDelete(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    registerPaymentMethods,
    getAllPaymentMethods,
    getAllPaymentMethodsById,
    updatePaymentMethodsById,
    deletePaymentMethodsById
}