const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const dotenv = require("dotenv");

dotenv.config();

const oauth2Client = new OAuth2(
  process.env.CLIENT_ID, // ClientID
  process.env.CLIENT_SECRET, // Client Secret
  "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN
});

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("The server started on port 3000 !!!!!!");
});

app.get("/", (req, res) => {
  res.send("<h1 style='text-align: center'>Port is running! 😃</h1>");
});

app.post("/sendmail", (req, res) => {
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
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "noreplyernesto@gmail.com",
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: accessToken
    }
  });

  let mailOptions = {
    from: '"Credimarket-support"<no-reply.com>',
    to: user.email,
    subject: "Forgot Password ?",
    generateTextFromHTML: true,
    html: `<h1>Hi ${user.firstName}</h1><br>
    <h4> This is your password -> ${user.password}</h4>`
  };

  // send mail with defined transport object
  let info = await smtpTransport.sendMail(mailOptions);

  callback(info);
}
