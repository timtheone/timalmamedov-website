const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const admin = require('firebase-admin');
admin.initializeApp();

const nodemailer = require('nodemailer');
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);


exports.sendContactMessage = functions.database.ref('/messages/{pushKey}').onWrite((change,context) => {
    // const snapshot = event.data;
    // Only send email for new messages.
    if (change.before.val() || !change.after.val().name) {
      return;
    }
    
    const val = change.after.val();
    
    const mailOptions = {
      to: 'timur.almamedov@gmail.com',
      subject: `Information Request from ${val.name}`,
      html: val.html
    };
    return mailTransport.sendMail(mailOptions).then(() => {
      return console.log('Mail sent to: timur.almamedov@gmail.com')
    });
  });