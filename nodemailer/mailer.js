const mailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = mailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  secure: false, // true for 465, false for other ports
  auth: {
    user: '107178ad0ea3f1', // generated ethereal user
    pass: 'e31fdfdb5bf40d', // generated ethereal password
  },
});

const emailer = async (mailoptions) => {
  return transporter.sendMail(mailoptions)
}

module.exports = emailer
