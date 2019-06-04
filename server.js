const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  '218177340011-22me5j0cnd86f3f0icgvd0kahc6ni8ae.apps.googleusercontent.com', // ClientID
  '8sU-6fgph6rbvPTQ6O2kpvcN', // Client Secret
  'https://developers.google.com/oauthplayground' // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token: '1/FmwUnf7PaFMAGy0ZNAgt8aqD1bGYlumpX94w5G0nStc'
});

const app = express();
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('The server started on port 3000 !!!!!!');
});

app.get('/', (req, res) => {
  res.send("<h1 style='text-align: center'>Port is running! 😃</h1>");
});

app.post('/sendmail', (req, res) => {
  console.log('request came');
  let user = req.body;
  sendMail(user, info => {
    console.log(`The mail was send with this id ${info.messageId}`);
    res.send(info);
  });
});

async function sendMail(user, callback) {
  const tokens = await oauth2Client.refreshAccessToken();
  const accessToken = tokens.credentials.access_token;

  const smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'noreplyernesto@gmail.com',
      clientId: '218177340011-22me5j0cnd86f3f0icgvd0kahc6ni8ae.apps.googleusercontent.com',
      clientSecret: '8sU-6fgph6rbvPTQ6O2kpvcN',
      refreshToken: '1/FmwUnf7PaFMAGy0ZNAgt8aqD1bGYlumpX94w5G0nStc',
      accessToken: accessToken
    }
  });

  let mailOptions = {
    from: '"Credimarket-support"<no-reply.com>',
    to: user.email,
    subject: 'Forgot Password ?',
    generateTextFromHTML: true,
    html: `<h1>Hi ${user.firstName}</h1><br>
    <h4> This is your password -> ${user.password}</h4>`
  };

  // send mail with defined transport object
  let info = await smtpTransport.sendMail(mailOptions);

  callback(info);
}
// Este es tu ID de cliente
// 218177340011-22me5j0cnd86f3f0icgvd0kahc6ni8ae.apps.googleusercontent.com

// Este es tu secreto de cliente
// 8sU-6fgph6rbvPTQ6O2kpvcN

// REfresh token
// 1/FmwUnf7PaFMAGy0ZNAgt8aqD1bGYlumpX94w5G0nStc
