//import node modules
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

// import utils
const jwtUtils = require('../utils/utils');
const cookiesUtils = require('../utils/cookiesUtils');
const { hashPassword,verifyPassword} = require('../utils/utils');

//import models
const { Customer} = require('../models');
const e = require('express');

const getAllCustomers = async (req, res) => {
    
        try {
            const customers = await Customer.find();
            res.json(customers);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

// Login a customer
const loginCustomer = async (req, res) => {
    const { email, password } = req.body;
  
    try {
    // Find the customer by email
    const customer = await Customer.findOne({ email });

    // If the customer doesn't exist, return an error
    if (!customer) {
    return res.status(404).json({ error: 'Customer not found' });
    }

    // If the customer is not verified, return an error
    if (!customer.isverified) {
        return res.status(401).json({ error: 'Please verify your email' });
    }
    // If the customer exists, check if the password is correct
    if (!password)  {
        return res.status(400).json({ error: 'Password a is required' });
    }
    if(password.length < 6){
        return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }
    
  
    // Verify the provided password against the hashed password in the database
    const passwordMatch = await verifyPassword(password, customer.password);

    if (!passwordMatch) {
    return res.status(401).json({ error: 'Invalid password' });
    }

    // Password is correct, you can generate a token or session for authentication

    res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
    };
  
const registerCustomers = async (req, res) => {
    const { customerName, address, email, phone, password } = req.body;

    try {
    // Find an existing customer with the provided email
    const existingCustomer = await Customer.findOne({ email });

    // If the customer exists, return an error
    if (existingCustomer) {
        return res.status(409).json({ error: 'Customer already exists' });
    }
    
    // Hash the password using the utility function
    const hashedPassword = await hashPassword(password);

    // Create a new customer instance with the hashed password
    const customer = new Customer({
        customerName,
        address,
        email,
        phone,
        password: hashedPassword, // Store the hashed password in the database
    });

    // Save the customer to the database
    await customer.save();

    // verification email
    const tokenCode = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
    const CLIENT_URL = 'http://localhost:3000/user';
    const output = `
    <h2>Please click on below link to verify your email</h2>
    <p>${CLIENT_URL}/verifyemail/${tokenCode}</p>
    <p><b>NOTE: </b> The above verification link expires in 1 hour.</p>
    `;
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp-relay.brevo.com",
            port: 587,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.PASSWORD,
        },

        });
        const mailOptions = {
            from: process.env.EMAIL_USERNAME,
            to: email,
            subject: 'Email Verification',
            html: output,
        };
        const result = await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'The verification email has been sent' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
    // End of verification email

   

    // Generate a JWT token using the utility function
    const token = jwtUtils.generateToken(customer._id);

    // Set the HTTP Only cookie with the JWT token

    cookiesUtils.setCookie(res, 'token', token,{ httpOnly: true });
    
    // Return the new customer
    res.status(201).json({id:customer._id, token:token});

    } catch (error) {
    res.status(500).json({ error: error.message });
    }
    };

const forgotPassword = async (req, res) => {
    const { email } = req.body;
    // Find the customer with the given email
    const customer = await Customer.findOne({ email });
    // If the customer doesn't exist, return an error
    if (!customer) {
        return res.status(404).json({ error: 'Customer not found' });
    }
    // Generate a JWT token using the utility function
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
    const CLIENT_URL = 'http://localhost:3000/user';
    const output = `
    <h2>Please click on below link to reset your account password</h2>
    <p>${CLIENT_URL}/reset/${token}</p>
    <p><b>NOTE: </b> The above reset link expires in 1 hour.</p>
    `;
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });
        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Password Reset Link',
            html: output,
        };
        const result = await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'The reset email has been sent' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
    };

const changePassword = async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    try {
        // Find the customer with the given email
        const customer = await Customer.findOne({ email: req.customer.email });
        // If the customer doesn't exist, return an error
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        // Verify the provided password against the hashed password in the database
        const passwordMatch = await verifyPassword(oldPassword, customer.password);
        // If the password doesn't match, return an error
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid password' });
        }
        // Hash the new password
        const hashedPassword = await hashPassword(newPassword);
        // Set the customer's password to the newly hashed password
        customer.password = hashedPassword;
        // Save the customer to the database
        await customer.save();
        // Return a success response
        res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    };       

const verifyEmail = async (req, res) => {
    const { token } = req.params;
    try {
        // Verify the JWT token
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        // Find the customer with the token's email
        const customer = await Customer.findOne({ email: payload.email });
        // If the customer doesn't exist, return an error
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        // Set the customer's emailVerified property to true
        customer.isverified = true;
        // Save the customer to the database
        await customer.save();
        // Redirect the customer to a page informing them that their email has been verified
        res.status(200).json({ message: 'Email verified successfully' })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    }

const sendEmail = async (req, res) => {
    const { email } = req.body;
    // Find the customer with the given email
    
    const existingCustomer = await Customer.findOne({ email });
    // If the customer doesn't exist, return an error
    if (!existingCustomer) {
        return res.status(404).json({ error: 'Customer not found' });
    }

    // Generate a JWT token using the utility function
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
    const CLIENT_URL = 'http://localhost:3000';
    const output = `
    <h2>Please click on below link to reset your account password</h2>
    <p>${CLIENT_URL}/reset/${token}</p>
    <p><b>NOTE: </b> The above reset link expires in 1 hour.</p>
    `;
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });
        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Password Reset Link',
            html: output,
        };
        const result = await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'The reset email has been sent' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
    };


const getAllCustomersById = async (req, res) => {
    try {
        const customers = await Customer.findById(req.params.id);
        res.json(customers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    };

const updateCustomersById = async (req, res) => {
    const { customerName, address, email, phone } = req.body;
    try {
        const customers = await Customer.findById(req.params.id);
        customers.customerName = customerName;
        customers.address = address;
        customers.email = email;
        customers.phone = phone;
        customers.isverified = true;
        

        await customers.save();
        res.status(201).json(customers);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }

    };

const deleteCustomersById = async (req, res) => {
    try {
        const customers = await Customer.findByIdAndDelete(req.params.id);
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    };

const resetPassword = async (req, res) => {
    const { token, newPassword } = req.body;
    try {
        // Verify the JWT token
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        // Find the customer with the token's email
        const customer = await Customer.findOne({ email: payload.email });
        // If the customer doesn't exist, return an error
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        // Hash the new password
        const hashedPassword = await hashPassword(newPassword);
        // Set the customer's password to the newly hashed password
        customer.password = hashedPassword;
        // Save the customer to the database
        await customer.save();
        // Redirect the customer to a page informing them that their password has been reset
        res.redirect('http://localhost:3000/reset');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    }

const verifyToken = async (req, res) => {
    const { token } = req.body;
    try {
        // Verify the JWT token
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        // Find the customer with the token's email
        const customer = await Customer.findOne({ email: payload.email });
        // If the customer doesn't exist, return an error
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        // Redirect the customer to a page informing them that their password has been reset
        res.redirect('http://localhost:3000/reset');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    }

module.exports = {
    getAllCustomers,
    registerCustomers,
    getAllCustomersById,
    updateCustomersById,
    deleteCustomersById,
    loginCustomer,
    forgotPassword,
    resetPassword,
    changePassword,
    verifyEmail,
    sendEmail,
    verifyToken
}