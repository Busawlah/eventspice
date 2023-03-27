const mailer = require('nodemailer');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.join(__dirname, "../.env"),
});

// create reusable transporter object using the default SMTP transport
let transporter = mailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.EMAILUSERNAME, // generated ethereal user
    pass: process.env.EMAILPASSWORD, // generated ethereal password
  },
});

const emailer = async (mailoptions) => {
  return transporter.sendMail(mailoptions)
}

module.exports = emailer
