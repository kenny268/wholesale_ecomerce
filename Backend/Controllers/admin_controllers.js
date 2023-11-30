const { Admin}= require('../models')
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const { hashPassword,verifyPassword} = require('../utils/utils');
const jwtUtils = require('../utils/utils');
// Assume you have a global set to store revoked tokens
const revokedTokens = new Set();

const getAllAdmins = async (req, res) => {
    try {
      const products = await Admin.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

const registerAdmins = async (req, res) => {
    
        const { adminName, adminEmail, adminPassword,phone } = req.body;

        //
        if(!adminName && !adminName && !adminPassword && !phone){
            return res.status(400).json({error:"All field must br filled"})
        }

        try {
        //check if email already exists
        const admin = await Admin.findOne({ adminEmail: adminEmail });

        if (admin) {
            return res.status(400).json({'msg': 'Email already exists'});
        }

        //hash password
        const hashedPassword = await hashPassword(adminPassword);

        //create new user
        const product = new Admin({
            adminName,
            email: adminEmail,
            password: hashedPassword,
            phone
        });

        // verification email
        const tokenCode = jwt.sign({ adminEmail }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        const CLIENT_URL = 'http://localhost:3000/admin';
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
                to: adminEmail,
                subject: 'Email Verification',
                html: output,
            };
            const result = await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'The verification email has been sent' });
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }

        //save user
        await product.save();

        res.status(201).json(product);
        } catch (error) {
        res.status(500).json({ error: error.message });
        }
    }

const getAllAdminsById = async (req, res) => {
    
    try {
        const products = await Admin.findById(req.params.id);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    }

const updateAdmins = async (req, res) => {
    const { name, email,phone } = req.body;
    try {
      
        //check username already exists
        const admin = await Admin.findByIdAndUpdate(req.params.id, {
        name,
        email,
        phone,
        isverified: false,

        });

        await admin.save();

        // verification email
        const tokenCode = jwt.sign({adminEmail:email }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        const CLIENT_URL = 'http://localhost:3000/admin';
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

        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    }

const deleteAdmins = async (req, res) => {
    try {
        const product = await Admin.findByIdAndDelete(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const loginAdmins = async (req, res) => {
    const { email, password } = req.body;
  
    try {
    // Find the admin by email
    const admin = await Admin.findOne({ email });

    // If the admin doesn't exist, return an error
    if (!admin) {
    return res.status(404).json({ error: 'Customer not found' });
    }

    // If the admin is not verified, return an error
    if (!admin.isverified) {
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
    const passwordMatch = await verifyPassword(password, admin.password);

    if (!passwordMatch) {
    return res.status(401).json({ error: 'Invalid password' });
    }

    // Password is correct, you can generate a token or session for authentication
    const token = jwt.sign({ customerId: admin.email }, process.env.JWT_SECRET, {
        expiresIn: '1d',
    });

    res.status(200).json({ message: 'Login successful',token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}

const verifyEmail = async (req, res) => {
    const { token } = req.params;

    try {
        // If the token is in the revokedTokens set, return an error
        if (revokedTokens.has(token)) {
            return res.status(401).json({ error: 'Invalid token' });
        }

        // Verify the JWT token
        const payload = jwt.verify(token, process.env.JWT_SECRET);

        console.log(payload)
        // Find the customer with the token's email
        const admin = await Admin.findOne({ email: payload.adminEmail });

        console.log(admin)

        // If the customer doesn't exist, return an error
        if (!admin) {
            return res.status(404).json({ error: 'Admin not found' });
        }
        // Set the admin's emailVerified property to true
        admin.isverified = true;

        // Save the customer to the database
        await admin.save();

        // Add token to the revokedTokens set

        revokedTokens.add(token);


        // Redirect the customer to a page informing them that their email has been verified
        res.status(200).json({ message: 'Email verified successfully' })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    }

const forgotPassword = async (req, res) => {
    const { email } = req.body;

    try {
        //check if email exists
        const admin = await Admin.findOne({ email });

        
        if(!admin){
            return res.status(400).json({error:"user Does not exist"})
        }

        //create reset token
        const resetToken = jwt.sign({ _id: admin._id }, process.env.RESET_PASSWORD_KEY, {
            expiresIn: '30m',
        });

        //send email

        const CLIENT_URL = 'http://localhost:3000/admin';
        const output = `
          <h2>Please click on below link to reset your password</h2>
          <p>${CLIENT_URL}/resetpassword/${resetToken}</p>
          <p><b>NOTE: </b> The above reset link expires in 30 minutes.</p>
        `;

        const transporter = nodemailer.createTransport({
            host: 'smtp-relay.brevo.com',
            port: 587,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USERNAME,
            to: email,
            subject: 'Reset Password',
            html: output,
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`Email sent: ${info.response}`);
                return res.status(200).json({ message: 'Email sent successfully' });
            }
        });

    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

const resetPassword = async (req, res) => {
    //Destructre password from request body
    const { password } = req.body;
    //Destructre password from params
    const { resetToken } = req.params;

    if (resetToken) {
        jwt.verify(resetToken, process.env.RESET_PASSWORD_KEY, async (err, decodedToken) => 
        {
            if (err) {
                return res.status(400).json({ error: 'Incorrect or expired link' });
            }
            const admin = await Admin.findOne({ _id: decodedToken._id });

            if (admin) {
                const hash = await hashPassword(password);
                
                admin.password = hash;
                await admin.save();
                return res.status(200).json({ message: 'Password reset successful' });
            } else {
                return res.status(401).json({ error: 'User does not exist' });
            }
        });
    } else {
        return res.status(401).json({ error: 'Authentication error' });
    }
}

const changePassword = async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    if(!req.user){
        return res.json({mssg:"Not Authenticated"})
    }
    const {_id}= req.user._id
    const admin = await Admin.findOne({ _id: _id });

   if(admin && (await verifyPassword(oldPassword, admin.adminPassword))){
       const hash = await hashPassword(newPassword);
       admin.adminPassword = hash;
       await admin.save();
       return res.status(200).json({ message: 'Password changed successfully' });
    }
    return res.status(401).json({ error: 'Invalid password' });
}

const verifyToken = async (req, res) => {
    try {
        const token = req.header('Authorization').split(' ')[1];
        if (!token) {
            return res.status(401).json({ error: 'Authentication error' });
        }
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = payload;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Authentication error' });
    }
}

const authMiddleware = async (req, res, next) => {
    // Get the token from the header
    const { authorization } = req.headers;

    console.log(authorization)
    if(!authorization){
        return res.json({mssg:"Not Authenticated"})
    }
    
    const token = authorization.split(' ')[1];
  
    try {
        // If there is no token, return an error
        if (!token) {
            return res.status(401).json({ error: 'You must be logged in.' });
        }
        // Verify the JWT
        const payload = jwt.verify(token, process.env.JWT_SECRET)
  
        // If the JWT is invalid, return an error
        if (!payload) {
            return res.status(401).json({ error: 'You must be logged in.' });
        }
        // Find the admin with the token's email
        const admin = await Admin.findOne({ email: payload.customerId });

        // If the admin doesn't exist, return an error
        if (!admin) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        // Set the admin on the req object
        req.user = admin;
        // Move to the next middleware
        next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  }
        


module.exports = {
    registerAdmins,
    getAllAdmins,
    getAllAdminsById,
    updateAdmins,
    deleteAdmins,
    verifyEmail,
    verifyToken,
    loginAdmins,
    forgotPassword,
    resetPassword,
    changePassword,
    authMiddleware
}