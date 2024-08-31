import express from 'express';
import axios from 'axios';
import nodemailer from 'nodemailer';

const app = express();
app.use(express.json());

// Your ZeroBounce API key
const ZEROBOUNCE_API_KEY = '9b746dc10dc843099cf5329b074009d8';

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com',
    pass: 'your_email_password',
  },
});

// Endpoint to verify email and send OTP
app.post('/verify-email', async (req, res) => {
  const { email } = req.body;

  try {
    // Verify email using ZeroBounce
    const { data } = await axios.get(`https://api.zerobounce.com/v2/validate?api_key=${ZEROBOUNCE_API_KEY}&email=${email}`);

    if (data.status === 'valid') {
      // Generate OTP
      const otp = Math.floor(100000 + Math.random() * 900000);

      // Send OTP via email
      const mailOptions = {
        from: 'your_email@gmail.com',
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}`,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'OTP sent to your email.', otp });
    } else {
      res.status(400).json({ message: 'Invalid email address.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'An error occurred.', error });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
