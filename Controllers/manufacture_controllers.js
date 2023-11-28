//importing the model
const e = require('express');
const {Manufacturer} = require('../models')
const {hashPassword,verifyPassword,generateToken} = require('../utils/utils')
const emailService = require('../utils/verifyEmail')

const getAllManufactures = async (req, res) => {
    try {
      const products = await Manufacturer.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  
const registerManufactures = async (req, res) => {
    
    const { businessName,contactPerson,phone,email,registrationDate,password } = req.body;

    try {
      //check if user exixt 
      const existingCustomer = await Manufacturer.findOne({ email });
      if (existingCustomer) {
        return res.status(400).json({ msg: "Customer already exist" });
      }
      //hash the password
      const hashedPassword = await hashPassword(password);

      //create a new user
      const agent = new Manufacturer({
        businessName,
        contactPerson,
        phone,
        email,
        registrationDate,
        password: hashedPassword,

      });

      await agent.save();

      //sign the token
      const token = generateToken(agent._id);

      //verify agent email
      const emailResult = await emailService.sendVerificationEmail(email);
      
      if (!emailResult.success) {
        return res.status(500).json({ error: emailResult.error });
      }else{
        res.status(200).json({ message: emailResult.message });
      }

      //send the token to the user
      res.status(201).json({ token });

      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

const loginManufactures = async (req, res) => {
    const { email, password } = req.body;
    try {
      //check if user email and password is provided
      if (!(email && password)) {
        return res.status(400).json({ msg: "All input is required" });
      }

      //check if user exist
      const user = await Manufacturer.findOne({ email });
      if (!user) {
        return res.status(404).json({ msg: "User does not exist" });
      }

      //check if user is verified
      if (!user.isverified) {
        return res.status(400).json({ msg: "Please verify your email" });
      }
      //check if password is correct
      const isMatch = await verifyPassword(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Incorrect password" });
      }
      //sign the token
      const token = generateToken(user._id);
      //send the token to the user
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

const verifyEmail = async (req, res) => {
  const { token } = req.params;
  try {
      // Verify the JWT token
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      // Find the customer with the token's email
      const customer = await Manufacturer.findOne({ email: payload.email });
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

const getAllManufacturesById = async (req, res) => {
    try {
      const products = await Manufacturer.findById(req.params.id);
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

const updateManufactures = async (req, res) => {
    const { manufacturer } = req.body;
    try {
      const product = await Manufacturer.findByIdAndUpdate(req.params.id, {
        manufacturerName:manufacturer
      });
      await product.save();
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

const deleteManufactures = async (req, res) => {
    try {
      const product = await Manufacturer.findByIdAndDelete(req.params.id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

const changePassword = async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    try {
      //check if user exist
      const user = await Manufacturer.findById(req.user);
      if (!user) {
        return res.status(404).json({ msg: "User does not exist" });
      }
      //check if password is correct
      const isMatch = await verifyPassword(oldPassword, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Incorrect password" });
      }
      //hash the password
      const hashedPassword = await hashPassword(newPassword);
      //update password
      user.password = hashedPassword;
      await user.save();
      res.status(200).json({ msg: "Password updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

module.exports = {
  registerManufactures,
  getAllManufactures,
  getAllManufacturesById,
  updateManufactures,
  deleteManufactures,
  loginManufactures,
  verifyEmail,
  changePassword,
}