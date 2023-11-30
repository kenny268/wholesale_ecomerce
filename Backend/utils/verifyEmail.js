const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const sendVerificationEmail = async (email) => {
try {
  const tokenCode = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  const CLIENT_URL = 'http://localhost:3000/user';
  const output = `
    <h2>Please click on below link to verify your email</h2>
    <p>${CLIENT_URL}/verifyemail/${tokenCode}</p>
    <p><b>NOTE: </b> The above verification link expires in 1 hour.</p>
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
      subject: 'Email Verification',
      html: output,
    };

    const result = await transporter.sendMail(mailOptions);
    return { success: true, message: 'The verification email has been sent' };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

const sendAdminVerificationEmail = async (email) => {
  try {
    const tokenCode = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
  
    const CLIENT_URL = 'http://localhost:3000/admin';
    const output = `
      <h2>Please click on below link to verify your email</h2>
      <p>${CLIENT_URL}/verifyemail/${tokenCode}</p>
      <p><b>NOTE: </b> The above verification link expires in 1 hour.</p>
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
        subject: 'Email Verification',
        html: output,
      };
  
      const result = await transporter.sendMail(mailOptions);
      return { success: true, message: 'The verification email has been sent' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };



module.exports = {
  sendVerificationEmail,
  sendAdminVerificationEmail
};
