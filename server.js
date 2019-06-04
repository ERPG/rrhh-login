const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

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
  console.log("request came");
  let user = req.body;
  sendMail(user, info => {
    console.log(`The mail was send with this id ${info.messageId}`);
    res.send(info);
  });
});

async function sendMail(user, callback) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp-relay.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    // mi correo de smtp
    auth: {
      user: "noreplyernesto@gmail.com",
      pass: "credimarkettest"
    }
  });

  let mailOptions = {
    from: '"Credimarket-support"<no-reply.com>', // sender address
    to: user.email, // list of receivers
    subject: "Forgot Password ?", // Subject line
    html: `<h1>Hi ${user.firstname}</h1><br>
    <h4> This is your password -> ${user.password}</h4>`
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}
