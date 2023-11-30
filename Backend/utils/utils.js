const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET
const argon2 = require('argon2');

// Function to hash a password
const hashPassword = async (plainTextPassword) => {
  try {
    const hashedPassword = await argon2.hash(plainTextPassword);
    return hashedPassword;
  } catch (error) {
    throw error;
  }
};

// Function to verify a password
const verifyPassword = async (plainTextPassword, hashedPassword) => {
  try {
    const match = await argon2.verify(hashedPassword, plainTextPassword);
    return match;
  } catch (error) {
    throw error;
  }
};

// Function to generate a JWT
const generateToken = (customerId) => {
  return jwt.sign({ customerId }, secretKey, { expiresIn: '1h' });
};


module.exports = {
  hashPassword,
  verifyPassword,
  generateToken,
};
