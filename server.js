const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'ali7847khan@gmail.com', // Replace with your Gmail email
    pass: 'bscs0000',  // Replace with your Gmail password or app-specific password
  },
});

app.post('/send-email', (req, res) => {
  const { firstName, lastName, email, businessType, countryCode, phoneNumber } = req.body;

  const mailOptions = {
    from: 'ali7847khan@gmail.com',  // Replace with your Gmail email
    to: 'ali7847khan@gmail.com',   // Receiver's email (your email where you want to receive details)
    subject: 'New Farm Registration',
    text: `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Business Type: ${businessType}
      Country Code: ${countryCode}
      Phone Number: ${phoneNumber}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.send('Email sent: ' + info.response);
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
