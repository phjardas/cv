'use strict';

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const me = '"Philipp Jardas" <phjardas@gmail.com>';
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);

exports.sendWelcomeMail = functions.auth.user().onCreate(event => {
  const { email, displayName } = event.data;

  const mailOptions = {
    from: me,
    to: me,
    subject: `[CV] New user: ${displayName || email }`,
    text: `A new user has registered:\nEmail: ${email}\nDisplay name: ${displayName}`,
  };

  return mailTransport.sendMail(mailOptions)
    .then(() => console.info(`New user notification sent for ${email}`))
    .catch(err => console.error(`Error sending new user notification for ${email}:`, err));
});
